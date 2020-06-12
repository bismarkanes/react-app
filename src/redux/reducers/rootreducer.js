import { combineReducers, } from 'redux';
import { connectRouter } from 'connected-react-router';
import homeContentReducer from './homecontentreducer';
import history from '../../utils/history';

export default () => combineReducers({
  router: connectRouter(history),
  homeContent: homeContentReducer,
});
