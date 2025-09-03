import React from "react";
import './Hero.css'; // CSS file for additional styles
import img1 from "../Images/ProfilePhoto.webp"; // Replace with your image path



const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 bg-gray-50 pt-16 md:pt-0">
      {/* Left: Photo */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
            src={img1}
            alt="Your Photo"
            loading="lazy"
            className="rounded-md shadow-lg w-150 h-150 object-cover animate-hero-fade"
        />
      </div>
      {/* Right: Text */}
      <div className="w-full md:w-1/2 flex flex-col items-start md:pl-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0D2226] animate-hero-fade">
          Hi, I'm Prajval
        </h1>
        <p className="text-lg md:text-xl text-[#0D2226] mb-6 animate-hero-p-fade" >
          Aspiring Data Analyst passionate about transforming data into clear, impactful decisions through analysis and visualization.
        </p>
        <a
          href="#contact"
          className="px-6 py-2 rounded animate-contact-btn-fade"
          style={{ backgroundColor: "#1C3343", color: "#fff" }}
        >
          Contact Me
        </a>
      </div>
    </section>
  );    
}
export default Hero;

