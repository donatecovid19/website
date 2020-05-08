import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCuLBS_S0YiPGRPeQzOpnVaqCDD62wJg3I",
  authDomain: "fight-covid-19-team.firebaseapp.com",
  databaseURL: "https://fight-covid-19-team.firebaseio.com",
  projectId: "fight-covid-19-team",
  storageBucket: "fight-covid-19-team.appspot.com",
  messagingSenderId: "741041901113",
  appId: "1:741041901113:web:2af4eade35fdc0ed7607e8",
  measurementId: "G-CYT93ZJY1P"
};
firebase.initializeApp(firebaseConfig)

const email = process.env.REACT_APP_EMAIL
const password = process.env.REACT_APP_PASSWORD


firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("ERROR!")
  console.log(errorMessage)
  console.log(errorCode)
})
// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });

const db = firebase.firestore()

// var allContinentalData = ["abcd"]

// db.collection('users').get().then( snapshot => {
//     snapshot.forEach( doc => {
//       const data = doc.data()
//       allContinentalData.push(data)
//     })
// }).catch(error => {console.log(error)})

// export default allContinentalData

export default db