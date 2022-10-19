import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Splash from "./components/Splash";
import linkTree from "./components/linkTree"

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route component={Splash} path="/" exact />
        <Route component={linkTree} path="/linktree" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
