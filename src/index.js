import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'
import UserProvider from './context/UserProvider';

firebase.initializeApp({
    apiKey: "AIzaSyAfStNFp0c8FcZvAMfdb4GcKQ9QXi_mVd4",
    authDomain: "o-d-site.firebaseapp.com",
    projectId: "o-d-site",
    storageBucket: "o-d-site.appspot.com",
    messagingSenderId: "315797514515",
    appId: "1:315797514515:web:a97812c6ae443c093992e6",
    measurementId: "G-Z2JF6ZGXN5"
  })

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
        <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
