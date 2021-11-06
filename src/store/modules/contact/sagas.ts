import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api'
import groupBy from '../../../utils/groupBy'

import { ActionTypes, IContact} from './types';

import { listContactRequest, listContactSuccess, listContactFailure } from './actions';

type ListContactRequest = ReturnType<typeof listContactRequest>;


function* listContact() {
  try {
    const response: AxiosResponse<IContact> = yield call(
      api.get,
      '',
    );

    const isFavoriteData = groupBy(response.data, 'isFavorite');

    const formatDataContact =
    [{ title: 'Favorite Contact', data: [...isFavoriteData.true].sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })},
    { title: 'Other Contact', data: [...isFavoriteData.false].sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })}];

    yield put(listContactSuccess(formatDataContact));

    console.log(response.data, 'Data saga')
  } catch(e) {
    console.log(e)
     yield put(listContactFailure())
  }
}

export default all([
  takeLatest(ActionTypes.listContactRequest, listContact)
])
