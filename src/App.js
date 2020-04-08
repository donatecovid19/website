import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Form } from "./components";

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/form" exact component={() => <Form />} />
          </Switch>
          <Footer />
        </Router>
      </div >
    );
  }
}

export default App;
