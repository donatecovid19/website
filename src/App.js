import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Form, Ideas, Home } from "./components";

import { PageView, initGA } from "./components/tracking";

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
    initGA("UA-160829657-1");
    PageView();
  }
}

export default App;
