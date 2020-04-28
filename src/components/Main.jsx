import React from "react";
import { Switch, Route } from "react-router-dom";

import { Form, Ideas, Home, About } from "./";

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={() => <Home />} />
      <Route path="/form" exact component={() => <Form />} />
      <Route path="/ideas" exact component={() => <Ideas />} />
      <Route path="/about" exact component={() => <About />} />
    </Switch>
  );
};

export default Main;
