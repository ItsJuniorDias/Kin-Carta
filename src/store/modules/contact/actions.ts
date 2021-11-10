import { ActionTypes, IDataSectionContact } from './types';
import { IDetails } from '../detail/types'

export function listContactRequest() {
  return {
    type: ActionTypes.listContactRequest,
    payload: {}
  }
}

export function listContactSuccess(contact: IDataSectionContact) {
  return {
    type: ActionTypes.listContactSuccess,
    payload: {
      contact
    }
  }
}

export function listContactFailure() {
  return {
    type: ActionTypes.listContactFailure,
    payload: {}
  }
}

export function passToFavorite(toFavorite: any) {
  return {
    type: ActionTypes.passToFavorite,
    toFavorite
  }
}

export function passToFavoriteSuccess(toFavorite: any) {
  return {
    type: ActionTypes.passToFavoriteSuccess,
    payload: {
      toFavorite
    }
  }
}


