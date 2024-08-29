import React from 'react';
import './Korky.css'; // Import CSS for styling
import korkyImage from '../../public/korky1.png'; // Replace with the actual image path
import image2 from '../../public/korky2.png'; // Replace with the actual image path
import image3 from '../../public/korky3.png'; // Replace with the actual image path

import newImage1 from '../../public/korky4.png'; // Replace with the actual image path for the new section
import newImage2 from '../../public/korky5.png'; // Replace with the actual image path for the new section
import newImage3 from '../../public/korky6.png'; // Replace with the actual image path for the new section

import section3photo1 from '../../public/korky7.png'; // Replace with the actual image path for the new section
import section3photo2 from '../../public/korky8.png'; // Replace with the actual image path for the new section
import section3photo3 from '../../public/korky9.png'; // Replace with the actual image path for the new section

import section4photo1 from '../../public/korky10.png'; // Replace with the actual image path for the new section
import section4photo2 from '../../public/korky11.png'; // Replace with the actual image path for the new section
import section4photo3 from '../../public/korky12.png'; // Replace with the actual image path for the new section

import leftUpperImage from '../../public/korky13.png'; // Replace with actual path
import rightUpperImage from '../../public/korky14.png'; // Replace with actual path

import section5photo1 from '../../public/korky15.png'; // Replace with the actual image path for the new section
import section5photo2 from '../../public/korky16.png'; // Replace with the actual image path for the new section
import section5photo3 from '../../public/korky17.png'; // Replace with the actual image path for the new section









import '../Section.css';

const Korky = () => {
  return (
    <div className="korky-container">
      
      {/* First Section */}
      <section className="korky-section">
        <div className="korky-content">
          {/* Left Subsection */}
          <div className="korky-text-left">
            <h2>Korky</h2>
            <div className="korky-line"></div>
            <p>
              Under emnet prototyping, fikk vi i oppgave å lage en visuell identitet og prototype til et innovativt interiørobjekt. Nedenfor vil jeg lede deg gjennom oppdraget og mitt interiørobjekt “Korky”.
            </p>
          </div>
          {/* Right Subsection */}
          <div className="korky-image-right">
            <img src={korkyImage} alt="Korky Project" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="korky-section">
        <div className="korky-content">
          {/* Left Subsection */}
          <div className="korky-text-right">
            <h2>Innovative Design</h2>
            <p>
              I denne delen vil jeg vise deg to varianter av det innovative designet som ble utviklet for "Korky". Hver variant har sine unike egenskaper og visuelle uttrykk.
            </p>
          </div>
          {/* Right Subsection with Two Images */}
          <div className="korky-images-right">
            <div className="korky-image-row">
              <div className="korky-image-container">
                <img src={image2} alt="Korky Variant 1" />
                <p className="korky-image-text">Skisser gjennom krysskobling av ulike interiørobjekter</p>
              </div>
              <div className="korky-image-container">
                <img src={image3} alt="Korky Variant 2" />
                <p className="korky-image-text">Skisser av korketrekker og flaskeåpnere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="korky-section">
        <div className="korky-content">
          {/* Left Subsection with Images */}
          <div className="korky-images-left">
            <div className="korky-image-container-section3">
              <img src={newImage1} alt="New Image 1" />
              <p className="korky-image-text-section3">Lowfi prototype av alluminumsfolje med både korketrekker og flaskeåpner.</p>
            </div>
            <div className="korky-image-container-section3">
              <img src={newImage2} alt="New Image 2" />
              <p className="korky-image-text-section3">Tanker rundt korkeåpneren</p>
            </div>
          </div>
          {/* Right Subsection with Centered Text */}
          <div className="korky-text-right">
            <h2>Lowfi-prototype og brukertesting</h2>
            <p>
              Under testingen av prototypen, fikk jeg målgruppen til å kjenne på størrelsen og late som den blir brukt som vinåpner. I tillegg stilte jeg spørsmål rundt hvilke funksjon den skal ha.
            </p>
            <p>
              Vi kom fram til at grisen må være lenger i lengden for at den skal være komfortabel å holde og åpne med flasker med. Vi kom fram til at produktet burde fokusere på å være interiørpynt på kjøkkenbenken, i stedet for gjemt i kjøkkenbenken. Dette vil jeg ta med videre til dens visuelle identitet og endelig prototype.
            </p>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="korky-section">
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

      <section className="moodboard-section">
        <div className="moodboard-title">
          <h1>Moodboard</h1>
        </div>
      </section>

      <section className="large-image-section">
        <div className="large-image-wrapper">
          <img src={newImage3} alt="Large Image" className="large-image" />
          <div className="image-caption">
            <p>natur leken stilig</p>
          </div>
        </div>
      </section>

      <section className="three-part-section">
        <div className="three-part-content">
          
          {/* Left Subsection */}
          <div className="three-part-left">
            <h3>Navn og logo</h3>
            <p>
            Da jeg begynte å tenke ut navn, tok jeg utgangspunkt i dyr, vin og kork. I tillegg ville jeg at navnet skulle gjenspeile verdiordene mine: Natur, leken og stilig. Til slutt etter brainstorming og testing av navn, kom jeg til navnet “Korky”, som er en kombinasjon av ordet cork/kork og det engelske ordet dorky.            
            </p>
            <p>
            Når det kommer til logo, endte jeg opp med den retro fonten “Parkside”. Jeg ville legge til en spiral som følger Y-en som er inspirert av spiralen i en korketrekker, slik at logoen blir assosiert med produktet.
            </p>
          </div>

          {/* Middle Subsection with Horizontal Line */}
          <div className="three-part-middle">
            <hr className="vertical-line" />
          </div>

          {/* Right Subsection with Two Images */}
          <div className="three-part-right">
            <div className="right-image-row">
              <div className="right-image-container">
                <img src={section3photo1} alt="Right Image 1" />
              </div>
              <div className="right-image-container">
                <img src={section3photo2} alt="Right Image 2" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="three-part-section reversed">
        <div className="three-part-content">
          
          {/* Left Subsection with Image */}
          <div className="three-part-left-image">
            <div className="image-container">
              <img src={section3photo3} alt="Left Image" />
            </div>
          </div>

          {/* Middle Subsection with Horizontal Line */}
          <div className="three-part-middle">
            <hr className="vertical-line" />
          </div>

          {/* Right Subsection with Text */}
          <div className="three-part-left">
            <h3>Fargeutvalg
</h3>
            <p>
            Jeg tok i bruk moodboardet som inspirasjon til fargeutvalget. I tillegg ble jeg inspirtert av farger i naturen, som grønn, blå og rosa. Som bakgrunnsfarge ønsket jeg en lys beige farge, slik at alle de andre fargene kommer tydelig fram (lys/mørk kontrast).             </p>
          </div>

        </div>
      </section>


      <section className="moodboard-section">
        <div className="moodboard-title">
          <h1>Visuell Identitet</h1>
        </div>
      </section>

      <section className="centered-image-section">
        <div className="centered-image-wrapper">
          <img src={section4photo1} alt="Centered Image" className="centered-image" />
        </div>
      </section>

      <section className="moodboard-section">
        <div className="moodboard-title">
          <h1>Følelsesreiser</h1>
        </div>
      </section>

      <section className="offset-left-section">
        <div className="offset-left-image-wrapper">
          <img src={section4photo2} alt="Offset Left Image" className="offset-image" />
        </div>
      </section>

      {/* Offset Right Image Section */}
      <section className="offset-right-section">
        <div className="offset-right-image-wrapper">
          <img src={section4photo3} alt="Offset Right Image" className="offset-image" />
        </div>
      </section>

      <section className="big-section">
        <div className="big-section-content">
          
          {/* Left Side */}
          <div className="left-side">
            {/* Left Upper */}
            <div className="left-upper">
              <h3>Skisser</h3>
              <p>
              Jeg begynte å skisse plakaten i små bankkort formater. Dette er for å passe på at jeg ikke henger meg opp i små detaljer, men heller ser på komposisjon og proposjoner.              </p>
            </div>

            {/* Left Lower */}
            <div className="left-lower">
              <img src={leftUpperImage} alt="Left Lower" />
            </div>
          </div>

          {/* Right Side */}
          <div className="right-side">
            {/* Right Upper */}
            <div className="right-upper">
              <img src={rightUpperImage} alt="Right Upper" />
            </div>

            {/* Right Lower */}
            <div className="right-lower">
              <h3>Iterering</h3>
              <p>
              Jeg fikk god innspill om å sette inn et bilde av en ekte flaske, slik at den passer mer inn med den ektre grisen. I tillegg ble jeg anbefalt om å gjøre den tynne skriften der det står “ut korken” like tykk som “nøff”. De tilbakemeldingene var ikke så tydelig for meg før jeg faktisk gjorde endringene. Men jeg så en betydelig forbedring etter itereringen.               </p>
            </div>
          </div>

        </div>
      </section>

      <section className="moodboard-section">
        <div className="moodboard-title">
          <h1>Og slik ble plakaten!</h1>
        </div>
      </section>

      <section className="centered-image-section">
        <div className="centered-image-wrapper">
          <img src={section5photo1} alt="Centered Image" className="centered-image"/>
        </div>
      </section>

      <section className="moodboard-section">
        <div className="moodboard-title">
          <h1>Bilder av prosessen av prototypen</h1>
        </div>
      </section>

      <section className="centered-image-section">
        <div className="centered-image-wrapper">
          <img src={section5photo2} alt="Centered Image" className="centered-image"/>
        </div>
      </section>


      <section className="moodboard-section">
        <div className="moodboard-title">
          <h1>Ta-da!</h1>
        </div>
      </section>

      <section className="centered-image-section">
        <div className="centered-image-wrapper">
          <img src={section5photo3} alt="Centered Image" className="centered-image"/>
        </div>
      </section>


      


    </div>
  );
};

export default Korky;
