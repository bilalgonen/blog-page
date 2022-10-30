import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBz7UO454I3pXgDU0K12CzgE0-MtWiQs7s",
  authDomain: "ll-react-articles.firebaseapp.com",
  projectId: "ll-react-articles",
  storageBucket: "ll-react-articles.appspot.com",
  messagingSenderId: "885235183703",
  appId: "1:885235183703:web:5680248ed1b7b4c3297312"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
