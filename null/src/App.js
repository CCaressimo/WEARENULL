import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Splash from "./components/Splash";
import linkTree from "./components/linkTree"

const App = () => {


  return (
    <BrowserRouter>
        <Switch>
          <Route component={Splash} path="/" exact/>
          <Route component={linkTree} path="/linktree"/>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
