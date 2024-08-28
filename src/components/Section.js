import React from 'react';
import './Section.css';

const Section = ({ id, nextSection }) => (
  <section id={id} className="section">
    <div className="section_footer">
      <hr />
      <p>{nextSection}</p>
    </div>
  </section>
);

export default Section;
