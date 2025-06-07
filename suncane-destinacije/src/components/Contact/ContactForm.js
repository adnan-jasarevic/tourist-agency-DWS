import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import '../../styles.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        const newMessage = {
          id: Date.now(), // Unique ID for the message
          name: formData.name,
          email: formData.email,
          message: formData.message
        };
        messages.push(newMessage);
        localStorage.setItem('messages', JSON.stringify(messages));
      // Send email to yourself (admin)
      emailjs.send(
        'suncane-destinacije', // Replace with your EmailJS service ID
        'template_4h5tj9u', // Replace with your admin template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        'PQKGXBRLPW2FSP5Hj' // Replace with your EmailJS user ID
      )
      .then(() => {
        console.log('Email sent to admin successfully');
      })
      .catch((error) => {
        console.error('Failed to send email to admin:', error);
      });

      // Send auto-reply email to the user
      emailjs.send(
        'suncane-destinacije', // Replace with your EmailJS service ID
        'template_c3czbmj', // Replace with your user auto-reply template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        'PQKGXBRLPW2FSP5Hj' // Replace with your EmailJS user ID
      )
      .then(() => {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Reset submitted status after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Failed to send auto-reply email to user:', error);
      });
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Kontaktirajte Nas</h2>
      {submitted && (
        <div className="success-message">
          Hvala vam na poruci! Uskoro ćemo vam se javiti.
        </div>
      )}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Ime</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Poruka</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={errors.message ? 'error' : ''}
          ></textarea>
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>
        <button type="submit" className="submit-btn">
          Pošalji Poruku
        </button>
      </form>
    </div>
  );
};

export default ContactForm;