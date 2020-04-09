import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Form, Ideas } from "./components";

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
      </div >
    );
  }
}

export default App;
