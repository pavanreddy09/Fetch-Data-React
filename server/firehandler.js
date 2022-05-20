const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyCUz9A-PwSDWQTHZ4Ao7gAd-c4hSV1XZeg",
  authDomain: "sample-f3410.firebaseapp.com",
  databaseURL:
    "https://sample-f3410-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sample-f3410",
  storageBucket: "sample-f3410.appspot.com",
  messagingSenderId: "225622064853",
  appId: "1:225622064853:web:6c543a3fc4b48f753eac5c",
};

const app = initializeApp(firebaseConfig);

exports.firedatabase = getDatabase(app);
