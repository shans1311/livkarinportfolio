import React from 'react';
import '../Section.css';
import './OmMegSection.css';  // Ensure this file is correctly linked
import profileImage from "../../public/ommeg1.png"; // Update with the correct path to your image
import image1 from "../../public/image1.png"; // Placeholder image paths
import image2 from "../../public/image2.png";
import image3 from "../../public/image3.png";
import image4 from "../../public/image4.png";
import image5 from "../../public/image5.png";
import image6 from "../../public/image6.png";

const OmMegSection = () => {
  return (
    <section id="om-meg" className="ommeg-section">
      <div className="ommeg-content">
        {/* Left Section */}
        <div className="ommeg-left">
          {/* Upper Left Section */}
          <div className="ommeg-upper-left">
            <p className="ommeg-title">Dette er meg!</p>
            <p className="ommeg-paragraph">
              Mitt navn er Liv Karin Inoc Akselsen. Jeg er en 22 år gammel jente som går 2. året på Bachelor i Tjenestedesign på Høyskolen Kristiania. Etter et år på BI, fant jeg ut at jeg ville kunne kombinere det analytiske med det kreative. Dermed begynte jeg å utforske design fagfeltet. Fortsatt var det litt tilfeldig at jeg endte opp med tjenestedesign. Men den tilfeldigheten har ført meg til noe jeg virkelig elsker!
            </p>
          </div>
          {/* Lower Left Section */}
          <div className="ommeg-lower-left">
            <p className="ommeg-paragraph">
              Når noen spør meg hva tjenestedesign er, sliter jeg fortsatt med å sette ord på det. Jeg kan begynne å forklare en tjeneste og bakprosesser i å designe det, eller jeg kan bruke fancy ord som helhetlig tjenester med fokus på brukerbehov, prototyping og brukertesting.
              Men ingen av de ordene gir kontekst i det jeg mener er det viktigste med tjenestedesign: det medmenneskelige. Samarbeid i tvers av fagfelt og lytte til andre, er det jeg mener vil hjelpe med å gjøre tjenester og systemer enda bedre enn gårsdagen.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="ommeg-right">
          <img src={profileImage} alt="Profile" className="ommeg-image" />
          <p className="image-caption">Fysisk prototyping på skolen :)</p>
        </div>
      </div>

      {/* New Content Section */}
      <div className="ommeg-additional-content">
        <p className="ommeg-additional-title">Dette er også meg!</p>
        <div className="ommeg-gallery">
          <div className="ommeg-gallery-row">
            <img src={image1} alt="Gallery 1" className="ommeg-gallery-image" />
            <img src={image2} alt="Gallery 2" className="ommeg-gallery-image" />
            <img src={image3} alt="Gallery 3" className="ommeg-gallery-image" />
          </div>
          <p className="ommeg-gallery-paragraph">
          kunst, bøker, gaming, reising, jazz, alternativ musikk, you name it!
          </p>
          <div className="ommeg-gallery-row">
            <img src={image4} alt="Gallery 4" className="ommeg-gallery-image" />
            <img src={image5} alt="Gallery 5" className="ommeg-gallery-image" />
            <img src={image6} alt="Gallery 6" className="ommeg-gallery-image" />
          </div>
        </div>
      </div>

      <div className="section_footer">
        <hr />
        <p>Kontakt</p>
      </div>
    </section>
  );
};

export default OmMegSection;
