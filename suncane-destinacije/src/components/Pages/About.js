import React from 'react';
import '../../styles.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p className='about-info'>
        Suncane Destinacije is a dedicated tourist agency committed to helping you discover the most beautiful and sunny destinations around the world. Our mission is to provide personalized travel experiences, tailored to your preferences and needs. With a passion for travel and years of expertise, our team ensures every journey is memorable, comfortable, and filled with unforgettable moments.
      </p>
      <section className="team">
        <h2>Our Team</h2>
        <p></p>
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
            <h3>Emir
               Genjac</h3>
            <p className="backend-developer">Backend Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;