import { routerStateReducer as router } from 'redux-router'
import { combineReducers } from 'redux';
import user from './user';

const rootReducer = combineReducers({
  user,
  router
});

export default rootReducer;
