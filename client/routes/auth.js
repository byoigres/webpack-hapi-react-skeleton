import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/app';
import MainLayout from '../layouts/MainLayout';
import AuthView from '../views/AuthView';

export default (
  <Route path='/auth' component={MainLayout}>
    <IndexRoute component={AuthView} />
  </Route>
);
