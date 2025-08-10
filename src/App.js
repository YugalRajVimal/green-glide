import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
