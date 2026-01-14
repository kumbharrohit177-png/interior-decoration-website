import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('/api/contact', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <Container>
      <HeroSection>
        <h1>Contact Us</h1>
        <p>Let's discuss your interior design and restoration needs</p>
      </HeroSection>

      <Content>
        <ContactGrid>
          <ContactForm
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Send us a Message</h2>

            {submitStatus === 'success' && (
              <SuccessMessage>
                Thank you for your message! We'll get back to you soon.
              </SuccessMessage>
            )}

            {submitStatus === 'error' && (
              <ErrorMessage>
                There was an error sending your message. Please try again.
              </ErrorMessage>
            )}

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="service">Service Interested In</Label>
                <Select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="interior-design">Interior Design</option>
                  <option value="restoration">Restoration</option>
                  <option value="decoration">Decoration</option>
                  <option value="renovation">Renovation</option>
                  <option value="consultation">Consultation</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
            </Form>
          </ContactForm>

          <ContactInfo
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Get in Touch</h2>

            <InfoItem>
              <Icon>
                <FaPhone />
              </Icon>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </InfoItem>

            <InfoItem>
              <Icon>
                <FaEnvelope />
              </Icon>
              <div>
                <h4>Email</h4>
                <p>info@interiordesign.com</p>
              </div>
            </InfoItem>

            <InfoItem>
              <Icon>
                <FaMapMarkerAlt />
              </Icon>
              <div>
                <h4>Address</h4>
                <p>123 Design Street, Creative City, CC 12345</p>
              </div>
            </InfoItem>

            <InfoItem>
              <Icon>
                <FaClock />
              </Icon>
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </InfoItem>

            <MapContainer>
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a21c3a4b7c5%3A0x9ef9b6c9e9b6c9e9!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1615529328331!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </MapContainer>
          </ContactInfo>
        </ContactGrid>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 20px;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: -50px auto 0;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.div)`
  padding: 50px;

  h2 {
    margin-bottom: 30px;
    color: #333;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
  color: #555;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const SubmitButton = styled.button`
  padding: 15px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #5a67d8;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ContactInfo = styled(motion.div)`
  padding: 50px;
  background: #f8f9fa;

  h2 {
    margin-bottom: 30px;
    color: #333;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 25px;

  h4 {
    margin: 0 0 5px 0;
    color: #333;
  }

  p {
    margin: 0;
    color: #666;
    line-height: 1.5;
  }
`;

const Icon = styled.div`
  color: #667eea;
  font-size: 20px;
  margin-top: 5px;
`;

const MapContainer = styled.div`
  margin-top: 40px;
  border-radius: 8px;
  overflow: hidden;

  iframe {
    display: block;
  }
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1px solid #c3e6cb;
`;

const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1px solid #f5c6cb;
`;

export default Contact;
