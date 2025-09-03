import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import qualityImg from "../Images/Cover Pic - Quick Commerce Analysis.png";
import taxiimg from "../Images/Cover Pic - Taxi Performance Analytics.png";
import demoImg2 from "../Images/demo2-list.png";

const BASE_PATH = "/Portfolio";

const projects = [
  {
    title: "Quick Commerce Analysis",
    id: "portfolio-website",
    description:
      "Take a look into a quick commerce company's Power BI dashboard",
    link: `${BASE_PATH}/project/portfolio-website`,
    cover: qualityImg,
    internal: true,
  },
  {
    title: "Taxi Performance Analytics",
    description: "This Power BI dashboard offers a comprehensive look at a year's worth of ride-sharing data from a cab service",
    link: `${BASE_PATH}/project/Project2Page`,
    cover: taxiimg,
    internal: false,
  },
];

const getRows = (projects) => {
  if (projects.length === 8) {
    return [projects.slice(0, 4), projects.slice(4, 8)];
  }
  if (projects.length === 7) {
    return [projects.slice(0, 4), projects.slice(4, 7)];
  }
  const pattern = [4, 2];
  let rows = [];
  let idx = 0;
  for (let count of pattern) {
    rows.push(projects.slice(idx, idx + count));
    idx += count;
  }
  if (idx < projects.length) {
    rows.push(projects.slice(idx));
  }
  return rows;
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Show only first 4 projects on mobile unless showAll is true
  const visibleProjects =
    isMobile && !showAll ? projects.slice(0, 4) : projects;

  const rows = getRows(visibleProjects);

  return (
    <section
      id="projects"
      className="py-8 px-2 sm:px-4 bg-white animate-about-fade"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Projects
      </h2>
      <div className="flex flex-col items-center gap-8">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className={`grid gap-8 justify-center
              sm:grid-cols-2
              ${row.length === 4
                ? "md:grid-cols-4"
                : row.length === 3
                ? "md:grid-cols-3"
                : row.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-1"
              }`}
          >
            {row.map((project, idx) => {
              // Mobile: blur the 4th card and overlay button
              const shouldBlur =
                isMobile && !showAll && rowIdx === 0 && idx === 3;
              return (
                <div
                  className="project-card bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col relative"
                  key={idx}
                  style={shouldBlur ? { position: "relative" } : {}}
                >
                  <div className={shouldBlur ? "blur-sm pointer-events-none" : ""}>
                    <img
                      src={project.cover}
                      alt={`${project.title} cover`}
                      className="w-full h-56 object-contain bg-[white] border border-gray-200 shadow-sm mb-4 rounded"
                    />
                    <div className="flex-1 flex flex-col px-4 pb-4 text-center">
                      <h3 className="text-xl font-semibold mb-2 text-[#0D2226]">
                        {project.title}
                      </h3>
                      <p className="text-[#0D2226] mb-4">{project.description}</p>
                      {project.internal ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-block px-4 py-2 rounded text-white hover:opacity-90 transition-colors duration-200 mx-auto"
                          style={{ backgroundColor: "#1C3343" }}
                        >
                          View Project
                        </a>
                      ) : (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-block px-4 py-2 rounded text-white hover:opacity-90 transition-colors duration-200 mx-auto"
                          style={{ backgroundColor: "#1C3343" }}
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                  {shouldBlur && (
                    <button
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 py-2 bg-[#1C3343] text-white font-semibold rounded-lg shadow-lg z-20 hover:bg-[#25405a] transition-colors duration-200"
                      onClick={() => setShowAll(true)}
                      style={{
                        backdropFilter: "blur(2px)",
                        border: "2px solid #fff",
                        cursor: "pointer",
                      }}
                    >
                      Show More Projects
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
