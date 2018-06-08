import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getEvents } from './api/event';
import { FETCH_EVENTS } from './types';


function *fetchEvents({ payload: { term } }) {
  try {
    const response = yield call(getEvents, term);
    yield put({ type: FETCH_EVENTS, payload: response });
  } catch (err) {
    console.warn("error", err);
  }
}

export const eventsSaga = [
  takeEvery('EVENTS_FETCH_REQUESTED', fetchEvents)
];