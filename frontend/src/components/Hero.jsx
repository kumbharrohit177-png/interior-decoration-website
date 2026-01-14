import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Transform Your Space with Elegant Design</h1>
        <p>
          Professional interior decoration and restoration services 
          that blend modern aesthetics with timeless elegance
        </p>
        <ButtonGroup>
          <PrimaryButton as={Link} to="/contact">
            Get Free Consultation
          </PrimaryButton>
          <SecondaryButton as={Link} to="/projects">
            View Our Work
          </SecondaryButton>
        </ButtonGroup>
      </HeroContent>
      <HeroImage
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </HeroSection>
  );
};

const HeroSection = styled.section`
  height: 90vh;
  min-height: 600px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 0 20px;
  max-width: 800px;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    font-weight: 700;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 40px;
    opacity: 0.9;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const HeroImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.3;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(Link)`
  padding: 15px 40px;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }
`;

const PrimaryButton = styled(Button)`
  background: white;
  color: #667eea;

  &:hover {
    background: #f8f9fa;
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: white;
  border: 2px solid white;

  &:hover {
    background: white;
    color: #667eea;
  }
`;

export default Hero;
