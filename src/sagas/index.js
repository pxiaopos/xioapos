import { all, put, takeLatest } from 'redux-saga/effects';

import consts from '../actions/consts';
import services from '../services';

function * add (action) {
  yield services.add(action);
}

function * load (action) {
  const res = yield services.load();
  yield put({ type: consts.history.update, res });
}

export default function * rootSaga () {
  yield all([
    takeLatest(consts.item.add, add),
    takeLatest(consts.history.load, load),
  ]);
}
