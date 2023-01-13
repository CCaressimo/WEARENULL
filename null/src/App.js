import React, {} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Splash from "./components/Splash";
import HomePage from "./components/HomePage";
import Shows from "./components/Shows";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



const App = () => {

  return (
    <Router>
      <Navbar />
      <Footer />
      <Routes>
        <Route element={<Splash />} path="/" exact />
        <Route element={<HomePage />} path="/home" />
        <Route element={<Shows />} path="/shows" />
        <Route element={<Shop />} path="/shop" />
      </Routes>
    </Router>
  );
};

export default App;
