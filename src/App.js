import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import ServicesExperience from "./components/ServicesExperience";
import About from "./pages/About"; 

function Home() {
  return (
    <>
      <Banner />
      <Projects />
      <ServicesExperience />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
