import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './components/App/App';
import { AuthProvider } from './contexts/AuthContext'
import { AppProvider } from './contexts/AppContext'
import AppError from './components/AppError/AppError'

ReactDOM.render(
  <AppError>
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  </AppError>,
  document.getElementById('root')
);
