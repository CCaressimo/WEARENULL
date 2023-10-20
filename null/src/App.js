import React, {} from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Splash } from "./pages/Splash";
import { Director } from "./pages/Director";
import { HomePage } from "./pages/HomePage";
import { Shows } from "./pages/Shows";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Instagram } from "./pages/Instagram";
import { Videos } from "./pages/Videos";
import { NotFound } from "./pages/NotFound";





const App = () => {

  return (
    <Router>
      <Navbar />
      <Footer />
      <Routes>
        <Route element={<Splash />} path="/" />
        <Route element={<Director />} path="/director"/>
        <Route element={<HomePage />} path="/mailinglist" />
        <Route element={<Shows />} path="/shows" />
        <Route element={<Instagram />} path="/posts" />
        <Route element={<Videos />} path="/content" />

        <Route element={<NotFound />} path="*" />
      </Routes>
    </Router>
  );
};

export default App;
