


import firebase from 'firebase'
// import "firebase/firestore";
// import { AppComponent } from './app.component';	
// import './app';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAlNDWfc58lB-U5DvxEPJGz1NSiMMNNK9g",
    authDomain: "landlordprofile.firebaseapp.com",
    databaseURL: "https://landlordprofile.firebaseio.com",
    projectId: "landlordprofile",
    storageBucket: "landlordprofile.appspot.com",
    messagingSenderId: "394466582338",
    appId: "1:394466582338:web:5b8f1fe8eeaf3f039772db",
    measurementId: "G-VNV4W04DYQ"
  };
  // Initialize Firebase

  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

var defaultApp = firebase.initializeApp(firebaseConfig);
console.log(defaultApp.name);
//console.log(firebase.app().name);

export default defaultApp;
