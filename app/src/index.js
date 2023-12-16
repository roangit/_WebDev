import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//CSS
import './index.css';

//Context
import { AuthContextProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);

