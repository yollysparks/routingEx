import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import routerX from './routerX'


ReactDOM.render((
    <BrowserRouter>
      <routerX />
    </BrowserRouter>
  ), document.getElementById('root'));


