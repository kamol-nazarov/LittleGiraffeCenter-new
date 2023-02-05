import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import OurLocations from "./Pages/OurLocations";
import ContactUs from "./Pages/ContactUs";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styling/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router id="whole-app">
      {/* {window.innerWidth} */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/ourlocations" element={<OurLocations />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
