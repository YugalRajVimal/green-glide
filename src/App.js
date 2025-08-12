import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./Pages/LandingPage";
import AboutUsPage from "./Pages/AboutUsPage";

import ContactUsPage from "./Pages/ContactUsPage";
import ElectricScooterRentalsPage from "./Pages/ElectricScooterRentalsPage";
import Services from "./Pages/ServicesPage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route
              path="/electric-scooter-rentals"
              element={<ElectricScooterRentalsPage />}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
