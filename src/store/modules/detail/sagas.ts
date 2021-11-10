import { all, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from './types';

import { detailContactSuccess } from './actions'

function* detailContact(payload: any) {
  yield put(detailContactSuccess(payload))
}

export default all([
  takeLatest(ActionTypes.detailContact, detailContact),
])
