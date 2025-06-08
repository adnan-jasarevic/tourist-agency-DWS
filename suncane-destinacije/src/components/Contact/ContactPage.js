import React from 'react';
import ContactForm from './ContactForm';
import '../../styles.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-info">
          <h2 className='contact-headers'>Stupite u Kontakt</h2>
          <p>
            Imate pitanja ili povratne informacije? Voljeli bismo čuti vaše mišljenje!
          </p>
          <div className="contact-details">
            <h3 className='contact-headers'>Naša Kancelarija</h3>
            <p translate="no">Fakultetska 1</p>
            <p>Zenica, Bosnia and Herzegovina 72000</p>
            <p>Email: emir.genjac.24@size.com</p>
            <p>Phone: +387 (61) 351-656</p>
          </div>
        </div>
        <div className="contact-form-section">
          <ContactForm />
        </div>
      </div>
      <div className="map-container">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.3728421195933!2d17.90087161060391!3d44.19938687096081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee2423fa0fbaf%3A0xd5caf50678c02195!2sPolitehni%C4%8Dki%20fakultet%20Univerziteta%20u%20Zenici!5e0!3m2!1sen!2sba!4v1746716180597!5m2!1sen!2sba"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;