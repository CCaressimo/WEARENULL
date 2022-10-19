import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Splash from "./components/Splash";
import linkTree from "./components/linkTree"

const App = () => {


  return (
    <Router>
      <Routes>
        <Route element={<Splash/>} path="/" exact />
        <Route element={<linkTree/>} path="/linktree" />
      </Routes>
    </Router>
  );
};

export default App;
