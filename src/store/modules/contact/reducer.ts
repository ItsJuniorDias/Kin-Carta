import { Reducer } from 'react';
import produce from 'immer';
import { IContactState, IContact, ActionTypes } from './types';

const INITIAL_STATE: IContactState = {
  data: []
}

const contact: Reducer<IContactState> = (
  state = INITIAL_STATE,
  action,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.listContactSuccess: {
        const { contact } = action.payload;

        return [
          ...contact
        ]
      }
      case ActionTypes.listContactRequest: {
        break;
      }
      default: {
        return draft;
      }
    }
  });
}

export default contact;
