import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'
import './index.css';
import App from './App';


const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
)


ReactDOM.render((
<Provider store={store}>
  <BrowserRouter>
    <App />
  </ BrowserRouter>
</Provider>
), document.getElementById('root'));