import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api'
import groupBy from '../../../utils/groupBy'

import { ActionTypes, IContact} from './types';

import { detailContactSuccess } from './actions'

function* detailContact(payload) {
  console.log(payload, 'PAYLOAD SAGA')
  yield put(detailContactSuccess(payload))
}

export default all([
  takeLatest(ActionTypes.detailContact, detailContact),
])
