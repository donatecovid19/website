import React from "react";
import { Navigation, Footer, Main } from "./components";
import { PageView, initGA } from "./components/tracking";

class App extends React.Component {

  componentDidMount() {
    initGA('UA-160829657-1');
    PageView();
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
