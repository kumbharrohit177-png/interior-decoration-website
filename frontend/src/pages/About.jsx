import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaProjectDiagram, FaHeart } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaProjectDiagram />, number: '500+', label: 'Projects Completed' },
    { icon: <FaUsers />, number: '300+', label: 'Happy Clients' },
    { icon: <FaAward />, number: '15+', label: 'Years Experience' },
    { icon: <FaHeart />, number: '100%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards.'
    },
    {
      title: 'Innovation',
      description: 'We embrace new ideas and cutting-edge design trends to create unique spaces.'
    },
    {
      title: 'Integrity',
      description: 'We build trust through honest communication and transparent processes.'
    },
    {
      title: 'Passion',
      description: 'We are passionate about transforming spaces and creating beautiful interiors.'
    }
  ];

  return (
    <Container>
      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Creating beautiful spaces that reflect your style and personality
        </motion.p>
      </HeroSection>

      <Section>
        <ContainerInner>
          <Content>
            <h2>Our Story</h2>
            <p>
              Founded with a vision to transform ordinary spaces into extraordinary living environments, 
              we have been at the forefront of interior design and restoration for over 15 years. Our team 
              of experienced designers and craftsmen work together to bring your vision to life.
            </p>
            <p>
              We specialize in residential and commercial interior design, historical restoration, and 
              modern decoration. Every project is approached with attention to detail, creativity, and 
              a commitment to excellence.
            </p>
          </Content>
        </ContainerInner>
      </Section>

      <StatsSection>
        <ContainerInner>
          <StatsGrid>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StatCard>
                  <IconWrapper>{stat.icon}</IconWrapper>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              </motion.div>
            ))}
          </StatsGrid>
        </ContainerInner>
      </StatsSection>

      <Section>
        <ContainerInner>
          <SectionTitle>
            <h2>Our Values</h2>
            <p>What drives us every day</p>
          </SectionTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ValueCard>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </ValueCard>
              </motion.div>
            ))}
          </ValuesGrid>
        </ContainerInner>
      </Section>

      <CTASection>
        <ContainerInner>
          <CTAContent>
            <h2>Ready to Start Your Project?</h2>
            <p>Let's work together to create something amazing</p>
            <ButtonGroup>
              <Button href="/contact">Get in Touch</Button>
              <Button href="/booking" variant="outline">Book Consultation</Button>
            </ButtonGroup>
          </CTAContent>
        </ContainerInner>
      </CTASection>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 20px;
  text-align: center;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.3rem;
    opacity: 0.9;
  }
`;

const Section = styled.section`
  padding: 80px 0;
  background: ${props => props.theme.colors.light};
`;

const ContainerInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.dark};
    margin-bottom: 30px;
  }

  p {
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textLight};
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

const StatsSection = styled.section`
  padding: 80px 0;
  background: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.colors.dark};
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textLight};
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.dark};
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textLight};
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const ValueCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;

  h3 {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.dark};
    margin-bottom: 15px;
  }

  p {
    color: ${props => props.theme.colors.textLight};
    line-height: 1.6;
  }
`;

const CTASection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const CTAContent = styled.div`
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 14px 30px;
  background: ${props => props.variant === 'outline' ? 'transparent' : 'white'};
  color: ${props => props.variant === 'outline' ? 'white' : props.theme.colors.primary};
  border: 2px solid white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

export default About;
