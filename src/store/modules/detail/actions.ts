import { ActionTypes, IContact } from './types';

export function detailContact(details: any) {
  return {
    type: ActionTypes.detailContact,
    payload: {
      details
    }
  }
}


export function detailContactSuccess(details: any) {
  return {
    type: ActionTypes.detailSuccess,
    payload: {
      details
    }
  }
}


