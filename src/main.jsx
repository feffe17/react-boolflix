import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MovieProvider } from './store/MovieContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MovieProvider>
    <App />
  </MovieProvider>
);
