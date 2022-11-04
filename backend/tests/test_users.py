from fastapi.testclient import TestClient
from sqlalchemy.orm import Session

from app.models.user import User


def test_post_user(db: Session, client: TestClient):
    
    response = client.post(
        "/choice_options/",
        json={
            "answer": "Paris",
            "question_id": question.id,
            "correct": False,
        },
    )
    assert response.status_code == 200
    choice = (
        db.query(ChoiceOption)
        .where(ChoiceOption.answer == "Paris")
        .where(ChoiceOption.question_id == question.id)
        .first()
    )
    assert choice is not None
    assert choice.id > 0
    assert choice.answer == "Paris"
    assert choice.correct == False