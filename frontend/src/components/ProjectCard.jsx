import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <Card
      as={Link}
      to={`/projects/${project._id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {project.images && project.images.length > 0 && (
        <ImageContainer>
          <Image src={project.images[0]} alt={project.title} />
          {project.featured && <FeaturedBadge>Featured</FeaturedBadge>}
        </ImageContainer>
      )}
      <Content>
        <Category>{project.category}</Category>
        <Title>{project.title}</Title>
        <Description>{project.description?.substring(0, 100)}...</Description>
        {project.location && (
          <Location>📍 {project.location}</Location>
        )}
      </Content>
    </Card>
  );
};

const Card = styled(motion.div)`
  background: white;
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.lg};
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.theme.gradients.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    box-shadow: ${props => props.theme.shadows['2xl']};
    transform: translateY(-8px);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const FeaturedBadge = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background: ${props => props.theme.gradients.primary};
  color: white;
  padding: 6px 16px;
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: ${props => props.theme.shadows.md};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% {
      box-shadow: ${props => props.theme.shadows.md};
    }
    50% {
      box-shadow: ${props => props.theme.shadows.colored};
    }
  }
`;

const Content = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Category = styled.span`
  display: inline-block;
  padding: 6px 14px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: capitalize;
  width: fit-content;
  margin-bottom: 12px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;

  ${Card}:hover & {
    background: ${props => props.theme.gradients.primary};
    color: white;
    border-color: transparent;
  }
`;

const Title = styled.h3`
  font-size: 1.3rem;
  color: ${props => props.theme.colors.dark};
  margin: 0 0 10px 0;
  font-weight: 600;
`;

const Description = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 15px 0;
  flex: 1;
`;

const Location = styled.div`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;
  margin-top: auto;
`;

export default ProjectCard;
