import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyClXKWPmvVY6nrv5heaBGgR5v9NruB6s2o",
    authDomain: "guides-app-project.firebaseapp.com",
    databaseURL: "https://guides-app-project.firebaseio.com",
    projectId: "guides-app-project",
    storageBucket: "guides-app-project.appspot.com",
    messagingSenderId: "574693657018",
    appId: "1:574693657018:web:d424837d04104311ae7583",
    measurementId: "G-V8059S8XW5"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default fire;