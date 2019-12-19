import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAqCSrxweC2gGaENLSYZZ8o0UcRL0oKPfg",
    authDomain: "tram-portfolio.firebaseapp.com",
    databaseURL: "https://tram-portfolio.firebaseio.com",
    projectId: "tram-portfolio",
    storageBucket: "tram-portfolio.appspot.com",
    messagingSenderId: "1048946483539",
    appId: "1:1048946483539:web:83d076646c01d5c36f01a6",
    measurementId: "G-LPC8SF6N1T"
  };
var fire = firebase.initializeApp(firebaseConfig);
export default fire;
