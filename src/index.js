import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './Hello';
import Card from './Card';
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
    <div>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
      <Card id={robots[1].id} />
      <Card id={robots[2].id} />
      <Card id={robots[3].id} />
      <Card id={robots[4].id} />
    </div>
  </React.StrictMode>
);
// Props are like html attributes. Ex: greeting=

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
