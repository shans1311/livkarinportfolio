import React from 'react';
import './GrunderStien.css'; // Import CSS for styling
import grunderstien from '../../public/grunderstien.png'; // Replace with the actual image path
import nav from '../../public/nav.png'; // Replace with the actual image path
import exampleImage from '../../public/grunderstien.png'; // Add the path to your new image
import image1 from '../../public/grunder1.png'; // Replace with actual image paths
import image2 from '../../public/grunder2.png';
import image3 from '../../public/grunder3.png';
import image4 from '../../public/grunder4.png';
import image5 from '../../public/grunder5.png';


const Grunderstien = () => {
  return (
    <div className="grunderstien-container">

      <section className="grunderstien-subsection">
        <section className="grunderstien-row">
          <div className="grunderstien-text-left">
            <p className="vertical-text">Gründerstien av NAV</p>
          </div>
          <div className="grunderstien-line"></div>
          <div className="grunderstien-text-center">
            <p>
              Under mitt andre semester på studiet, var jeg så heldig og fikk være med på et spennende prosjekt på deltid ved siden av studiet. Dette var mitt første møte å bruke tjenestedesign som metodikk i arbeidslivet. Nedenfor vil jeg lede deg gjennom prosjektet.
            </p>
          </div>
          <div className="grunderstien-image-container">
            <div className="grunderstien-image">
              <img src={grunderstien} alt="Gründerstien Project Example" />
              <div className="grunderstien-small-image">
                <img src={nav} alt="Smaller Image" />
              </div>
            </div>
          </div>
        </section>
        <hr className="grunderstien-hr" />
      </section>

      <section className="grunderstien-new-subsection">
        <div className="grunderstien-upper">
          <h2>Gründerstien er...</h2>
          <p>
            et gründertilbud til personer med innvandrerbakgrunn som står utenfor arbeidslivet, har lav formalkompetanse og trenger et parallelt løp med norskopplæring. For å få til dette vil prosjektet lage et gründermiljø der man kan søke hjelp, skape nettverk og få kompetanse til å starte noe eget.
          </p>
        </div>
        <div className="grunderstien-lower">
          <h2>Min rolle</h2>
          <p>
            Jeg har fått deltatt i startfasen til prosjektet. Min hovedrolle som prosjektmedarbeider, har vært å brukerteste gjennom å fasilitere workshops på infomøter og visuell- og muntlig kommunikasjon.
          </p>
        </div>
        <hr className="grunderstien-hr" />

      </section>

      <section className="grunderstien-bordered-section">
        <div className="grunderstien-upper">
          <p className="grunderstien-bordertitle">Fra en “perfekt” plan til...</p>
        </div>
        <div className="grunderstien-lower">
          <p className="squiggly-underline">En flytende test pilot</p>
        </div>
        
      </section>

      {/* New Centered Image Section */}
      <section className="grunderstien-centered-image-section">
        <div className="grunderstien-centered-image">
          <img src={exampleImage} alt="Example Visual" />
        </div>
        <p className="grunderstien-large-title">Dette er vår reise visualisert!</p>
        <hr className="grunderstien-hr" />
      </section>

      <section className="grunderstien-timeline-section">
        <div className="timeline-line"></div>

        <div className="timeline-content">
          <div className="timeline-item">
            <div className="timeline-text-left">
              <h3>mars 2024</h3>
              <p>Det hele startet ved å komme seg ut i nærmiljø for å nå ut til målgruppen. Dette ble gjort gjennom sosiale medier, plakater i nærområdet og kontakt med lokale aktører. Plakatene og sosiale medier ledet til en landingsside for mer informasjon og kontaktinformasjon. </p>
            </div>
            <div className="timeline-image-right">
              <div className="image-grid">
                <img src={image1} alt="Description of Image 1" />
                <img src={image2} alt="Description of Image 2" />
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-image-left">
            <img src={image3} alt="Description of Image 3" />

            </div>
            <div className="timeline-text-right">
              <h3>april 2024</h3>
              <p>Vi savnet å møte målgruppen. Dermed kom vi på en plan om å holde informasjonsmøter om det framtidige gründertilbudet. For å holde informasjonsmøtene tok vi kontakt med frivillige aktører i nærmiljøet for lokaler og hang opp plakater med informasjon rundt dette.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-text-left">
              <h3>mai og juni 2024</h3>
              <h4 style={{marginTop: "-2rem", marginBottom: "-1rem"}}>Gjensidig informasjon</h4>
              <p>Vi ønsket IKKE å kun dele informasjon om programmet på informasjonsmøtet. Vi ville også bli kjent med målgruppen og deres behov. Dermed fikk jeg i oppgave å finne ut av hvordan vi kan oppnå dette. Jeg begynte å tenke:...</p>
              <p className='timeline-p-extra'>“Hvordan kan vi få deltagerne til å dele deres tanker rundt deres gründeridé og det framtidige programmet?”</p>
              <p style={{fontSize: "16px"}}>Etter litt brainstorming, kom jeg fram til en idé om et workshopsegment, der deltagerne har gruppesamtaler. Vi som fasiliteter, kan sitte spredt rundt og observere.</p>
              <p style={{fontSize: "16px"}}>For å la tanke strømmene flyte, hadde jeg også lyst til å gi muligheten til å ha noe visuelt og interaktivt foran dem. Dermed lagde vi et ark med spørsmål rundt produktet eller tjenesten de ønsker å selge. </p>
              <br>
              </br>
              <p style={{fontSize: "16px"}}>Planen var satt! Under workshopene skulle jeg lese opp spørsmålene én etter én, deltagerne skulle diskutere ivrig og skrive og tegne ned på arket. Wanja og Niels skulle observere og lytte til deres idéer og språkferdigheter.</p>
            </div>
            <div className="timeline-image-right">
              <div className="image-grid">
                <img src={image4} alt="Description of Image 1" />
                <img src={image5} alt="Description of Image 1" />

              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-text-left">
              <h4 style={{marginTop: "-5rem", marginBottom: "-1rem"}}>Gjensidig informasjon</h4>
              <p style={{marginTop: ""}}>Dette gikk derimot ikke etter planen. Deltagerne var ivrige om dele deres idéer og tanker med OSS fra Gründerstien. De ville høre om deres idé var mulig og hva vi kan tilby for å gjøre den en realitet. 
På lik side hadde vi godt av å høre på deres livshistorier og hvor de kommer fra. Flere er belastede og har andre ting i livet som man må ta hensyn til. På den måten får vi med oss deres behov og hva vi kan ha med videre til programmet.</p>
              <p><span style={{fontWeight: "bold"}}>Vi skjønte hva som var aller viktigst: </span> åpne samtaler der vi er involvert. Ikke rigide planer med fastsatte spørsmål. Vi vil skape et trygt og godt miljø der deltagernes behov blir møtt. Dermed må vi ha en slags nærhet til deltagerne. Dette tok vi med oss videre på de neste informasjonsmøtene og senere i prosjektet.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="grunderstien-new-section">
      <h2 className="grunderstien-large-title">Våre viktigste lærdommer</h2>
      
      <div>
        <h3 className="grunderstien-subtitle">Å møte menneskene hvor de er</h3>
        <p className="grunderstien-paragraph">
        My child read the word “bussy” on a internet comment, so he shoved his butt in the air and said “look at my bussy.” I asked where he heard that word and he said the first time was a YouTube video with Spider-Man pushing his bum around, saying it was his bussy. I hope you internet people are proud because my child is NINE. Why is this world so cold? 🥲


        </p>
      </div>

      <div>
        <h3 className="grunderstien-subtitle">Å teste fra starten og underveis</h3>
        <p className="grunderstien-paragraph">
        My child read the word “bussy” on a internet comment, so he shoved his butt in the air and said “look at my bussy.” I asked where he heard that word and he said the first time was a YouTube video with Spider-Man pushing his bum around, saying it was his bussy. I hope you internet people are proud because my child is NINE. Why is this world so cold? 🥲

</p>
      </div>

      <div>
        <h3 className="grunderstien-subtitle">Verdien av kontakter og nettverk</h3>
        <p className="grunderstien-paragraph">
        My child read the word “bussy” on a internet comment, so he shoved his butt in the air and said “look at my bussy.” I asked where he heard that word and he said the first time was a YouTube video with Spider-Man pushing his bum around, saying it was his bussy. I hope you internet people are proud because my child is NINE. Why is this world so cold? 🥲

</p>
      </div>
    </section>



      <section className="grunderstien-subsection">
        <hr className="grunderstien-hr" />
      </section>
    </div>
  );
};

export default Grunderstien;
