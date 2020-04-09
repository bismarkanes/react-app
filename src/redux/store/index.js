import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootreducer';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Create Redux Store
 * @param {Array} middlewares - Redux middleware
 */
const store = (middlewares) => {
  return createStore(
    rootReducer,
    storeEnhancers(middlewares ? applyMiddleware(middlewares) : null),
  );
};

export default store;
