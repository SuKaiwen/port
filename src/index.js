import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import Nav from './Components/Nav';
import Firebry from './Pages/Firebry';

import { Routes ,Route, BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/firebry' element={<Firebry/>} />
      </Routes>
    </Router>,
  document.getElementById('root')
);

