import { takeLatest } from 'redux-saga/effects';
import { getHomeContentRequest, } from './homecontent';
import { HOME_CONTENT_REQUEST, } from '../constants';

function* rootSaga() {
  yield takeLatest(HOME_CONTENT_REQUEST, getHomeContentRequest);
}

export default rootSaga;
