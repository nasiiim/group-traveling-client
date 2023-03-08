import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProviderWrapper } from "./context/auth.context"
import axios from 'axios'

// LocalStorageService
axios.interceptors.request.use(
  request => {
    if (request.url.includes('api')) {
      const token = localStorage.getItem('authToken');
      if (token) {
        request.headers['Authorization'] = 'Bearer ' + token
      }
    }

    request.headers['Content-Type'] = 'application/json';
    return request
  },
  error => {
    Promise.reject(error)
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <App />
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
