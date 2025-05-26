import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectScope from './components/ProjectScope';
import Milestones from './components/Milestones';
import Technologies from './components/Technologies';
import ResearchComponents from './components/ResearchComponents';
import Documents from './components/Documents';
import Team from './components/Team';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.title = "AI-Driven Agricultural Diagnostics Research";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ✅ Hero outside the max-width wrapper */}
      <Hero />

      {/* ✅ Other content inside the wrapper */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-24">
        <ProjectScope />
        <ResearchComponents />
        <Milestones />
        <Technologies />
        <Documents />
        <Team />
        <Contact/>
      </div>

      <Footer />
    </div>
  );
}


export default App;