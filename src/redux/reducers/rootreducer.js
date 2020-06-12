import { combineReducers, } from 'redux';
import { connectRouter } from 'connected-react-router';
import homeContentReducer from './homecontentreducer';

export default ({ historyRouterMiddleWare, }) => combineReducers({
  router: connectRouter(historyRouterMiddleWare),
  homeContent: homeContentReducer,
});
