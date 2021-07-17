import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Styles/pagestyle.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* HashRouter takes care of routes on gh pages */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

