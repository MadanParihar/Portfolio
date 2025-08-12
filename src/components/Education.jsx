import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Application",
      university: "Veer Narmad South Gujarat University",
      years: "2024 – 2026",
      logo: "/Portfolio/vnsgu.png"
    },
    {
      degree: "Bachelor of Computer Application",
      university: "Veer Narmad South Gujarat University",
      years: "2021 – 2024",
      logo: "/Portfolio/vnsgu.png"
    },
    {
      degree: "HSC",
      university: "Gujarat State Higher Secondary Education Board",
      years: "2020 – 2021",
      logo: "/Portfolio/ghseb.png"
    }
  ];

  return (
    <section id="education">
      <div className="container text-center">
        <h2 className="section-title">Education Journey</h2>
        <div className="col-lg-8 mx-auto">
          <ul className="timeline text-start">
            {educationData.map((edu, index) => (
              <li key={index}>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={edu.logo}
                    alt={`${edu.university} logo`}
                    className="edu-logo"
                  />
                  <div>
                    <h5 className="fw-bold">{edu.degree}</h5>
                    <p className="text-muted mb-0">{edu.university}</p>
                    <span className="badge">{edu.years}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
