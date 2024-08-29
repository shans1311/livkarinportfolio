// TextSection.js
import React from 'react';
import './TextSection.css'; // Import CSS for styling

const TextSection = ({ title, text }) => {
  return (
    <div className="text-section">
      <p className="text-section-title">{title}</p>
      <p className="text-section-paragraph">{text}</p>
    </div>
  );
};

export default TextSection;
