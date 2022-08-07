import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
// import reportWebVitals from './reportWebVitals';

// SERVER-SIDE STUFF
// currently breaks EVERYTHING
// NPM START and look at the warnings
// try to solve those
/*
const express = require('express')
const app = express()

app.get('/', (request, response) => {
    console.log('Here')
    response.sendStatus('Hi')
})

app.listen(3000)
*/

// REACTJS
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
