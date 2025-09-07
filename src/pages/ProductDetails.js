import React, { useState } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import mockPlants from '../services/mockData'; // Adjust import based on your data source
import './ProductDetails.css'; // Import the CSS file for styling

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const plant = mockPlants.find(p => p.id === parseInt(productId));

  // Define state for payment method, quantity, and screenshot
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [quantity, setQuantity] = useState(1);
  const [screenshot, setScreenshot] = useState(null);

  // Handle the case when the plant is not found
  if (!plant) {
    return <div>Product not found</div>;
  }

  const today = new Date();
  const deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + 7); // Assuming delivery in 7 days

  // Calculate price and total
  const price = typeof plant.price === 'number' ? plant.price.toFixed(2) : '0.00';
  const totalPrice = (quantity * parseFloat(price)).toFixed(2);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <Container className="product-details">
      <div className="receipt">
        <div className="receipt-header">
          <img src="/nursery/nurserylogo.png" alt="Logo" className="logo" />
          <div className="contact-info">
            <p><strong>Growtopia</strong></p>
            <p>123 Plant Street, Garden City, GA 12345</p>
            <p>(123) 456-7890</p>
          </div>
          <div className="receipt-info">
            <p><strong>Order Date:</strong> {today.toDateString()}</p>
            <p><strong>Delivery Date:</strong> {deliveryDate.toDateString()}</p>
          </div>
        </div>
        <div className="receipt-content">
          <div className="product-details-section">
            <img src={plant.image} alt={plant.name} className="product-image" />
            <p><strong>Product Name:</strong> {plant.name}</p>
            <p><strong>Price:</strong> ${price}</p> {/* Include price */}
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
            <p><strong>Total Price:</strong> ${totalPrice}</p> {/* Include total price */}
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
                  <Form.Group controlId="formScreenshot">
                    <Form.Label>Upload Payment Screenshot</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(e) => setScreenshot(e.target.files[0])}
                    />
                    {screenshot && (
                      <div className="screenshot-preview">
                        <img src={URL.createObjectURL(screenshot)} alt="Screenshot Preview" />
                      </div>
                    )}
                  </Form.Group>
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

export default ProductDetails;
