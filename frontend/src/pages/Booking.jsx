import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { FaCalendarCheck, FaClock, FaEnvelope, FaPhone, FaConciergeBell } from 'react-icons/fa';

const Booking = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    message: '',
    phone: user?.phone || '',
    email: user?.email || ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const services = [
    'Interior Design Consultation',
    'Restoration Services',
    'Decoration Services',
    'Renovation Planning',
    'Space Planning',
    'Color Consultation',
    'Furniture Selection',
    'Lighting Design'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await axios.post('/bookings', {
        ...formData,
        contactInfo: {
          phone: formData.phone,
          email: formData.email
        }
      });
      
      setMessage({ type: 'success', text: 'Booking request submitted successfully! We will contact you soon.' });
      setFormData({
        service: '',
        date: '',
        time: '',
        message: '',
        phone: user?.phone || '',
        email: user?.email || ''
      });
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data?.message || 'Failed to submit booking' });
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <Container>
        <MessageBox>
          <h2>Please Login</h2>
          <p>You need to be logged in to book a consultation.</p>
          <LoginButton onClick={() => navigate('/login')}>Go to Login</LoginButton>
        </MessageBox>
      </Container>
    );
  }

  return (
    <Container>
      <FormContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FormHeader>
          <IconWrapper>
            <FaCalendarCheck />
          </IconWrapper>
          <h1>Book a Consultation</h1>
          <p>Schedule a meeting with our interior design experts</p>
        </FormHeader>

        {message.text && (
          <Message type={message.type}>
            {message.text}
          </Message>
        )}

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>
              <FaConciergeBell /> Service Type
            </Label>
            <Select name="service" value={formData.service} onChange={handleChange} required>
              <option value="">Select a service</option>
              {services.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </Select>
          </FormGroup>

          <FormRow>
            <FormGroup>
              <Label>
                <FaCalendarCheck /> Date
              </Label>
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <FaClock /> Time
              </Label>
              <Select name="time" value={formData.time} onChange={handleChange} required>
                <option value="">Select time</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </Select>
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label>
              <FaPhone /> Phone Number
            </Label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>
              <FaEnvelope /> Email
            </Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Additional Message (Optional)</Label>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about your project or any specific requirements..."
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Book Consultation'}
          </SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
`;

const FormContainer = styled(motion.div)`
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 600px;
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 2rem;
    color: ${props => props.theme.colors.dark};
    margin: 15px 0 10px;
  }

  p {
    color: ${props => props.theme.colors.textLight};
    font-size: 0.95rem;
  }
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme.colors.dark};
  font-weight: 500;
  font-size: 0.9rem;

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const Select = styled.select`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const SubmitButton = styled.button`
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Message = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  background: ${props => props.type === 'success' ? '#d1fae5' : '#fee2e2'};
  color: ${props => props.type === 'success' ? '#065f46' : '#dc2626'};
`;

const MessageBox = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  max-width: 500px;

  h2 {
    color: ${props => props.theme.colors.dark};
    margin-bottom: 15px;
  }

  p {
    color: ${props => props.theme.colors.textLight};
    margin-bottom: 25px;
  }
`;

const LoginButton = styled.button`
  padding: 12px 30px;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
`;

export default Booking;
