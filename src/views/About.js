import React from 'react';

const About = () => {
  return (
    <main className="about-container">
      <p>
        We are a company focused on the development, design, distribution and
        maintenance of spacecraft.
      </p>
      <p>
        Our facilities are equipped with the highest technology in the field.
      </p>
      <p>
        We offer innovative solutions following the highest quality and safety
        standards.
      </p>
      <div className="about-contact-container">
        <p className="contact-title">Contact</p>
        <p>
          <strong>Email:</strong> service@davoworld.com
        </p>
        <p>
          <strong>Phone:</strong> (xxx) xxxxxxxx
        </p>
        <p>
          <strong>Location:</strong> Corellian Cuadrant, Kuat System, Planet
          XFG-756
        </p>
      </div>
    </main>
  );
};

export default About;
