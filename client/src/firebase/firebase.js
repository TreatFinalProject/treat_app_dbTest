import * as firebase from 'firebase';

var prodConfig = {
    apiKey: "AIzaSyDOe5qM0-oSK-Q8MO1ap6KPVTgzlAME27E",
    authDomain: "authenticationroughdraft.firebaseapp.com",
    databaseURL: "https://authenticationroughdraft.firebaseio.com",
    projectId: "authenticationroughdraft",
    storageBucket: "authenticationroughdraft.appspot.com",
    messagingSenderId: "236225915304"
  };

  var devConfig = {
    apiKey: "AIzaSyDOe5qM0-oSK-Q8MO1ap6KPVTgzlAME27E",
    authDomain: "authenticationroughdraft.firebaseapp.com",
    databaseURL: "https://authenticationroughdraft.firebaseio.com",
    projectId: "authenticationroughdraft",
    storageBucket: "authenticationroughdraft.appspot.com",
    messagingSenderId: "236225915304"
  };
  const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};