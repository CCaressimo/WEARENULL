import React, {} from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Splash } from "./pages/Splash";
import { Footer } from "./components/Footer";

const App = () => {

  return (
    <Router>
      <Footer />
      <Routes>
        <Route element={<Splash />} path="/" />
      </Routes>
    </Router>
  );
};

export default App;
