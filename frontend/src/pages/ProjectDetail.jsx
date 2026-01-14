import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { FaHeart, FaCalendarCheck, FaMapMarkerAlt, FaRuler, FaClock } from 'react-icons/fa';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [project, setProject] = useState(null);
  const [isFavorited, setIsFavorited] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProject();
    if (isAuthenticated) {
      checkFavorite();
    }
  }, [id, isAuthenticated]);

  const fetchProject = async () => {
    try {
      const response = await axios.get(`/projects/${id}`);
      setProject(response.data);
    } catch (err) {
      console.error('Error fetching project:', err);
    } finally {
      setLoading(false);
    }
  };

  const checkFavorite = async () => {
    try {
      const response = await axios.get(`/favorites/check/${id}`);
      setIsFavorited(response.data.isFavorited);
    } catch (err) {
      console.error('Error checking favorite:', err);
    }
  };

  const toggleFavorite = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    try {
      if (isFavorited) {
        await axios.delete(`/favorites/${id}`);
        setIsFavorited(false);
      } else {
        await axios.post(`/favorites/${id}`);
        setIsFavorited(true);
      }
    } catch (err) {
      console.error('Error toggling favorite:', err);
    }
  };

  if (loading) {
    return <Container><LoadingMessage>Loading...</LoadingMessage></Container>;
  }

  if (!project) {
    return <Container><ErrorMessage>Project not found</ErrorMessage></Container>;
  }

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
      
      <ProjectHeader>
        <TitleSection>
          <h1>{project.title}</h1>
          <CategoryBadge>{project.category}</CategoryBadge>
        </TitleSection>
        {isAuthenticated && (
          <FavoriteButton onClick={toggleFavorite} favorited={isFavorited}>
            <FaHeart /> {isFavorited ? 'Favorited' : 'Add to Favorites'}
          </FavoriteButton>
        )}
      </ProjectHeader>

      {project.images && project.images.length > 0 && (
        <ImageGallery>
          {project.images.map((image, index) => (
            <GalleryImage key={index} src={image} alt={`${project.title} - Image ${index + 1}`} />
          ))}
        </ImageGallery>
      )}

      <ProjectInfo>
        <MainContent>
          <Section>
            <h2>About This Project</h2>
            <p>{project.description}</p>
          </Section>

          {project.services && project.services.length > 0 && (
            <Section>
              <h2>Services Used</h2>
              <ServicesList>
                {project.services.map((service, index) => (
                  <ServiceTag key={index}>{service}</ServiceTag>
                ))}
              </ServicesList>
            </Section>
          )}
        </MainContent>

        <Sidebar>
          <InfoCard>
            <h3>Project Details</h3>
            {project.location && (
              <InfoItem>
                <FaMapMarkerAlt /> {project.location}
              </InfoItem>
            )}
            {project.area && (
              <InfoItem>
                <FaRuler /> {project.area}
              </InfoItem>
            )}
            {project.completionDate && (
              <InfoItem>
                <FaClock /> Completed: {new Date(project.completionDate).toLocaleDateString()}
              </InfoItem>
            )}
          </InfoCard>

          <BookingCard>
            <h3>Book a Consultation</h3>
            <p>Interested in a similar project?</p>
            <BookButton as={Link} to="/booking">
              <FaCalendarCheck /> Book Now
            </BookButton>
          </BookingCard>
        </Sidebar>
      </ProjectInfo>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.light};
  padding: 40px 20px;
`;

const BackButton = styled.button`
  max-width: 1200px;
  margin: 0 auto 30px;
  display: block;
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 1rem;
  cursor: pointer;
  padding: 10px 0;
`;

const ProjectHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TitleSection = styled.div`
  flex: 1;

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.dark};
    margin-bottom: 15px;
  }
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 8px 16px;
  background: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: capitalize;
`;

const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: ${props => props.favorited ? '#fee2e2' : 'white'};
  color: ${props => props.favorited ? '#dc2626' : props.theme.colors.dark};
  border: 2px solid ${props => props.favorited ? '#dc2626' : '#e5e7eb'};
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.favorited ? '#dc2626' : props.theme.colors.primary};
    color: white;
    border-color: ${props => props.favorited ? '#dc2626' : props.theme.colors.primary};
  }
`;

const ImageGallery = styled.div`
  max-width: 1200px;
  margin: 0 auto 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const ProjectInfo = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Section = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  h2 {
    color: ${props => props.theme.colors.dark};
    margin-bottom: 15px;
  }

  p {
    color: ${props => props.theme.colors.textLight};
    line-height: 1.6;
  }
`;

const ServicesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ServiceTag = styled.span`
  padding: 8px 16px;
  background: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.dark};
  border-radius: 20px;
  font-size: 0.9rem;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  h3 {
    color: ${props => props.theme.colors.dark};
    margin-bottom: 20px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 0;
  color: ${props => props.theme.colors.textLight};
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const BookingCard = styled(InfoCard)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;

  h3 {
    color: white;
  }

  p {
    margin-bottom: 20px;
    opacity: 0.9;
  }
`;

const BookButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background: white;
  color: ${props => props.theme.colors.primary};
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textLight};
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 1.2rem;
  color: #dc2626;
`;

export default ProjectDetail;
