import React from 'react';
import '../Section.css';
import "./KontaktSection.css"
import "../subPages/Korky.css"
import { FaLinkedin } from "react-icons/fa6";

const KontaktSection = () => {
  return (
    <section id="kontakt" className="kontakt-section">
      <div className="arbeid-content">
        
      <section className="moodboard-section" style={{marginTop: "0rem"}}>
        <div className="moodboard-title">
          <h1>Kontakt</h1>
        </div>
      </section>

      <section className="new-section">
      <div className="new-section-content">
        <div className="paragraph-row">
          <p>liv.livaks@hotmail.com</p>
        </div>
        <div className="paragraph-row">
          <p>+47 47949039</p>
        </div>
        <div className="linkedin-row">
          <a 
            href="https://www.linkedin.com/in/liv-karin-akselsen-15232a201/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <FaLinkedin />

          </a>
        </div>
      </div>
    </section>

      </div>
      <div className="section_footer">
        <hr />
      </div>
    </section>
  );
};

export default KontaktSection;
