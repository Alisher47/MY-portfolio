
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "p3.jpg",
    //   gLink: "",
    //   lLink: "",
    },
    {
      title: "Project 2",
      img: "p2.jpg",
      
    },
   
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href=""
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  

                
                </div>
              </div>
              <p>
              A list or visual representation of the developer's skills and technologies they're proficient in. 
              This could include programming languages, frameworks, CMS platforms, design tools, etc.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 