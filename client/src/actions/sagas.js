import { all } from 'redux-saga/effects';
import { eventsSaga } from './eventBrites';
import { authSaga } from './index';

export default function* rootSaga() {
  yield all([
     ...eventsSaga,
     ...authSaga
   ]);
}