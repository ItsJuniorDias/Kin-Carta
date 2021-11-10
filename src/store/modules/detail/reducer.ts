import { Reducer } from 'react';
import produce from 'immer';
import { IDetailsState, ActionTypes } from './types';

const INITIAL_STATE: IDetailsState  = {
  id: '',
  isFavorite: false
}

const detail: Reducer<IContactState> = (
  state = INITIAL_STATE,
  action,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.detailSuccess: {
        const { details: { payload }} = action.payload;

        const { details: { id, isFavorite} } = payload;

        return {
          ...draft,
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
