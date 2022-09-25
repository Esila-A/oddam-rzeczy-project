import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './scss/main.scss';
import App from './App';
import { AuthProvider } from './components/authContext';

ReactDOM.render(
  <BrowserRouter basename="/oddam-rzeczy-project">
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
