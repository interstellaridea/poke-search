import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import App from './components/app';
import reducers from './reducers';
import pokeMiddleware from './middlewares/middleware_pokemon';


const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, pokeMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
