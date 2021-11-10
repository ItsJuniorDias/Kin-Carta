import { ActionTypes, IDetails } from './types';

export function detailContact(details: IDetails) {
  return {
    type: ActionTypes.detailContact,
    payload: {
      details
    }
  }
}


export function detailContactSuccess(details: IDetails) {
  return {
    type: ActionTypes.detailSuccess,
    payload: {
      details
    }
  }
}


