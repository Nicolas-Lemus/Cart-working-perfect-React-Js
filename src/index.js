import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCLsNI-yEqA_4sX1Q1ZbJ6Ur9QmgR34zLw",
  authDomain: "tiendafashion-c3eac.firebaseapp.com",
  projectId: "tiendafashion-c3eac",
  storageBucket: "tiendafashion-c3eac.appspot.com",
  messagingSenderId: "458413593401",
  appId: "1:458413593401:web:0a40ab71ebfc46f08e4ee8"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);