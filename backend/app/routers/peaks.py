from typing import Optional, List
import datetime
import pandas as pd

import requests
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.deps import get_db
from app.dependencies.auth import credential_check
from app.models.user import User
from scipy.signal import find_peaks

# from app.db.utils import save_model

from app.models.peaks import Peaks, peaksOut
from app.models.task_activity import TaskActivity

router = APIRouter()


@router.get("/", response_model=List[peaksOut])
async def get_peaks(
    search: Optional[str] = None,
    limit: Optional[int] = 100,
    skip: Optional[int] = 0,
    db: Session = Depends(get_db),
):
    return db.query(Peaks).limit(limit).offset(skip).all()


@router.post(
    "/calculate_activities",
    dependencies=[Depends(credential_check)],
)
def post_calculate_activites(
    db : Session = Depends(get_db),
):  
    """
        This function will be called from google cloud every 15 minutes.
    """
    # äddää tässä ne activityt tietokantaan
    db.add(User(username="crontriggered"))
    db.commit()
    return "OK"


async def get_data(
    db: Session = Depends(get_db),
):
    # https://api.fingrid.fi/v1/variable/165/events/csv?start_time=2022-10-01T00%3A00%3A00Z&end_time=2022-10-01T00%3A00%3A00Z
    date = datetime.date.today() 
    baseurl = 'https://api.fingrid.fi/v1/variable/165/events/csv'
    startTime = (date + datetime.timedelta(days=-1)).strftime("%Y-%m-%dT") + '22:00:00Z'
    endTime = (date + datetime.timedelta(days=1)).strftime("%Y-%m-%dT%H:%M:%SZ")
    response = requests.get(baseurl, params={'start_time': startTime, 'end_time': endTime})
    data = pd.DataFrame([x.split(',') for x in response.text.split('\n')])[1:-1]
    data.columns = ['time', 'drop', 'value']
    data = data.drop(['drop'],axis=1)
    data['time'] = pd.to_datetime(data['time'])
    data['value'] = data['value'].astype(str).astype(float).astype(int)
    data = data.groupby([data['time'].dt.hour])['value'].sum()
    valleys = []
    peaks, _ = find_peaks(data['value'], height=0)
    for i in range(len(peaks)-1):
        min = 10000000000
        val = 0
        for y in range(peaks[i], peaks[i+1]):
            if(min > data['value'][y]):
                min = data['value'][y]
                val = y
        valleys.append(val)

    for point in data:
        if(point in valleys):
            db.add(Peaks(time=point['time'], value=point['value'], isValley=True))
        if(point in peaks):
            db.add(Peaks(time=point['time'], value=point['value'], isPeak=False))
        else:
            db.add(Peaks(time=point['time'], value=point['value'], isPeak=False, isValley=False))
        db.commit()
    return db.query(Peaks).all()