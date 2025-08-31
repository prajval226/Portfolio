import React from "react";
import img1 from "../../Projects/ProjectSubs/Project_Images/Taxi Performance Analytics_page-0001.jpg";
import img2 from "../../Projects/ProjectSubs/Project_Images/Taxi Performance Analytics_page-0002.jpg";
import img3 from "../../Projects/ProjectSubs/Project_Images/Taxi Performance Analytics_page-0003.jpg";
import img4 from "../../Projects/ProjectSubs/Project_Images/Taxi Performance Analytics_page-0004.jpg";

import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";

const galleryItems = [
  {
    src: img1,
    alt: "Overview",
    title: (
      <h2 className="text-2xl font-bold text-[#1C3343]">Overview</h2>
    ),
    description: (
      <>
        <strong>Seasonal Demand: </strong> Bookings peaked in January and August, while February marked the lowest point in demand. This suggests clear seasonal trends that can inform future marketing campaigns and driver incentives.
        <br />
        <br />
        <strong>High Cancellation Rate: </strong>A substantial 18% of bookings were canceled by drivers, and an additional 7% were canceled by customers. Investigating the root causes for these cancellations is crucial for improving service reliability.
        <br />
        <br />
        <strong>Driver Supply Gap:</strong> Over 10,000 rides were left unfulfilled due to a "No Driver Found" status. This is a critical operational issue that points to a shortage of available drivers, particularly during high-demand periods.
      </>
    ),
  },

  {
    src: img2,
    alt: "Vehicle Type",
    title: "Vehicle Type",
    description: (
      <>
      <strong>Core Vehicles Drive the Business:</strong> "Auto," "Go Mini," and "Go Sedan" are the top performers, generating the highest volume in bookings, revenue, and distance traveled.
      <br />
      <br />
      <strong>Consistent Trip Lengths:</strong> The average ride distance remains uniform across all vehicle types at roughly 24.6 km, suggesting consistent customer travel habits.
      <br />
      <br />
      <strong>Bookings = Revenue:</strong> There is a strong direct correlation between the number of bookings and the revenue generated, affirming the importance of high-volume vehicle types.
      <br />
      <br />
      <strong>Investigate Premium Market:</strong> Investigate the demand for premium services like "Uber XL" to assess their growth potential and market viability.
      </>
    ),
  },
  {
    src: img3,
    alt: "Revenue",
    title: "Revenue",
    description: (
    <>
      <strong>Monthly Revenue Fluctuations:</strong> Revenue peaked in March and was at its lowest in February, with a generally stable trend throughout the rest of the year.
      <br />
      <br />
      <strong>Peak Hours Drive Bookings:</strong> The majority of bookings occur between 6 PM and midnight, indicating that evening hours are the most critical period for the business.
      <br />
      <br />
      <strong>Digital Payments Dominate:</strong> UPI is the most preferred payment method, accounting for almost half of all successful booking revenue. This highlights a strong reliance on digital transactions over traditional cash payments.
      <br />
      <br />
      <strong>Optimize for Peak Hours:</strong> Focus on ensuring high driver availability during the evening peak to capture maximum demand and revenue.
      </>
    ),
  },
    {
    src: img4,
    alt: "Cancelation",
    title: "Cancelation",
    description: (
    <>
      <strong>Cancellations Mirror Demand:</strong> The monthly cancellation trend is highest in January and lowest in February, directly reflecting the overall booking and revenue trends. This indicates that high-demand periods are also high-cancellation periods.
      <br />
      <br />
      <strong>Improve App and Address Accuracy:</strong> Reduce customer-initiated cancellations by improving the app's address-pinning functionality and ensuring a seamless user interface.
      </>
    ),
  },

];

const ProjectPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar with name and Back to Projects button */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0D2226] text-white px-4 py-2 md:px-10 md:py-4 flex justify-between items-center navbar">
        <div className="text-2xl font-bold" >    
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
              PRAJVAL J
            </a></div>
        <button
          className="inline-block px-4 py-2 bg-[#0D2226] text-white rounded hover:bg-[#1C3343] transition"
          onClick={() => {
            window.close();
          }}
        >
          ❮ Back to Projects
        </button>
      </nav>
      {/* Add top margin to avoid overlap with fixed navbar */}
      <section id="home" className="flex flex-col justify-start min-h-screen w-full px-2 md:px-4 py-4 md:py-8 bg-gray-50" style={{ marginTop: "80px" }}>
        <div className="w-full mb-8 md:mb-12 flex flex-col">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0D2226] text-center">
            Taxi Performance Analysis
          </h1>
          <br />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-[#0D2226] text-left">
            Executive Summary
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-[#0D2226] mb-4 md:mb-6 text-left">
            The Power BI dashboard provides a high-level view of ride-sharing activity for the year, with a total of 150,000 bookings. The service successfully completed 93,000 of these rides, representing a completion rate of 62%. This indicates a significant volume of successful trips but also points to a substantial number of cancellations.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#0D2226] mb-4 md:mb-6 text-left">
            Data Source: Kaggle
          </p>
        </div>
        {/* Gallery Section */}
        <div className="flex flex-col gap-6 md:gap-8 w-full">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden"
            >
              {/* Image on the left, responsive and visible */}
              <div className="md:w-2/3 w-full flex items-center justify-center bg-white aspect-video min-h-[250px] md:min-h-[400px]">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto max-h-[350px] md:max-h-[600px] object-contain"
                  style={{ background: "#fff" }}
                />
              </div>
              {/* Description on the right */}
              <div
                className="md:w-1/3 w-full p-4 flex flex-col justify-center items-start"
                style={{ width: "532px" }}
                >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-[#1C3343] text-left">{item.title}</h3>
                <p className="text-base sm:text-lg text-[#0D2226] text-left">{item.description}</p>
            </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default ProjectPage;
