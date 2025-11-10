import React from "react";
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

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation Bar */}
      <Navigation />

      {/* Header (optional hero tagline or callout) */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <About />
        </section>

        {/* Farm Features */}
        <section id="features" className="py-16 bg-white">
          <Features />
        </section>

        {/* Chicken Breeds Showcase */}
        <section id="breeds" className="py-16 bg-gray-100">
          <ProductShowcase />
        </section>

        {/* Poultry Farm Stats */}
        <section id="stats" className="py-16 bg-white">
          <Stats />
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-gray-100">
          <Testimonials />
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="py-16 bg-white">
          <Newsletter />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

