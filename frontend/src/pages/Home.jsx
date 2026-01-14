import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// Components
import Hero from '../components/Hero.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import TestimonialSlider from '../components/TestimonialSlider.jsx';
import SearchBar from '../components/SearchBar.jsx';

// Icons
import { FaPaintRoller, FaHammer, FaHome, FaCouch } from 'react-icons/fa';
import { GiStoneWall } from 'react-icons/gi';

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [services, setServices] = useState([]);

  // Fallback sample projects
  const sampleProjects = [
    {
      _id: '1',
      title: 'Modern Living Room',
      description: 'Contemporary living space with elegant furnishings',
      image: 'https://images.unsplash.com/photo-1565183938294-7563f3ff68c5?w=500&h=400&fit=crop',
      featured: true,
      category: 'Living Room'
    },
    {
      _id: '2',
      title: 'Luxury Master Bedroom',
      description: 'Sophisticated bedroom design with premium materials',
      image: 'https://images.unsplash.com/photo-1540932239986-310128078f3c?w=500&h=400&fit=crop',
      featured: true,
      category: 'Bedroom'
    },
    {
      _id: '3',
      title: 'Kitchen Renovation',
      description: 'Modern kitchen with state-of-the-art appliances',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop',
      featured: true,
      category: 'Kitchen'
    }
  ];

  // Fallback sample services
  const sampleServices = [
    { _id: '1', title: 'Interior Design', description: 'Custom designs tailored to your style' },
    { _id: '2', title: 'Space Planning', description: 'Optimize your space for comfort and function' },
    { _id: '3', title: 'Color Consultation', description: 'Expert color schemes for any room' },
    { _id: '4', title: 'Furniture Selection', description: 'Curated furniture for your home' }
  ];

  useEffect(() => {
    fetchFeaturedProjects();
    fetchServices();
  }, []);

  const fetchFeaturedProjects = async () => {
    try {
      const response = await axios.get('/api/projects?featured=true');
      setFeaturedProjects(response.data.slice(0, 3));
    } catch (error) {
      console.warn('Using sample projects (API unavailable)');
      setFeaturedProjects(sampleProjects);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get('/api/services');
      setServices(response.data.slice(0, 4));
    } catch (error) {
      console.warn('Using sample services (API unavailable)');
      setServices(sampleServices);
    }
  };

  const mainServices = [
    {
      title: 'Interior Design',
      description: 'Custom interior solutions for residential and commercial spaces',
      icon: <FaHome />,
      link: '/services#design'
    },
    {
      title: 'Restoration',
      description: 'Preserving and restoring historical and vintage interiors',
      icon: <GiStoneWall />,
      link: '/services#restoration'
    },
    {
      title: 'Decoration',
      description: 'Complete decoration services with modern aesthetics',
      icon: <FaPaintRoller />,
      link: '/services#decoration'
    },
    {
      title: 'Renovation',
      description: 'Transforming spaces with innovative renovation solutions',
      icon: <FaHammer />,
      link: '/services#renovation'
    }
  ];

  const handleSearch = (query) => {
    // Navigate to search results or filter projects
    console.log('Searching for:', query);
    // You can implement search functionality here
  };

  return (
    <>
      <Hero />
      
      {/* Search Bar */}
      <SearchSection>
        <Container>
          <SearchBar onSearch={handleSearch} />
        </Container>
      </SearchSection>
      
      {/* Services Section */}
      <Section>
        <Container>
          <SectionTitle>
            <h2>Our Services</h2>
            <p>Comprehensive interior solutions for every space</p>
          </SectionTitle>
          
          <ServicesGrid>
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </ServicesGrid>
        </Container>
      </Section>

      {/* Featured Projects */}
      <Section dark>
        <Container>
          <SectionTitle light>
            <h2>Featured Projects</h2>
            <p>Explore our recent interior design and restoration work</p>
          </SectionTitle>
          
          <ProjectsGrid>
            {featuredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </ProjectsGrid>
          
          <Center>
            <Button as={Link} to="/projects" variant="outline">
              View All Projects
            </Button>
          </Center>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection>
        <Container>
          <CTAContent>
            <h2>Ready to Transform Your Space?</h2>
            <p>Get a free consultation with our interior design experts</p>
            <ButtonGroup>
              <Button as={Link} to="/contact" primary>
                Book Consultation
              </Button>
              <Button as={Link} to="/projects" variant="outline">
                View Portfolio
              </Button>
            </ButtonGroup>
          </CTAContent>
        </Container>
      </CTASection>

      {/* Testimonials */}
      <Section>
        <Container>
          <SectionTitle>
            <h2>Client Testimonials</h2>
            <p>What our clients say about our work</p>
          </SectionTitle>
          
          <TestimonialSlider />
        </Container>
      </Section>
    </>
  );
};

const SearchSection = styled.section`
  padding: 40px 0;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

const Section = styled.section`
  padding: 80px 0;
  background: ${props => props.dark ? props.theme.colors.dark : props.theme.colors.light};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  h2 {
    font-size: 2.5rem;
    color: ${props => props.light ? '#fff' : props.theme.colors.dark};
    margin-bottom: 15px;
  }
  
  p {
    font-size: 1.1rem;
    color: ${props => props.light ? 'rgba(255,255,255,0.8)' : props.theme.colors.textLight};
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
`;

const Center = styled.div`
  text-align: center;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 12px 30px;
  background: ${props => {
    if (props.primary) return props.theme.colors.primary;
    if (props.variant === 'outline') return 'transparent';
    return props.theme.colors.secondary;
  }};
  color: ${props => {
    if (props.variant === 'outline') return props.theme.colors.dark;
    return '#fff';
  }};
  border: 2px solid ${props => {
    if (props.variant === 'outline') return props.theme.colors.dark;
    return 'transparent';
  }};
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const CTASection = styled(Section)`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: white;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
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
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Home;
