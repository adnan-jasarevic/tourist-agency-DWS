import React from 'react';
import '../../styles.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        We are a team of passionate developers creating amazing web applications.
      </p>
      <section className="team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="member">
            <h3>Emin Ahbabović</h3>
            <p style={{color:'black'}}>Frontend Developer</p>
          </div>
          <div className="member">
            <h3>Adnan Jašarević</h3>
            <p style={{color:'black'}}>UI/UX Designer</p>
          </div>
          <div className="member">
            <h3>Emir Genjac</h3>
            <p style={{color:'black'}}>Backend Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;