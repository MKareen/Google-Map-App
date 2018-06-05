import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import eventReducer from './event';

export default combineReducers({
  auth,
  events: eventReducer,
  form: formReducer
});
