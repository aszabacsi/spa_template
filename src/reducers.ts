import { combineReducers } from 'redux';

import userReducer from './reducers/userReducer';
import client from './apolloClient';

export default combineReducers({
  user: userReducer,
  apollo: client.reducer()
});