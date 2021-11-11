import { ActionTypes, IDataSectionContact } from './types';

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

export function removeFromFavorite(removeFavorite: any) {
  return {
    type: ActionTypes.removeFromFavorite,
    removeFavorite
  }
}

export function removeFromFavoriteSuccess(removeFavorite: any) {
  return {
    type: ActionTypes.removeFromFavoriteSuccess,
    payload: {
      removeFavorite
    }
  }
}


