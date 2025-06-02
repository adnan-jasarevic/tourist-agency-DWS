import React from 'react';
import '../../styles.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p className='about-info'>
        Suncane Destinacije je turistička agencija posvećena tome da vam pomogne da otkrijete najljepše i najsunčanije destinacije širom svijeta. Naša misija je da pružimo personalizirana putovanja, prilagođena vašim preferencijama i potrebama. Sa strašću za putovanjima i dugogodišnjim iskustvom, naš tim osigurava da svako putovanje bude nezaboravno, udobno i ispunjeno nezaboravnim trenucima.
      </p>
      <section className="team">
        <h2>Naš tim</h2>
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