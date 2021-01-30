import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducer/reducer';

import App from './App';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById("root"));
