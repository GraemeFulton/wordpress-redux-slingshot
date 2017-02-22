import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './containers/HomePage/HomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="prototypr" component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
