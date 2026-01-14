import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaUserPlus } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setErrors({});

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const { confirmPassword, ...registerData } = formData;
      const result = await register(registerData);
      
      if (result.success) {
        navigate('/profile');
      } else {
        if (result.errors) {
          const fieldErrors = {};
          result.errors.forEach(err => {
            if (err.path) {
              fieldErrors[err.path] = err.msg;
            }
          });
          setErrors(fieldErrors);
        }
        setError(result.error || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <FormContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FormHeader>
          <IconWrapper>
            <FaUserPlus />
          </IconWrapper>
          <h1>Create Account</h1>
          <p>Sign up to get started with our services</p>
        </FormHeader>

        {error && (
          <ErrorMessage
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            {error}
          </ErrorMessage>
        )}

        <Form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label htmlFor="firstName">
                <FaUser /> First Name
              </Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                required
                hasError={!!errors.firstName}
              />
              {errors.firstName && <FieldError>{errors.firstName}</FieldError>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="lastName">
                <FaUser /> Last Name
              </Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                required
                hasError={!!errors.lastName}
              />
              {errors.lastName && <FieldError>{errors.lastName}</FieldError>}
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label htmlFor="email">
              <FaEnvelope /> Email Address
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              required
              hasError={!!errors.email}
            />
            {errors.email && <FieldError>{errors.email}</FieldError>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">
              <FaPhone /> Phone Number (Optional)
            </Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 234 567 8900"
              hasError={!!errors.phone}
            />
            {errors.phone && <FieldError>{errors.phone}</FieldError>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">
              <FaLock /> Password
            </Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 6 characters"
              required
              hasError={!!errors.password}
            />
            {errors.password && <FieldError>{errors.password}</FieldError>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="confirmPassword">
              <FaLock /> Confirm Password
            </Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              required
              hasError={!!errors.confirmPassword}
            />
            {errors.confirmPassword && <FieldError>{errors.confirmPassword}</FieldError>}
          </FormGroup>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </SubmitButton>
        </Form>

        <SignInPrompt>
          Already have an account? <Link to="/login">Sign in</Link>
        </SignInPrompt>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.gradients.primary};
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
    z-index: 0;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: rotate 15s linear infinite reverse;
    z-index: 0;
    pointer-events: none;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const FormContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: ${props => props.theme.borderRadius['2xl']};
  box-shadow: ${props => props.theme.shadows['2xl']};
  padding: 48px;
  width: 100%;
  max-width: 550px;
  position: relative;
  z-index: 10;
  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.theme.gradients.primary};
    z-index: 1;
    pointer-events: none;
  }
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
  padding: 14px 18px;
  border: 2px solid ${props => props.hasError ? '#dc2626' : '#e5e7eb'};
  border-radius: ${props => props.theme.borderRadius.lg};
  font-size: 1rem;
  background: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#dc2626' : props.theme.colors.primary};
    box-shadow: 0 0 0 4px ${props => props.hasError ? 'rgba(220, 38, 38, 0.1)' : 'rgba(102, 126, 234, 0.1)'}, ${props => props.theme.shadows.md};
    transform: translateY(-1px);
  }

  &::placeholder {
    color: ${props => props.theme.colors.textLighter};
  }

  &:hover:not(:focus) {
    border-color: ${props => props.hasError ? '#dc2626' : '#d1d5db'};
  }
`;

const FieldError = styled.span`
  color: #dc2626;
  font-size: 0.85rem;
  margin-top: -5px;
`;

const SubmitButton = styled.button`
  padding: 16px;
  background: ${props => props.theme.gradients.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.lg};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 10px;
  box-shadow: ${props => props.theme.shadows.md};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.colored};

    &::before {
      width: 400px;
      height: 400px;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled(motion.div)`
  background: #fee2e2;
  color: #dc2626;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 0.9rem;
`;

const SignInPrompt = styled.p`
  text-align: center;
  margin-top: 25px;
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Register;
