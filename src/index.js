import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@babel/polyfill';

const wrapper = document.getElementById('container');
ReactDOM.render(<App />, wrapper);
