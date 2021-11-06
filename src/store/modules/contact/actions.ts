import { ActionTypes,IContact } from './types';

export function listContactRequest(contact: IContact) {
  return {
    type: ActionTypes.listContactRequest,
    payload: {
      contact
    }
  }
}

export function listContactSuccess(contact: IContact) {
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
