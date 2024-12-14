import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import "./App.css"

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
