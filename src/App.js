import React from 'react';

import LoginForm from './components/LoginForm'
import ErrorPage from './components/ErrorPage'
import MainPage from './components/MainPage'


import { Switch, Route } from 'react-router-dom'


import './App.css';

function App() {
  return (
    <div>
      <header>Заголовок</header>
      <Switch>
        <Route path="/login/123" component={LoginForm} />
        <Route path="/main" component={MainPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>

      
      <footer>Сделано мной</footer>
    </div>
  );
}

export default App;
