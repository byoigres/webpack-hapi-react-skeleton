import React from 'react';
import { render } from 'react-dom'
import configureStore from '../store/configureHomeStore';
import { createStore } from 'redux';
import Root from '../containers/Root';

const store = configureStore({
  user: __state.user
});

render(
  <Root store={store} />,
  document.getElementById('root')
);
