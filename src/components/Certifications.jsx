import React from "react";

const Certifications = () => {
  const certificationsData = [
    {
      title: "Deloitte Australia - Data Analytics Job Simulation",
      date: "May 2025",
      issuer: "Forage"
    },
    {
      title: "Tata Group - Data Visualization: Empowering Business with Effective Insights",
      date: "May 2025",
      issuer: "Forage"
    },
    {
      title: "AI Engineer",
      date: "June 2025",
      issuer: "United Latino Students Association"
    }
  ];

  return (
    <section id="certifications">
      <div className="container text-center">
        <h2 className="section-title">Certifications</h2>
        <div className="row g-4 justify-content-center">
          {certificationsData.map((cert, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="cert-card h-100">
                <h5>{cert.title}</h5>
                <p className="text-muted mb-1">{cert.issuer}</p>
                <span className="badge">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
