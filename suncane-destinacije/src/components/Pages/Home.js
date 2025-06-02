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
      <div className="hero-section">
        <h1>Dobrodošli na Sunčane Destinacije</h1>
        <p>Vaša vrata ka nezaboravnim putničkim iskustvima</p>
        <button className="cta-button">
        <a href="#destinations" style={{ textDecoration: 'none', color: 'white' }}>
            Istraži destinacije
        </a>
        </button>
      </div>

      {/* Featured Destinations Section */}
      <div className="featured-destinations" id='destinations'>
        <h2 className="featured-destinations-title">Featured Destinations</h2>
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
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3 className='service-info'>Travel Planning</h3>
            <p className='service-info'>Let us help you plan your perfect trip with ease.</p>
            <img src={Plane} alt="Plane" />
          </div>
          <div className="service-card">
            <h3 className='service-info'>Accommodation</h3>
            <p className='service-info'>Find the best hotels and stays for your journey.</p>
             <img src={Hotel} alt="Hotel" />
          </div>
          <div className="service-card">
            <h3 className='service-info'>Guided Tours</h3>
            <p className='service-info'>Enjoy guided tours to make the most of your travels.</p>
             <img src={Bus} alt="Bus" />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2 className='featured-destinations-title'>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-card-image">
              <img src={Man} loading='lazy' alt="Man" className='testimonial-image' />
            </div>
            <p>"The trip was amazing! Everything was perfectly organized."</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-card-image">
              <img src={Woman} loading='lazy' alt="Woman" className='testimonial-image'/>
            </div>
            <p>"I had the best vacation of my life thanks to suncanedestinacije."</p>
            <h4>- Jane Smith</h4>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions? We're here to help!</p>
        <button className="contact-button" onClick={() => navigate('/contact')}>Get in Touch</button>
      </div>

      {/* Back to Top Button */}
      <div className="back-to-top">
        <button className="back-to-top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to Top
        </button>
      </div>
      </div>
  );
};

export default HomePage;