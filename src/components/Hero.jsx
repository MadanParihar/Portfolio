import React from "react";

const Hero = () => (
  <section id="hero" className="text-center">
    <div className="container">
      <div className="hero-img mb-4">
        <img
  src="/madan_photo.jpg"
  alt="Madan Parihar"
  className="profile-photo"
/>

      </div>
      <h1 className="fw-bold display-4">Hello! I'm Madan Parihar</h1>
      <p className="lead my-3">
        A dedicated student and aspiring <strong>Full Stack Web Developer</strong> with a passion for building modern, user-friendly applications using the <strong>MERN stack</strong>.
      </p>
      <div className="hero-badges mt-4">
        <span className="badge">Web Development</span>
        <span className="badge">Full Stack</span>
        <span className="badge">MERN Stack</span>
      </div>
    </div>
  </section>
);

export default Hero;
