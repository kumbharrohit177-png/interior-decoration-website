import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const result = await login(formData.email, formData.password);
      if (result.success) {
        navigate('/profile');
      } else {
        setError(result.error || 'Login failed. Please try again.');
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
            <FaSignInAlt />
          </IconWrapper>
          <h1>Welcome Back</h1>
          <p>Sign in to your account to continue</p>
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
              placeholder="Enter your email"
              required
            />
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
              placeholder="Enter your password"
              required
            />
          </FormGroup>

          <ForgotPasswordLink to="/forgot-password">
            Forgot your password?
          </ForgotPasswordLink>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </SubmitButton>
        </Form>

        <SignUpPrompt>
          Don't have an account? <Link to="/register">Sign up</Link>
        </SignUpPrompt>
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
  max-width: 450px;
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
  width: 70px;
  height: 70px;
  background: ${props => props.theme.gradients.primary};
  border-radius: 50%;
  color: white;
  font-size: 1.8rem;
  box-shadow: ${props => props.theme.shadows.colored};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: ${props => props.theme.gradients.primary};
    opacity: 0.3;
    z-index: -1;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.1;
    }
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
  border: 2px solid #e5e7eb;
  border-radius: ${props => props.theme.borderRadius.lg};
  font-size: 1rem;
  background: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1), ${props => props.theme.shadows.md};
    transform: translateY(-1px);
  }

  &::placeholder {
    color: ${props => props.theme.colors.textLighter};
  }

  &:hover:not(:focus) {
    border-color: #d1d5db;
  }
`;

const ForgotPasswordLink = styled(Link)`
  text-align: right;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
  }
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

const SignUpPrompt = styled.p`
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

export default Login;
