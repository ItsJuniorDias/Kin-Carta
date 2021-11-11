import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest, select } from 'redux-saga/effects';

import api from '../../../services/api'
import groupBy from '../../../utils/groupBy'

import { ActionTypes, IContact} from './types';

import {
  listContactSuccess,
  listContactFailure,
  passToFavoriteSuccess,
  removeFromFavoriteSuccess
} from './actions';

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
  } catch(e) {
    console.log(e)
     yield put(listContactFailure())
  }
}

function* passToFavorite(payload) {
  const state = yield select();
  const { toFavorite: { id } } = payload;

  const { contact } = state;

  const contactOtherListFavorite = contact[1];
  const { data } = contactOtherListFavorite;

  const findContact = data.find((item: IContact) => item.id === id);

  const dataFavorite = {
   ...findContact,
   isFavorite: true
  }

  const contactListIsFavorite = contact[0];
  const dataIsFavorite = contactListIsFavorite['data'];

  const dataNewListIsFavorite = [
    ...dataIsFavorite,
    dataFavorite
  ];

  const formatData = dataNewListIsFavorite.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  })

  const removeItemOtherFavorite = data.filter((item: IContact) => item.id !== id);

  const dataReducerContact = [
    {
      title: 'Favorite Contact',
      data: formatData
    },
    {
      title: 'Other Contact',
      data: removeItemOtherFavorite
    }
  ]

  try {
   yield put(passToFavoriteSuccess(dataReducerContact));
  } catch(e) {
    console.log(e)
  }

}

function* removeFromFavorite(payload) {
  const state = yield select();
  const { removeFavorite: { id } } = payload;

  const { contact } = state;

  const listFavorite = contact[0];
  const { data } = listFavorite;

  const findContact = data.find((item: IContact) => item.id === id);

  const dataRemoveFavorite = {
    ...findContact,
    isFavorite: false,
  };

   const otherContacts = contact[1];
   const dataOtherContact = otherContacts['data'];

   const dataNewOtherContacts = [
    ...dataOtherContact,
    dataRemoveFavorite
  ];

  const formatOtherContact = dataNewOtherContacts.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  const removeItemFavorite = data.filter((item: IContact) => item.id !== id);

  const dataReducerContact = [
    {
      title: 'Favorite Contact',
      data: removeItemFavorite
    },
    {
      title: 'Other Contact',
      data: formatOtherContact
    }
  ]

  try {
   yield put(removeFromFavoriteSuccess(dataReducerContact));
  } catch(e) {
    console.log(e)
  }

}

export default all([
  takeLatest(ActionTypes.listContactRequest, listContact),
  takeLatest(ActionTypes.passToFavorite, passToFavorite),
  takeLatest(ActionTypes.removeFromFavorite, removeFromFavorite),
])
