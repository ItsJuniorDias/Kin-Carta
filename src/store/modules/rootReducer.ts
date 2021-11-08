import { combineReducers } from 'redux';

import contact from './contact/reducer';
import detail from './detail/reducer';

export default combineReducers({
  contact,
  detail
})
