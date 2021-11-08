import { all } from 'redux-saga/effects';

import contact from './contact/sagas';
import detail from './detail/sagas';

export default function* rootSaga() {
  return yield all([
    contact,
    detail
  ]);
}
