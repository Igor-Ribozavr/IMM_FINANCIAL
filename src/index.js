import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import {} from 'dotenv/config';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import App from './App';

const initialStore = { worm: [] };
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  () => {},
  initialStore,
  composeWithDevTools(applyMiddleware(thunk, logger, sagaMiddleware))
);

sagaMiddleware.run(function* () {});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);