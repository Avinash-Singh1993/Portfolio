import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { HelmetProvider } from 'react-helmet-async';
import SEO from "./components/SEO";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen min-w-screen">
      <SEO />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Testimonials />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </HashRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
