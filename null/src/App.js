import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Splash from "./components/Splash";

const App = () => {


  return (
    <BrowserRouter>
        <Switch>
          <Splash />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
