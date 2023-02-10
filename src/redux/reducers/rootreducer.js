import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import global from './globalReducer';
import history from 'utils/history';

export default () =>
  combineReducers({
    router: connectRouter(history),
    global,
  });
