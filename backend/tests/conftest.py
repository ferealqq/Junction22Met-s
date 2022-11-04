import asyncio

import pytest
from sqlalchemy import create_engine, inspect
from sqlalchemy.orm import Session

from app.main import app
from app.settings import get_settings
from app.db.base import Base
from fastapi.testclient import TestClient


@pytest.fixture(name="db")
def session_fixture():
    engine = create_engine(get_settings().DB_DSN)
    Base.metadata.create_all(engine)
    with Session(engine) as session:
        yield session
    drop_everything(engine)


@pytest.fixture(name="client")
def client_fixture():
    client = TestClient(app)
    yield client
    app.dependency_overrides.clear()


def drop_everything(engine):
    from sqlalchemy.schema import (
        DropConstraint,
        DropTable,
        ForeignKeyConstraint,
        MetaData,
        Table,
    )

    con = engine.connect()
    trans = con.begin()
    inspector = inspect(engine)

    # We need to re-create a minimal metadata with only the required things to
    # successfully emit drop constraints and tables commands for postgres (based
    # on the actual schema of the running instance)
    meta = MetaData()
    tables = []
    all_fkeys = []

    for table_name in inspector.get_table_names():
        fkeys = []

        for fkey in inspector.get_foreign_keys(table_name):
            if not fkey["name"]:
                continue

            fkeys.append(ForeignKeyConstraint((), (), name=fkey["name"]))

        tables.append(Table(table_name, meta, *fkeys))
        all_fkeys.extend(fkeys)

    for fkey in all_fkeys:
        con.execute(DropConstraint(fkey))

    for table in tables:
        con.execute(DropTable(table))

    trans.commit()
