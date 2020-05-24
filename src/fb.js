import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDyNlT2ZtBJdnECXPdVT7gnOKdHz1i3Rjw",
    authDomain: "vuetify-course.firebaseapp.com",
    databaseURL: "https://vuetify-course.firebaseio.com",
    projectId: "vuetify-course",
    storageBucket: "vuetify-course.appspot.com",
    messagingSenderId: "779950545142",
    appId: "1:779950545142:web:1805b39be767bf224eb4d7",
    measurementId: "G-JQK32MWD7Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots:true })


  export default db;