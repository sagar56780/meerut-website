import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Home from "./components/Home";
import About from "./components/About";
import TouristAttractions from "./components/TouristAttractions";
import LocalNews from "./components/LocalNews";
import ServicesDirectory from "./components/ServiceDirectory";
import BusinessDirectory from "./components/BusinessDirectory";
import Transportation from "./components/Transportation";
import Accommodation from "./components/Accommodation";
import FoodAndDining from "./components/FoodAndDining";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column vh-100 vw-100">
        <Navbar />
        <div className="container flex-grow-1 vh-100 vw-100 home-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/tourist-attractions"
              element={<TouristAttractions />}
            />
            <Route path="/local-news" element={<LocalNews />} />
            <Route path="/services-directory" element={<ServicesDirectory />} />
            <Route path="/business-directory" element={<BusinessDirectory />} />
            <Route path="/transportation" element={<Transportation />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/food-and-dining" element={<FoodAndDining />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
