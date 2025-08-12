import React from "react";

const ProjectCard = ({ title, description, features, tags }) => (
  <div className="project-card h-100">
    <h4>{title}</h4>
    <p>{description}</p>
    <ul className="mt-3">
      {features.map((feature, index) => (
        <li key={index}><i className="fas fa-check-circle text-primary me-2"></i>{feature}</li>
      ))}
    </ul>
    <div className="mt-3">
      {tags.map((tag, index) => (
        <span key={index} className="badge me-2">{tag}</span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Airbnb Clone",
      description: "A rental platform with authentication, CRUD, and responsive UI.",
      features: [
        "RESTful APIs for listings and users",
        "Secure authentication",
        "Optimized database queries"
      ],
      tags: ["Node.js", "Express", "MongoDB", "Bootstrap"]
    },
    {
      title: "Pets E-commerce",
      description: "Full stack pet product store with cart and checkout.",
      features: [
        "Dynamic product listings",
        "Cart management",
        "Bill generation"
      ],
      tags: ["React", "Node.js", "MongoDB"]
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="row g-4">
          {projects.map((proj, idx) => (
            <div className="col-md-6" key={idx}>
              <ProjectCard {...proj} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
