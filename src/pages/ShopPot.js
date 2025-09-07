import React, { useState } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css'; // Create and style this CSS file

const ShopPot = () => {
  const { offerId } = useParams();
  const navigate = useNavigate();

  // Mock data for offers
  const offers = [
    { id: 21, image: '/Nursery/pot1.jpg', title: 'Decorative Ceramic Pots', price: 20, description: 'Get 20% off on our exclusive range of decorative ceramic pots.' },
    { id: 22, image: '/Nursery/pot2.jpg', title: 'Modern Concrete Pots', price: 30, description: 'Stylish and durable concrete pots with 15% discount.' },
    { id: 23, image: '/Nursery/pot3.jpg', title: 'Vintage Terra Cotta Pots', price: 25, description: 'Classic terra cotta pots now 25% off.' },
    { id: 24, image: '/Nursery/pot4.jpg', title: 'Elegant Glass Pots', price: 40, description: 'Elegant glass pots with a 10% discount.' },
    { id: 25, image: '/Nursery/pot5.jpg', title: 'Handcrafted Wooden Pots', price: 50, description: 'Unique handcrafted wooden pots at 30% off.' }
  ];

  const offer = offers.find(o => o.id === parseInt(offerId));

  const [paymentMethod, setPaymentMethod] = useState('online');
  const [quantity, setQuantity] = useState(1);

  if (!offer) {
    return <div>Offer not found</div>;
  }

  const today = new Date();
  const deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + 7); // Assuming delivery in 7 days

  const totalPrice = (quantity * offer.price).toFixed(2);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <Container className="shop-pot">
      <div className="receipt">
        <div className="receipt-header">
          <img src="/Nursery/nurserylogo.png" alt="Logo" className="logo" />
          <div className="contact-info">
            <p><strong>Plant Nursery</strong></p>
            <p>123 Greenway Drive, Plantville, PL 45678</p>
            <p>(123) 456-7890</p>
          </div>
          <div className="receipt-info">
            <p><strong>Order Date:</strong> {today.toDateString()}</p>
            <p><strong>Delivery Date:</strong> {deliveryDate.toDateString()}</p>
          </div>
        </div>
        <div className="receipt-content">
          <div className="product-details-section">
            <img src={offer.image} alt={offer.title} className="product-image" />
            <p><strong>Product Name:</strong> {offer.title}</p>
            <p><strong>Price:</strong> ${offer.price}</p>
            <Form.Group controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
                required
              />
            </Form.Group>
            <p><strong>Total Price:</strong> ${totalPrice}</p>
          </div>
          <div className="customer-details-section">
            <h3>Customer Details</h3>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={2} placeholder="Enter your address" required />
              </Form.Group>
              <Form.Group controlId="formPaymentMethod">
                <Form.Label>Payment Method</Form.Label>
                <Form.Control
                  as="select"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="online">Online Payment</option>
                  <option value="cod">Cash on Delivery</option>
                </Form.Control>
              </Form.Group>
              {paymentMethod === 'online' && (
                <div className="payment-info">
                  <h5>Bank Details</h5>
                  <p><strong>Bank Name:</strong> XYZ Bank</p>
                  <p><strong>Account Number:</strong> 1234567890</p>
                  <p><strong>Sort Code:</strong> 12-34-56</p>
                  <p><strong>IBAN:</strong> GB29NWBK60161331926819</p>
                  <p><strong>SWIFT/BIC:</strong> NWBKGB2L</p>
                </div>
              )}
              <Button variant="primary" type="submit">
                Place Order
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShopPot;
