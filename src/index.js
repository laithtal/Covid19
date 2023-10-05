import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';


// @TODO add routing and enable rtl and locales!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes/>
    </BrowserRouter>
  </React.StrictMode>
);
