import React from 'react';

import LoginForm from './components/LoginForm'
import ErrorPage from './components/ErrorPage'
import MainPage from './components/MainPage'
import Header from './components/Header'

import { Switch, Route } from 'react-router-dom'


import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/" component={MainPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>

      
      <footer>Сделано мной</footer>
    </div>
  );
}

export default App;
