import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import createStore from './redux/store';
import rootSaga from './redux/saga/root';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { routerMiddleware, } from 'connected-react-router';
import { createBrowserHistory, } from 'history';

/*
 * Redux middlewares
 */
const sagaMiddleware = createSagaMiddleware();
const historyRouterMiddleWare = routerMiddleware(createBrowserHistory());

/*
 * Create redux store
 */
const store = createStore(sagaMiddleware, historyRouterMiddleWare);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
