import React from "react";
import "./Aboutme.css";

const AboutMe = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center py-12 px-6 bg-white dark:bg-[#0D2226]">
      <div className="w-full max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          About Me
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          I'm a data-driven professional specializing in retail insights, with over two years of experience in transforming complex data into strategic business recommendations. I’m proficient in leveraging Power BI, Python, and SQL to deliver end-to-end analytics, helping clients make smarter decisions based on product trends and customer behavior.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          Beyond my day-to-day work, I’m passionate about the future of business intelligence and enjoy exploring the latest trends, including the applications of Generative AI in analytics. Let’s connect and find new ways to turn data into a competitive advantage.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;