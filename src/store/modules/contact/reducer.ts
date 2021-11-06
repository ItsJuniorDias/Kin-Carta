import { Reducer } from 'react';
import { IContactState, IContact } from './types';

const INITIAL_STATE: IContactState = {
  data: []
}

const contact: Reducer<IContactState> = () => {
  return INITIAL_STATE;
}

export default contact;
