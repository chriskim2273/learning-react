import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './CardList';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// There are brackets around robots because we need to
// destructure it, there is no default export so that means
// there can be multiple exports. i.e, we could put { cats }
// if there was another export cats instead of robots. If it was
// default, there would be no need for the curly brackets.
import { robots } from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Props are like html attributes. Ex: greeting=

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
