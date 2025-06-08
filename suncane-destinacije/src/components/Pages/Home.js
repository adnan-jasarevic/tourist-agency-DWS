import React from 'react';
import '../../styles.css';
import Maldives from '../../images/maldives.webp';
import Alps from '../../images/alps.webp';
import Paris from '../../images/paris.webp';
import Plane from '../../images/plane.svg';
import Hotel from '../../images/hotel.svg';
import Man from '../../images/man.webp';
import Woman from '../../images/woman.webp';
import Bus from '../../images/bus.svg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();


  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero-section" data-aos="fade-up">
        <h1>Dobrodošli na Sunčane Destinacije</h1>
        <p>Vaša vrata ka nezaboravnim putničkim iskustvima</p>
        <button className="cta-button">
        <a href="#destinations" style={{ textDecoration: 'none', color: 'white' }}>
            Istraži destinacije
        </a>
        </button>
      </div>

      {/* Featured Destinations Section */}
      <div className="featured-destinations" id='destinations' data-aos="fade-up">
        <h2 className="featured-destinations-title">Istaknute Destinacije</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img src={Maldives} loading='lazy' alt="Beach"  />
            <h3>Maldivi</h3>
            <p className="destination-card-info">Doživite kristalno čisto more i bijele pješčane plaže.</p>
          </div>
          <div className="destination-card">
            <img src={Alps} loading='lazy' alt="Mountains" />
            <h3>Švicarske Alpe</h3>
            <p className="destination-card-info">Otkrijte prekrasne planinske poglede i udobne brvnare.</p>
          </div>
          <div className="destination-card">
            <img src={Paris} loading='lazy' alt="City" />
            <h3>Pariz</h3>
            <p className="destination-card-info">Istražite grad ljubavi s njegovim kultnim znamenitostima i kulturom.</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section" data-aos="fade-up">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3 className='service-info'>Planiranje Putovanja</h3>
            <p className='service-info'>Dozvolite nam da vam pomognemo da s lakoćom isplanirate svoje savršeno putovanje.</p>
            <img src={Plane} alt="Plane" />
          </div>
          <div className="service-card">
            <h3 className='service-info'>Smještaj</h3>
            <p className='service-info'>Pronađite najbolje hotele i smještaje za vaše putovanje.</p>
             <img src={Hotel} alt="Hotel" />
          </div>
          <div className="service-card">
            <h3 className='service-info'>Ture sa Vodičem</h3>
            <p className='service-info'>Uživajte u vođenim obilascima kako biste maksimalno iskoristili svoja putovanja.</p>
             <img src={Bus} alt="Bus" />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section" data-aos="fade-up">
        <h2 className='featured-destinations-title'>Iskustva korisnika</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-card-image">
              <img src={Man} loading='lazy' alt="Man" className='testimonial-image' />
            </div>
            <p>"Putovanje je bilo fantastično! Sve je bilo savršeno organizovano."</p>
            <h4>- Visočanin</h4>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-card-image">
              <img src={Woman} loading='lazy' alt="Woman" className='testimonial-image'/>
            </div>
            <p>"Imala sam najbolji odmor u životu zahvaljujući suncanedestinaciji."</p>
            <h4>- Fatima</h4>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="contact-section" data-aos="fade-up">
        <h2>Kontaktirajte nas</h2>
        <p></p>
        <button className="contact-button" onClick={() => navigate('/contact')}>Kontakt</button>
      </div>

      </div>
  );
};

export default HomePage;