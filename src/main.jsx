import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MovieProvider } from "./Context/MovieContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <MovieProvider>
    <App />
  </MovieProvider>
);
