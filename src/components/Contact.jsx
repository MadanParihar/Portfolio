import React from "react";

const Contact = () => (
  <section id="contact">
    <div className="container">
      <h2 className="section-title text-center">Let's Connect</h2>
      <div className="row g-4 justify-content-center">
        
        {/* Contact Information */}
        <div className="col-md-5">
          <div className="contact-card h-100">
            <h5 className="mb-3">Contact Information</h5>
            <p><strong>Email:</strong> <a href="mailto:pariharmadan44@gmail.com">pariharmadan44@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:08160454642">08160454642</a></p>
            <p><strong>Address:</strong> Valsad, Gujarat</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="col-md-5">
          <div className="contact-card h-100">
            <h5 className="mb-3">Social Links</h5>
            <div className="d-flex flex-wrap gap-3">
                &nbsp;&nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/madan-parihar/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/MadanParihar" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>&nbsp;&nbsp;&nbsp;
              <a href="https://x.com/MadanPa91152560/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>&nbsp;&nbsp;&nbsp;
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Contact;
