import React from 'react';
import './ArbeidSection.css';
import grunderstien from "../../public/grunderstien.png";
import korky from "../../public/korky.png";
import samspill from "../../public/samspill.png";

const projects = [
  {
    id: 1,
    section: "Arbeidsprosjekter",
    title: "Innovasjon og entreprenørskap",
    subtitle: "Gründerstien av NAV",
    description: "Et gründertilbud for personer med innvandrerbakgrunn som en del av delprogram sysselsetting. Av NAV Bjerke og NAV Søndre Nordstrand.",
    image: grunderstien,
    path: 'grunderstien'
  },
];

const studieoppdrag = [
  {
    id: 2,
    title: "Visuell identitet og fysisk prototyping",
    subtitle: "Korky",
    description: "I emnet “prototyping” fikk jeg i oppgave å lage et visuell identitet og en fysisk prototype til et innovativt interiør objekt.",
    image: korky,
    path: 'korky'
  },
  {
    id: 3,
    title: "Interaksjonsdesign - designe en app",
    subtitle: "Samspill",
    description: "I emnet “Interaksjonsdesign” fikk jeg i oppgave å designe, brukerteste og prototype en app på Figma.",
    image: samspill,
    path: 'samspill'
  },
];

const ArbeidSection = ({ setCurrentPage }) => {
  return (
    <section id="arbeid" className="arbeid-section">
      <div className="arbeid-content">
        {projects.map((project) => (
          <div key={project.id} className="arbeid-upper">
            <p className="arbeid-title">{project.section}</p>
            <div className="arbeid-project">
              <div className="project-left">
                <img src={project.image} alt={`${project.subtitle} project image`} className="project-image" />
              </div>
              <div className="project-right">
                <div className="text-content">
                  <p className="text-layer-one">{project.title}</p>
                  <p className="text-layer-two">{project.subtitle}</p>
                  <p className="text-layer-three">{project.description}</p>
                </div>
                <div className="button-container">
                  <button className="project-button" onClick={() => setCurrentPage(project.path)}>
                    Les mer
                    <span className="button-arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="arbeid-upper">
          <p className="arbeid-title">Studieoppdrag</p>
          <div className="studieoppdrag-content">
            {studieoppdrag.map((project) => (
              <div key={project.id} className="studieoppdrag-item">
                <div className="project-left">
                  <img src={project.image} alt={`${project.subtitle} project image`} className="project-image" />
                </div>
                <div className="project-right">
                  <div className="text-content">
                    <p className="text-layer-one">{project.title}</p>
                    <p className="text-layer-two">{project.subtitle}</p>
                    <p className="text-layer-three">{project.description}</p>
                  </div>
                  <div className="button-container">
                    <button className="project-button" onClick={() => setCurrentPage(project.path)}>
                      Les mer
                      <span className="button-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section_footer">
        <hr />
        <p>Om Meg</p>
      </div>
    </section>
  );
};

export default ArbeidSection;
