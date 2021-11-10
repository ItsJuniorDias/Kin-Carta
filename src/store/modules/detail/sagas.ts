import { all, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from './types';

import { detailContactSuccess } from './actions'

function* detailContact(payload: any) {
  try {
    yield put(detailContactSuccess(payload));
   } catch(e) {
     console.log(e)
   }
}

export default all([
  takeLatest(ActionTypes.detailContact, detailContact),
])
