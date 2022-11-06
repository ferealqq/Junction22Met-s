from typing import Optional, List
import datetime
import pandas as pd
from app.db.utils import save_model

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
from app.models.task import Task, TaskOut

router = APIRouter()


@router.get("/", response_model=List[peaksOut])
async def get_peaks(
    search: Optional[str] = None,
    limit: Optional[int] = 100,
    skip: Optional[int] = 0,
    db: Session = Depends(get_db),
):
    return db.query(Peaks).limit(limit).offset(skip).all()





async def get_data(
    date: datetime.datetime,
    db: Session = Depends(get_db),
):
    # https://api.fingrid.fi/v1/variable/165/events/csv?start_time=2022-10-01T00%3A00%3A00Z&end_time=2022-10-01T00%3A00%3A00Z
    baseurl = 'https://api.fingrid.fi/v1/variable/165/events/csv'
    startTime = (date + datetime.timedelta(days=-1)).strftime("%Y-%m-%dT") + '22:00:00Z'
    endTime = (date).strftime("%Y-%m-%dT") + '22:00:00Z'
    response = requests.get(baseurl, params={'start_time': startTime, 'end_time': endTime})
    data = pd.DataFrame([x.split(',') for x in response.text.split('\n')])[1:-1]
    data.columns = ['time', 'drop', 'value']
    data = data.drop(['drop'],axis=1)
    data['time'] = pd.to_datetime(data['time'])
    data['value'] = data['value'].astype(str).astype(float).astype(int)
    res = pd.DataFrame({"time": [],"value": []})
    values = data.groupby([data['time'].dt.hour]).sum()
    time = []
    for i in range(24):
        time.append(datetime.datetime(date.year, date.month, date.day, i, 0, 0))

    res['time'] = time
    res['value'] = values['value']
    valleys = []
    x = res['value']
    peaks, _ = find_peaks(x, distance=3)
    for i in range(len(peaks)-1):
        min = 10000000000
        val = 0
        for y in range(peaks[i], peaks[i+1]):
            if(min > data['value'][y]):
                min = data['value'][y]
                val = y
        valleys.append(val)

    db.query(Peaks).delete()
    for i, point in res.iterrows():
        if(i in valleys):
            db.add(Peaks(time=point['time'], value=float(point['value']), isValley=True))
        elif(i in peaks):
            db.add(Peaks(time=point['time'], value=float(point['value']), isPeak=True))
        else:
            db.add(Peaks(time=point['time'], value=float(point['value']), isPeak=False, isValley=False))
        db.commit()
    return db.query(Peaks).all()


@router.post(
    "/calculate_activities",
    dependencies=[Depends(credential_check)],
)
async def post_calculate_activites(
    db : Session = Depends(get_db),
):  
    """
        This function will be called from google cloud every 15 minutes.
    """
    # äddää tässä ne activityt tietokantaan
    # KWH for appliances
    
    taskslist = db.query(Task).all()
    tasks = pd.DataFrame({"id": [],"title": [], "desc": [], "emission": []})

    for(i, point) in enumerate(taskslist):
        tasks = tasks.append({'id': point.__dict__["id"], 'title': point.__dict__["title"], 'desc': point.__dict__["desc"], 'emission': point.__dict__["emission"]}, ignore_index = True)
    db.add(User(username="crontriggered"))
    db.commit()
    peaks = pd.DataFrame({"time": [],"value": [], "isPeak": [], "isValley": []})
    res = await get_data(datetime.datetime.now(),db)
    for(i, point) in enumerate(res):
        peaks = peaks.append({'time': point.__dict__["time"], 'value': point.__dict__["value"], 'isPeak': point.__dict__["isPeak"], 'isValley': point.__dict__["isValley"]}, ignore_index = True)
    today = pd.DataFrame(requests.get('https://api.spot-hinta.fi/Today').json())
    df = pd.DataFrame(today)
    rank1 = df[df['Rank'] == 1]['PriceWithTax']
    rank24 = df[df['Rank'] == 24]['PriceWithTax']
    Bestsavings = float(rank24) - float(rank1)
    # create lunch activity
    bestTimeForLunch = peaks.iloc[10]
    worstTimeForLunch = peaks.iloc[10]
    bestTimeForLunchIndex = 10
    worstTimeForLunchIndex = 10
    for i in range(10, 14):
        if peaks.iloc[i]['value'] < bestTimeForLunch['value']:
            bestTimeForLunch = peaks.iloc[i]
            bestTimeForLunchIndex = i
        if peaks.iloc[i]['value'] > worstTimeForLunch['value']:
            worstTimeForLunch = peaks.iloc[i]
            worstTimeForLunchIndex = i
    lunchSavings = -(float(df.iloc[worstTimeForLunchIndex]['PriceWithTax']) - float(df.iloc[bestTimeForLunchIndex]['PriceWithTax']))
    startTime = bestTimeForLunch['time']
    endTime = bestTimeForLunch['time'] + datetime.timedelta(hours=1)
    lunchTask = tasks[tasks['title'] == 'lounas']
    lunchEmissionSaving = (lunchTask.iloc[0]['emission'] * 47) * ((worstTimeForLunch['value'] - bestTimeForLunch['value']) / (worstTimeForLunch['value']))
    db.add(TaskActivity(starts_at=startTime, ends_at=endTime, task_id=lunchTask.iloc[0]['id'], money_saved=(float(lunchSavings)*float(lunchTask['emission'])), emissions_saved=(lunchEmissionSaving)))
    # create dinner activity
    bestTimeForDinner = peaks.iloc[16]
    worstTimeForDinner = peaks.iloc[16]
    bestTimeForDinnerIndex = 16
    worstTimeForDinnerIndex = 16
    for i in range(16, 20):
        if peaks.iloc[i]['value'] < bestTimeForDinner['value']:
            bestTimeForDinner = peaks.iloc[i]
            bestTimeForDinnerIndex = i
        if peaks.iloc[i]['value'] > worstTimeForDinner['value']:
            worstTimeForDinner = peaks.iloc[i]
            worstTimeForDinnerIndex = i
    dinnerSavings = -(float(df.iloc[worstTimeForDinnerIndex]['PriceWithTax']) - float(df.iloc[bestTimeForDinnerIndex]['PriceWithTax']))

    startTime = bestTimeForDinner['time']
    endTime = bestTimeForDinner['time'] + datetime.timedelta(hours=1)
    dinnerTask = tasks[tasks['title'] == 'dinner']
    dinnerEmissionSaving = (dinnerTask.iloc[0]['emission'] * 47) * ((worstTimeForDinner['value'] - bestTimeForDinner['value']) / (worstTimeForDinner['value']))
    db.add(TaskActivity(starts_at=startTime, ends_at=endTime, task_id=dinnerTask.iloc[0]['id'], money_saved=(float(dinnerSavings)*float(dinnerTask['emission'])), emissions_saved=dinnerEmissionSaving))

    lappariTask = tasks[tasks['title'] == 'lappari']
    lamputTask = tasks[tasks['title'] == 'lamput']
    kiuasTask = tasks[tasks['title'] == 'kiuas']
    pyykinpesukoneTask = tasks[tasks['title'] == 'pyykinpesu']
    astianpesukoneTask = tasks[tasks['title'] == 'astianpesukone']
    teslaTask = tasks[tasks['title'] == 'tesla']
    for i in range(len(peaks)):
        if peaks.iloc[i]['isPeak'] == True:
            startTime = peaks.iloc[i]['time']
            endTime = peaks.iloc[i]['time'] + datetime.timedelta(hours=1)
            db.add(TaskActivity(starts_at=startTime, ends_at=endTime, task_id=lappariTask.iloc[0]['id'], emissions_saved=(47*float(lappariTask['emission'])), money_saved=(Bestsavings * float(lappariTask['emission']))))
            db.add(TaskActivity(starts_at=startTime, ends_at=endTime, task_id=lamputTask.iloc[0]['id'], emissions_saved=(47*float(lamputTask['emission'])), money_saved=(Bestsavings * float(lamputTask['emission']))))


    i = df[df['Rank'] == 1].index[0]
    date = datetime.datetime.now()
    startTime = datetime.datetime(date.year, date.month, date.day, i, 0, 0)

    endTime = startTime + datetime.timedelta(hours=1)
    db.add(TaskActivity(starts_at=startTime, ends_at=endTime, task_id=astianpesukoneTask.iloc[0]['id'], emissions_saved=(47*float(astianpesukoneTask['emission'])), money_saved=(Bestsavings * float(astianpesukoneTask['emission']))))
    db.add(TaskActivity(starts_at=startTime, ends_at=endTime, task_id=pyykinpesukoneTask.iloc[0]['id'], emissions_saved=(47*float(pyykinpesukoneTask['emission'])), money_saved=(Bestsavings * float(pyykinpesukoneTask['emission']))))
    db.add(TaskActivity(starts_at=startTime, ends_at=endTime, task_id=teslaTask.iloc[0]['id'], emissions_saved=(47*float(teslaTask['emission'])), money_saved=(Bestsavings * float(teslaTask['emission']))))
    
    startTime = datetime.datetime.now()
    endTime = startTime + datetime.timedelta(days=1)
    db.add(TaskActivity(starts_at=startTime, ends_at=endTime, task_id=kiuasTask.iloc[0]['id'], emissions_saved=(47*float(kiuasTask['emission'])), money_saved=(Bestsavings * float(kiuasTask['emission']))))
    db.commit()

    return "OK"