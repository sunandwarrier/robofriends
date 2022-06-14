import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Containers/App';
//import Card from './Card';
import 'tachyons';
//import {robots} from './robots';
//import CardList from './CardList';
import './Containers/App.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
//ReactDOM.render(<Hello />,document.getElementById('root'));
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
