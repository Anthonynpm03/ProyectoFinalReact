import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // SI LA APP ESTA CORRIENDO EN PRODUCTIVO, STRICTMODE NO MOSTRARA ERRORES AL USUARIO.
  <React.StrictMode>
  <App />
</React.StrictMode>
  , document.getElementById("root"));

reportWebVitals();