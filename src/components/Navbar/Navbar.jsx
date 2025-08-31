import React, { useState } from "react";
import './Navbar.css'; // CSS file for additional styles

const Navbar = ({ hideLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0D2226] text-white px-4 py-2 md:px-10 md:py-4 flex justify-between items-center navbar">
      <div className="text-2xl font-bold" > <a href="#home"
              className="hover:text-[#74B49B] transition"
              onClick={e => {
                e.preventDefault();
                const section = document.getElementById('home');
                if (section) {
                  const navbarHeight = document.querySelector('.navbar').offsetHeight;
                  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({
                    top: sectionTop - navbarHeight,
                    behavior: 'smooth'
                  });
                  setMenuOpen(false); // Close menu on mobile
                }
              }}>PRAJVAL J</a></div>
      {/* Hamburger Icon */}
      {!hideLinks && (
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          &#9776;
        </button>
      )}
      {/* Menu */}
      {!hideLinks && (
        <ul className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-[#0D2226] md:bg-transparent px-4 py-2 md:p-0 transition-all duration-300 ${menuOpen ? "flex" : "hidden"} md:flex`}>
          <li>
            <a
              href="#home"
              className="hover:text-[#74B49B] transition"
              onClick={e => {
                e.preventDefault();
                const section = document.getElementById('home');
                if (section) {
                  const navbarHeight = document.querySelector('.navbar').offsetHeight;
                  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({
                    top: sectionTop - navbarHeight,
                    behavior: 'smooth'
                  });
                  setMenuOpen(false); // Close menu on mobile
                }
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#74B49B] transition"
              onClick={e => {
                e.preventDefault();
                const section = document.getElementById('about');
                if (section) {
                  const navbarHeight = document.querySelector('.navbar').offsetHeight;
                  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({
                    top: sectionTop - navbarHeight,
                    behavior: 'smooth'
                  });
                  setMenuOpen(false); // Close menu on mobile
                }
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-[#74B49B] transition"
              onClick={e => {
                e.preventDefault();
                const section = document.getElementById('projects');
                if (section) {
                  const navbarHeight = document.querySelector('.navbar').offsetHeight;
                  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({
                    top: sectionTop - navbarHeight,
                    behavior: 'smooth'
                  });
                  setMenuOpen(false); // Close menu on mobile
                }
              }}
            >
              Projects
            </a>
          </li>
          <li>
  <a
    href="#contact"
    className="hover:text-[#74B49B] transition"
    onClick={e => {
      e.preventDefault();
      const section = document.getElementById('contact');
      if (section) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionTop - navbarHeight,
          behavior: 'smooth'
        });
        setMenuOpen(false); // Close menu on mobile
      }
    }}
  >
    Contact
  </a>
</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;