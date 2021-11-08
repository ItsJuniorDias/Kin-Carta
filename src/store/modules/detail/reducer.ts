import { Reducer } from 'react';
import produce from 'immer';
import { IContactState, IContact, ActionTypes } from './types';

const INITIAL_STATE: IContactState = {
  data: [],
}

const detail: Reducer<IContactState> = (
  state = INITIAL_STATE,
  action,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.detailSuccess: {
        console.log(action.payload, 'PAYLOAD DETAIL')
        const { details: { payload }} = action.payload;

        const { details: { id, isFavorite} } = payload;

        return {
          id,
          isFavorite
        }
      }
      default: {
        return draft;
      }
    }
  });
}

export default detail;
