import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, link }) => (
  <div style={{ background: '#fff', borderRadius: 8, padding: 20, boxShadow: '0 8px 20px rgba(0,0,0,0.06)' }}>
    <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
    <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
    <p style={{ margin: '0 0 12px', opacity: 0.8 }}>{description}</p>
    <Link to={link}>Learn more →</Link>
  </div>
);

export default ServiceCard;
