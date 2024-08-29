import React from 'react';
import '../Section.css';
import "./HomeSection.css"
import grunderstien from "../../public/grunderstien.png"; 


const HomeSection = () => {
  return (
    <section id="home" className="section">
      <div className="home-content">
        <div className="home-upper">
          <p className="home-title">Liv Karin Inoc Akselsen</p>
          <div className="home-underline"></div>
        </div>
        <div className="home-lower">
        <p className="home-text">Student med en stor lidenskap for helhetlig og innovativ design. For øyeblikket tar jeg en Bachelor i Tjenestedesign.</p>
        </div>
      </div>
      <div className="section_footer">
        <hr />
        <p>Mitt Arbeid</p>
      </div>
    </section>
  );
};

export default HomeSection;
