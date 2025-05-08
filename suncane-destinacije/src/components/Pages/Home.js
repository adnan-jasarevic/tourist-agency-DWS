import React from 'react';
import '../../styles.css';
import Maldives from '../../images/maldives.jpg';
import Alps from '../../images/alps.jpg';
import Paris from '../../images/paris.jpg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();


  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Sunlit Destinations</h1>
        <p>Your gateway to unforgettable travel experiences</p>
        <button className="cta-button">
        <a href="#destinations" style={{ textDecoration: 'none', color: 'white' }}>
            Explore Destinations
        </a>
        </button>
      </div>

      {/* Featured Destinations Section */}
      <div className="featured-destinations" id='destinations'>
        <h2>Featured Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img src={Maldives} alt="Beach" />
            <h3>Maldives</h3>
            <p>Experience the crystal-clear waters and white sandy beaches.</p>
          </div>
          <div className="destination-card">
            <img src={Alps} alt="Mountains" />
            <h3>Swiss Alps</h3>
            <p>Discover breathtaking mountain views and cozy chalets.</p>
          </div>
          <div className="destination-card">
            <img src={Paris} alt="City" />
            <h3>Paris</h3>
            <p>Explore the city of love with its iconic landmarks and culture.</p>
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
          </div>
          <div className="service-card">
            <h3 className='service-info'>Accommodation</h3>
            <p className='service-info'>Find the best hotels and stays for your journey.</p>
          </div>
          <div className="service-card">
            <h3 className='service-info'>Guided Tours</h3>
            <p className='service-info'>Enjoy guided tours to make the most of your travels.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"The trip was amazing! Everything was perfectly organized."</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial-card">
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
    </div>
  );
};

export default HomePage;