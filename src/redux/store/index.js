import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from '../reducers/rootreducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* eslint-disable-next-line */
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const reducers = persistReducer(persistConfig, createRootReducer());

const store = (sagaMiddleware, historyRouterMiddleWare) => {
  return createStore(
    reducers,
    storeEnhancers(applyMiddleware(sagaMiddleware, historyRouterMiddleWare)),
  );
};

export default store;
