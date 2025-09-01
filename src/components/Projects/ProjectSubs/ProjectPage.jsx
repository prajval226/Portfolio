import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../Projects/ProjectSubs/Project_Images/Quick Commerce_page-0001.jpg";
import img2 from "../../Projects/ProjectSubs/Project_Images/Quick Commerce_page-0002.jpg";
import img3 from "../../Projects/ProjectSubs/Project_Images/Quick Commerce_page-0003.jpg";

const galleryItems = [
  {
    src: img1,
    alt: "Orders Overview",
    title: (
      <h2 className="text-2xl font-bold text-[#1C3343]">Overview - Orders</h2>
    ),
    description: (
      <>
        <strong>Solid Financials:</strong> The business has generated over ₹10.67M in revenue from 4,850 orders, with a strong average order value of ₹2,200.
        <br />
        <br />
        <strong>Volatile Growth in 2023: </strong>The number of orders in 2023 shows more volatility compared to the stable trend in 2024, with a significant peak in April-May.
        <br />
        <br />
        <strong>Delivery is a Critical Issue:</strong> Over 30% of all orders are delayed, with more than 10% being significantly delayed. This is a major operational challenge for a quick commerce model.
      </>
    ),
  },

  {
    src: img2,
    alt: "Visualization Dashboard",
    title: "Visualization Dashboard",
    description: (
      <>
      <strong>Highly Profitable Marketing:</strong> The marketing spend of ₹16.32M generated a strong ₹32.19M in revenue, resulting in an impressive Average ROAS of 2.74.
      <br />
      <br />
      <strong>Balanced Marketing Strategy:</strong> Using both short-term sales-driven campaigns (e.g., Flash Sale, Category Promotion, New User Discount) and long-term customer loyalty and acquisition campaigns (e.g., Membership Drive, Referral Program).
      <br />
      <br />
      <strong>Focus on Conversion:</strong> With 2.97M clicks but only 298.04K conversions, there is a clear opportunity to improve the post-click user journey and increase the conversion rate.
      <br />
      <br />
      <strong>Improve Conversion Funnel:</strong> Conduct a user experience (UX) audit of the post-click journey, from the landing page to the final purchase, to identify and remove any friction points that may be causing the high drop-off rate.
      </>
    ),
  },
  {
    src: img3,
    alt: "Customer Feedback",
    title: "Customer Feedback",
    description: (
      <>
      The feedback is almost evenly split between <strong>Positive, Negative, and Neutral</strong> sentiment.
      <br />
      <br />
      Despite the high negative sentiment, customers give <strong>Delivery</strong> and <strong>Product Quality</strong> Delivery and Product Quality the highest number of 4 and 5-star ratings, indicating satisfaction with the core offering.
      Ratings for <strong>App Experience</strong> and <strong>Customer Service</strong> are comparatively lower, suggesting these are likely contributing to the high negative feedback volume.
      The word cloud confirms that <strong>"Delivery"</strong> and <strong>"Service"</strong> are the most talked-about topics in customer feedback, underscoring their importance to the overall customer experience.
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
                }
              }}
            >
              PRAJVAL J
            </a></div>
        <button
          className="inline-block px-4 py-2 bg-[#0D2226] text-white rounded hover:bg-[#1C3343] transition"
          onClick={() => navigate('/')}
        >
          ❮ Back to Projects
        </button>
      </nav>
      {/* Add top margin to avoid overlap with fixed navbar */}
      <section id="home" className="flex flex-col justify-start min-h-screen w-full px-2 md:px-4 py-4 md:py-8 bg-gray-50" style={{ marginTop: "80px" }}>
        <div className="w-full mb-8 md:mb-12 flex flex-col">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0D2226] text-center">
            Quick Commerce Analysis
          </h1>
          <br />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-[#0D2226] text-left">
            Executive Summary
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-[#0D2226] mb-4 md:mb-6 text-left">
            This Power BI dashboard provides a comprehensive look at the company's performance, from orders and revenue to marketing efficiency and customer feedback. It offers vital insights into key metrics, revealing areas of strength like a strong return on marketing spend, as well as critical challenges like delivery delays and a significant volume of negative customer sentiment.
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