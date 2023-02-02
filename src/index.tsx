import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./i18n";




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const actualLanguage = localStorage.getItem('language') || 'pt';


root.render(

  <React.StrictMode>
    <Suspense fallback="App is loading...">
    <App  language={actualLanguage}/>
    </Suspense>
  </React.StrictMode>
);


