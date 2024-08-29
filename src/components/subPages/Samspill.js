import React from 'react';
import './Samspill.css'; // Import CSS for styling
import './Korky.css'; // Import CSS for styling
import TextSection from '../TextSection.js'; // Import the new componen
// Import images used in the page
import samspillImage1 from '../../public/samspill1.png'; // Replace with actual image path
import samspillImage2 from '../../public/samspill2.png'; // Replace with actual image path
import samspillImage3 from '../../public/samspill3.png'; // Replace with actual image path
import samspillImage4 from '../../public/samspill4.png'; // Replace with actual image path
import samspillImage5 from '../../public/samspill5.png'; // Replace with actual image path
const Samspill = () => {
  return (
    <div className="samspill-container">
      {/* First Section */}
      <section className="samspill-section">
        <div className="samspill-centered-content">
          <div className="samspill-left">
            <h2>Samspill</h2>
            <div className="samspill-underline"></div>
            <p>
            Under emnet interaksjonsdesign, fikk vi i oppgave å designe, brukerteste og prototype en app. Vi kunne selv velge en hjertesak vi ville skape en app rundt. Jeg valgte å utforske studenters behov.            </p>
          </div>
          <div className="samspill-right">
            <img src={samspillImage1} alt="Samspill Project" />
          </div>
        </div>
      </section>

      <section className="samspill-section">
        <div className="korky-content">
          {/* Left Subsection */}
          <div className="korky-text-left-4">
            <h3>Problemstilling</h3>
          </div>

          {/* Right Subsection */}
          <div className="korky-text-right-4">
            <div className="korky-line-4"></div>
            <div className="korky-text-right-4-content">
              <p>Hvordan kan jeg lage en korketrekker der den skal både være leken i forhold til dens form, men også moden nok til en voksen målgruppe?</p>
            </div>
          </div>
        </div>
      </section>

      <section className="title-section">
        <div className="title-title">
          <p>Konsept</p>
        </div>
      </section>

      <div className="left-right-text-section">
          {/* Upper Section - Offset Left Paragraph */}
          <div className="upper-section">
              <p className="offset-left">              
              En app som tilrettelegger for at studenter får relevant  arbeidserfaring og muligheten til samarbeid i prosjekter med andre studenter. Gjennom appen kan man søke på stillinger av studentprosjekter, eller starte egne. Appen skaper et lavterskel miljø der man kan anvende  kunnskap fra studie til reel erfaring. Appen oppfordrer tverrfaglig arbeid for studenter fra ulike fagfelt.</p>
          </div>
          
          {/* Lower Section - Offset Right Paragraph with Title */}
          <div className="lower-section">
              <h3 className="section-title">Bakgrunn</h3>
              <p className="offset-right">Nå til dags finnes det flere plattformer som gir studenter muligheten til å få studierelevant deltidsjobb eller sommerjobb. Dette er en fin inngang til arbeidslivet. Ofte er disse stillingene reservert til studenter på slutten av studieløpet.
De som ønsker relevant arbeidserfaring tidligere i studieløpet, må som oftest vente til de har innhentet mer kunnskap fra studiet. Etter flere samtaler med medstudenter, har jeg funnet ut at flere ønsker å få anvendt kunnskap til arbeidserfaring, uansett hvor man er i studieløpet. Appen tilrettelegger for dette.</p>
          </div>
      </div>

      <section className="moodboard-section">
        <div className="moodboard-title">
          <h1>Personas</h1>
        </div>
      </section>

      <section className="persona-image-section">
        <div className="persona-image-wrapper">
          <img src={samspillImage2} alt="Centered Image" className="persona-image"/>
        </div>
      </section>

      <section className="persona-image-section">
        <div className="persona-image-wrapper">
          <img src={samspillImage3} alt="Centered Image" className="persona-image"/>
        </div>
      </section>

      <section className="moodboard-section">
        <div className="moodboard-title">
          <h1>Brukerreise</h1>
        </div>
      </section>

      <section className="persona-image-section">
        <div className="persona-image-wrapper">
          <img src={samspillImage4} alt="Centered Image" className="persona-image"/>
        </div>
      </section>

      <section className="moodboard-section">
        <div className="moodboard-title">
          <h1>Moodboard</h1>
        </div>
      </section>

      <section className="large-image-section">
        <div className="large-image-wrapper">
          <img src={samspillImage5} alt="Large Image" className="large-image" />
        </div>
      </section>

      <section className="moodboard-section">
        <div className="moodboard-title">
          <h1>Innhold</h1>
        </div>
      </section>

      <section className="samspill-row">
        {/* New Left Column Section */}
        <div className="left-column">
          <TextSection 
            title="Tittel 1" 
            text="Dette er første tekst i venstre seksjon. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <TextSection 
            title="Tittel 2" 
            text="Dette er andre tekst i venstre seksjon. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          />
        </div>

        {/* New Right Column Section */}
        <div className="right-column">
          <img src={samspillImage3} alt="Sample Image" className="right-column-image" />
        </div>
      </section>



    </div>
  );
};

export default Samspill;
