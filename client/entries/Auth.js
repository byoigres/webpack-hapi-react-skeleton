import styles from '../styles/core.scss';
import React from 'react';
import { render } from 'react-dom'
import configureStore from '../store/configureAuthStore';
import { createStore } from 'redux';
import Root from '../containers/Root';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
