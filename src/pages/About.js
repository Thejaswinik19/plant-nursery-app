import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'; // Import the CSS file for About page styling
import Footer from '../components/Footer'; // Import the Footer component

const About = () => {
  return (
    <Container className="about-page">
      <h1>About Us</h1>
      
      <section>
        <h2>Our Mission</h2>
        <p>
          At Growtopia, we are dedicated to providing high-quality plants and gardening supplies.
          Our mission is to help you create beautiful and sustainable green spaces.
        </p>
      </section>

      <section>
        <h2>About Our Nursery</h2>
        <div className="image-section">
          <div className="image-container">
            <img src="/Nursery/pn1.jpg" alt="Our Nursery 1" />
            
          </div>
          <div className="image-container">
            <img src="/Nursery/pn2.jpg" alt="Our Nursery 2" />
            
          </div>
          <div className="image-container">
            <img src="/Nursery/pn3.jpg" alt="Our Nursery 3" />
            
          </div>
        </div>
      </section>
      
      <section>
        <h2>Our Values</h2>
        <ul>
          <li>Quality</li>
          <li>Sustainability</li>
          <li>Customer Satisfaction</li>
          {/* Add more values as needed */}
        </ul>
      </section>
      
      <section>
        <h2>Achievements</h2>
        <p>We have been recognized for our efforts in promoting sustainable gardening and have received several awards.</p>
        {/* List achievements or awards */}
      </section>

      <Footer /> {/* Include Footer */}
    </Container>
  );
};

export default About;
