import React from "react";
import { Navigation, Footer, Main } from "./components";

import { PageView, initGA } from "./components/tracking";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    initGA("UA-160829657-1");
    PageView();
  }
}

export default App;
