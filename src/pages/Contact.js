import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Contact.css'; // Ensure your CSS is properly imported

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Your message has been sent successfully!');
    // Clear the form data
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    // Navigate to home page
    navigate('/');
  };

  return (
    <Container className="contact-container">
      <div className="contact-overlay"></div>
      <div className="contact-content">
        <h1>Contact Us</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@rowtopia.com</p>
          <p>Address: 123 Plant Street, Garden City, GA 12345</p>
          <p>Operating Hours: Mon-Fri 9am - 5pm</p>
          <div className="map">
            <h2>Our Location</h2>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0688926928486!2d-122.39977288468142!3d37.79253277975454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a8bfb50d1%3A0xd8fdedbcd92e2a6e!2sSan%20Francisco%2C%20CA%2094111!5e0!3m2!1sen!2sus!4v1625755102725!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
