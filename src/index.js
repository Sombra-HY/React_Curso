import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/styleGlobal.css';
import Home from './templates/Home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

