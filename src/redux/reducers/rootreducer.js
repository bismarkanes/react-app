import { combineReducers, } from 'redux';
import homeContentReducer from './homecontentreducer';

export default combineReducers({
  homeContent: homeContentReducer,
});
