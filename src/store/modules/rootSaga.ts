import { all } from 'redux-saga/effects';

import contact from './contact/sagas';

export default function* rootSaga() {
  return yield all([contact]);
}
