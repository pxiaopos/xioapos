import { combineReducers } from 'redux';
import item from './item';
import history from './history';

const reducers = combineReducers({
  item,
  history,
});

export default reducers;
