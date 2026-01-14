import React from 'react';

const cardStyle = {
  background: '#fff',
  borderRadius: 8,
  padding: 20,
  boxShadow: '0 8px 20px rgba(0,0,0,0.06)'
};

const ProjectCard = ({ project }) => (
  <div style={cardStyle}>
    <h3 style={{ margin: '0 0 8px' }}>{project?.title || 'Project Title'}</h3>
    <p style={{ margin: 0, opacity: 0.8 }}>
      {project?.description || 'Project description will appear here.'}
    </p>
  </div>
);

export default ProjectCard;
