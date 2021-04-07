import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import ProductsView from '../../views/ProductsView';
import LoginView from '../../views/LoginView';
import NotFoundView from '../../views/NotFoundView';
import ProfileView from '../../views/ProfileView';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Redirect to="/products" />
        </Route>
        <Route path='/products' exact component={ProductsView} />
        <Route path='/login' exact component={LoginView} />
        <Route path='/profile' exact component={ProfileView} />
        <Route component={NotFoundView} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
