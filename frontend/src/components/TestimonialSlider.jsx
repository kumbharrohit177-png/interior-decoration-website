import React from 'react';

const TestimonialSlider = () => {
  const box = {
    background: '#fff',
    borderRadius: 8,
    padding: 20,
    boxShadow: '0 8px 20px rgba(0,0,0,0.06)'
  };

  return (
    <div style={box}>
      <strong>Testimonials</strong>
      <p style={{ margin: 0, opacity: 0.8 }}>Testimonials will appear here.</p>
    </div>
  );
};

export default TestimonialSlider;
