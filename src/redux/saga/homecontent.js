import { delay, put, } from 'redux-saga/effects';
import { getHomeContentSuccess, } from '../actions/homecontent';

export function* getHomeContentRequest(action) {
  /* eslint-disable no-unused-vars */
  const params = action.params;

  yield delay(1000);

  yield put(getHomeContentSuccess('success'));
}
