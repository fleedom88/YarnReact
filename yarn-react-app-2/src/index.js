import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppUseMemo from './AppUseMemo';
import AppUseCallback from './AppUseCallback';
import AppCounter from './AppCounter';
import AppUseContext from './AppUseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppUseContext/>
    <hr/>
    <AppCounter/>
    <AppUseCallback/>
    <AppUseMemo/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
