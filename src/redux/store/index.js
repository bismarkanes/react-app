import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from '../reducers/rootreducer';

/* eslint-disable-next-line */
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = (sagaMiddleware, historyRouterMiddleWare) => {
  return createStore(
    createRootReducer(),
    storeEnhancers(applyMiddleware(sagaMiddleware, historyRouterMiddleWare)),
  );
};

export default store;
