import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Splash from "./components/Splash";

const App = () => {


  return (
    <Router>
      <Routes>
        <Route element={<Splash/>} path="/" exact />
      </Routes>
    </Router>
  );
};

export default App;
