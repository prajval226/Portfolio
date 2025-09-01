import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero section/Hero.jsx';
import Preloader from './components/Preloader/Preloader.jsx';
import AboutMe from './components/About me/Aboutme.jsx';
import Projects from './components/Projects/Projects.jsx';
import ProjectPage from './components/Projects/ProjectSubs/ProjectPage.jsx';
import Project2Page from './components/Projects/ProjectSubs/Project2Page.jsx';
import Certifications from './components/Certifications/Certifications.jsx';
import Contact from './components/Contact/Contact.jsx';

// Custom wrapper to control preloader based on route
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Skip preloader for project detail and certifications pages
    if (
      location.pathname === "/project/portfolio-website" ||
      location.pathname === "/project/Project2Page" ||
      location.pathname === "/certifications"
    ) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  useEffect(() => {
    if (location.state && location.state.scrollToProjects) {
      setTimeout(() => {
        const section = document.getElementById('projects');
        if (section) {
          const navbar = document.querySelector('.navbar');
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: sectionTop - navbarHeight,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <AboutMe />
            <Projects />
            <Certifications />
            <Contact />
          </>
        }
      />
      <Route
        path="/project/portfolio-website"
        element={<ProjectPage />}
      />
      <Route
        path="/project/Project2Page"
        element={<Project2Page />}
      />
      <Route
        path="/certifications"
        element={
          <>
            <Navbar />
            <Certifications />
          </>
        }
      />
      {/* Add more routes for other project detail pages here */}
    </Routes>
  );
}

const App = () => (
  <AppContent />
);

export default App;