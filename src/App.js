import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Form, Ideas, Home } from "./components";
import { PageView, initGA } from './components/tracking';


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

const db = firebase.firestore()
const users = db.collection('users').get().then( snapshot => {
  console.log(snapshot.docs)
  var donationLinks = []

  snapshot.forEach( doc => {
    const data = doc.data()
    donationLinks.push(data)
  })

  console.log(donationLinks)

}).catch( error => {console.log(error)})

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/form" exact component={() => <Form />} />
            <Route path="/ideas" exact component={() => <Ideas />} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }

  componentDidMount() {
    initGA('UA-160829657-1');
    PageView();
  }
}

export default App;
