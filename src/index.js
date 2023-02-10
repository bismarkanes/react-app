import React from 'react';
import ReactDOM from 'react-dom';

import 'sanitize.css/sanitize.css';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import createStore from './redux/store';
import rootSaga from './redux/saga/root';
import { ConnectedRouter } from 'connected-react-router';
import { persistStore } from 'redux-persist';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { routerMiddleware, } from 'connected-react-router';
import history from './utils/history';
import { PersistGate } from 'redux-persist/integration/react';

/*
 * Redux middlewares
 */
const sagaMiddleware = createSagaMiddleware();
const historyRouterMiddleWare = routerMiddleware(history);

/*
 * Create redux store
 */
const store = createStore(sagaMiddleware, historyRouterMiddleWare);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </ConnectedRouter>
  </Provider>,
  /* eslint-disable-next-line */
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
