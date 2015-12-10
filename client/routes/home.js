import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/app';
import MainLayout from '../layouts/MainLayout';
import HomeView from '../views/HomeView';

export default (
  <Route path='/' component={MainLayout}>
    <IndexRoute component={HomeView} />
  </Route>
);
