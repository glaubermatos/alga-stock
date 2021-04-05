import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomeView from '../../views/HomeView';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomeView} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
