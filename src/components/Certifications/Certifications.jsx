import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img5 from "../Certifications/CertificatesImages/Generative AI for Beginners - Udemy.jpg"; 
import img6 from "../Certifications/CertificatesImages/Power BI Masterclass - Udemy.jpg"; 
import img7 from "../Certifications/CertificatesImages/Marketing Analytics Coursera Certificate_page-0001.jpg";
import img8 from "../Certifications/CertificatesImages/Python Data Structures Certificate_page-0001.jpg";
import img9 from "../Certifications/CertificatesImages/Programming for Everybody Certificate_page-0001.jpg";
import img1 from "../Certifications/CertificatesImages/Data Visualization with Python - IBM_page-0001.jpg";


const certificates = [
    {
    src: img1,
    title: "Certificate 7",
  },
  {
    src: img6,
    title: "Certificate 2",
  },
  {
    src: img5,
    title: "Certificate 3",
  },
  {
    src: img7,
    title: "Certificate 4",
  },
  {
    src: img8,
    title: "Certificate 5",
  },
  {
    src: img9, 
    title: "Certificate 6",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false, 
};

const getContainerStyle = () => {
  const isMobile = window.innerWidth <= 600;
  const paddingTop = isMobile ? "20px" : "60px";
  const paddingBottom = isMobile ? "50px" : "60px";
  return {
    maxWidth: "1000px",
    width: "90vw",
    margin: "auto",
    paddingTop,
    paddingBottom,
    paddingLeft: "2vw",
    paddingRight: "2vw",
    position: "relative",
    boxSizing: "border-box",
  };
};

const Certifications = () => (
  <div style={getContainerStyle()}>
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
      Certifications
    </h2>
    <div style={{ position: "relative" }}>
      <Slider {...sliderSettings}>
        {certificates.map((cert, idx) => (
          <div key={idx}>
            <img
              src={cert.src}
              alt={cert.title}
              style={{
                width: "100%",
                maxHeight: "600px",
                height: "50vw",
                objectFit: "contain",
                boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                background: "#fff",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>
);

export default Certifications;