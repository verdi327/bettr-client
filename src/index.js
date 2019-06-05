import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './components/App/App';
import { AuthProvider } from './contexts/AuthContext'
import { AppProvider } from './contexts/AppContext'

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
