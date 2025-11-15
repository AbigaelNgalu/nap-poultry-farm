// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navigation from "./components/layout/Navigation";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import ProductShowcase from "./components/sections/ProductShowcase";
import Stats from "./components/sections/Stats";
import Testimonials from "./components/sections/Testimonials";
import Newsletter from "./components/sections/Newsletter";

// Optional: If you want to wrap everything in HashRouter
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        {/* Navigation Bar with hash links */}
        <Navigation>
          {/* Example hash links */}
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#breeds">Breeds</a>
          <a href="#stats">Stats</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#newsletter">Newsletter</a>
        </Navigation>

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <section id="hero">
            <Hero />
          </section>

          <section id="about" className="py-16">
            <About />
          </section>

          <section id="features" className="py-16 bg-white">
            <Features />
          </section>

          <section id="breeds" className="py-16 bg-gray-100">
            <ProductShowcase />
          </section>

          <section id="stats" className="py-16 bg-white">
            <Stats />
          </section>

          <section id="testimonials" className="py-16 bg-gray-100">
            <Testimonials />
          </section>

          <section id="newsletter" className="py-16 bg-white">
            <Newsletter />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;


