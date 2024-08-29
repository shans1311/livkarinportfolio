import React from 'react';
import './Samspill.css'; // Import CSS for styling
import './Korky.css'; // Import CSS for styling
import "../sections/ArbeidSection.css"
import TextSection from '../TextSection.js'; // Import the new componen
// Import images used in the page
import samspillImage1 from '../../public/samspill1.png'; // Replace with actual image path
import samspillImage2 from '../../public/samspill2.png'; // Replace with actual image path
import samspillImage3 from '../../public/samspill3.png'; // Replace with actual image path
import samspillImage4 from '../../public/samspill4.png'; // Replace with actual image path
import samspillImage5 from '../../public/samspill5.png'; // Replace with actual image path
import samspillImage6 from '../../public/samspill6.png'; // Replace with actual image path
import samspillImage7 from '../../public/samspill7.png'; // Replace with actual image path
import samspillImage8 from '../../public/samspill8.png'; // Replace with actual image path
import samspillImage9 from '../../public/samspill9.png'; // Replace with actual image path
import samspillImage10 from '../../public/samspill10.png'; // Replace with actual image path





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
          <div className='column-item-wrapper'>
          <TextSection 
            title="Brainstorming" 
            text="For å finne ut av innholdet appen burde ha, var det best å få innspill av andre medstudenter. Jeg og to andre studenter satt oss ned samme for å brainstorme innhold appen kunne ha på post-it lapper."
          />
          <TextSection 
            title="Prioriteringer" 
            text="Til slutt kategoriserte vi ut i fra innhold som må prioriteres. Ting som en hjemside, profil og innlogging og stillingsannonser fant vi ut var det mest grunnleggende for appen. 
            I tillegg diskuterte vi over å ha oversikt over arrangementer som kan tilrettelegge for studenter som er engasjert i prosjekter. Et slikt element er viktig for å kommunisere med og hjelpe studenter, samtidig som det skaper et fysisk miljø og møtested. Derfor antok vi dette som innhold som må prioriteres. Alt annet av innhold, som for eksempel melding og “deling” funksjon kan eventuelt komme senere dersom det er behov for det."
          />
          </div>
          <div className='column-item-wrapper'>
          <img src={samspillImage7} alt="Sample Image" className="column-image" />
            </div>

            <div className='column-item-wrapper'>
              <TextSection title="Brukertesting" text="Ved testingen tok jeg i bruk marvel prototypen og ba testpersonene snakke rundt deres opplevelse. Det kunne bli litt utydelig hva han testpersonene mente, dermed kom jeg på en idé om å la testpersonene tegne og redigere på wireframesa.
Dette var en positiv opplevelse, da testpersonene ble mer ivrige og ville innvolvere seg mer. Dette syntes jeg var en veldig fin måte å få mer konkret forståelse over hvilke endringer jeg burde gjøre. Dette er definitivt en metode jeg vil bruke for å bruker teste i framtiden også." />
            </div>

              <div className='column-section'>
              <div className="column-title">
              <p>Figma</p>
              </div>
              </div>

            <div className='column-item-wrapper'>
              <TextSection title="Figma mid-fi prototype" text=" I første utkast av figmaprototypen, fokuserte jeg på plassering og navigasjon rundt i prototypen. Ettersom dette var mitt første ordentlige møte med figma, bestemte jeg meg for å gjøre det ganske enkelt. Hjemside, innlogging, profil, en side med ulike arrangementer og en side med stillingsannonser. Nå måtte jeg tenke navigasjoner på appen, altså hvordan får jeg brukeren til å skjønne hvor hen er og hvordan hen går videre. 
                Jeg bestemte meg for å sette inn  en horisontalmeny, som består av en menylinje og snarveier nederst på appen. Denne menyen gjør at brukeren har lett tilgang til hjemskjermen og annet som å finne  fram til stillingsannonser og profil, uansett hvor man er i appen."
            />
            </div>

            <div className='column-item-wrapper' style={{width: "30rem"}}>
            <img src={samspillImage10} alt="Sample Image" className="column-image" />

            </div>

            <div className='column-item-wrapper'>
              <TextSection title="Iterasjon" text="Etter testinga fikk jeg tilbakemeldinger over forbedringer jeg  kunne gjøre. Det meste av det handlet om navigasjon. Den første  forbedringen jeg gjorde var å gjøre det tydeligere at man kan trykke på “Hva er Samspill” for å få en forklaring under. Dette løste jeg vet å ha to typer sporinger. Den ene er en linje rett under  setningen og det andre er en pil som går nedover, også kjent som “brødsmuler”. Utenom det gjorde jeg overskriftene tykkere, da jeg fikk tilbakemelding om at den ikke hadde nok kontrast fra bakgrunnen." />
            </div>

        </div>

        {/* New Right Column Section */}
        <div className="right-column">
        <div className='column-item-wrapper'>
          <img src={samspillImage6} alt="Sample Image" className="column-image" />
        </div>

        <div className='column-item-wrapper'>
        <TextSection title="Wireframes" text="Ut i fra innholdet vi diskuterte i grupper, ønsket jeg å lage sammenheng mellom de ulike innholdene og sidene. Dermed begynte jeg å tegne et sitemap. Jeg slet derimot med å få ned innholde på sitemappet. Dermed ville jeg gå rett til wireframes. Jeg skisset wireframes i en skissebok. Dette syntes jeg var lett da jeg fikk tenke mer visuelt og konkret hva sidene skal ha og hvordan det funker sammen. Wireframesa satt jeg inn i appen Marvel, som er en lowfi prototype app som gjør tegnede wireframes interaktive."
        />
        </div>

        <div className='column-item-wrapper' style={{marginTop: "3rem"}}>
        <img src={samspillImage8} alt="Sample Image" className="column-image" />
        </div>

        <div className='column-item-wrapper' style={{width: "40rem", marginTop: "12rem"}}>
        <img src={samspillImage9} alt="Sample Image" className="column-image" />
 
        </div>

        <div className='column-item-wrapper'>
            <TextSection title="Universell utforming" text="I denne  appen ville jeg fokusere på at de som er svaksynte kan bruke appen. Med noen funksjoner på Figma fikk jeg til å teste ut det. Blant annet fikk jeg  sjekket om bakgrunnsfargen og tekstfargen er i samsvar med WCAG 2.1,  som følger krav for universiell utforming.  Jeg måtte gjøre justeringer på fargene slik at det var større kontrast mellom bakgrunn og alt annet." /> 
            </div>

        <div className='column-item-wrapper' style={{marginBottom: "0rem"}}>
        <div className="result-container">
          <button
            className="result-button"
            onClick={() => window.open('https://www.figma.com/design/5xyhmeZ5gV0sOJ3zqb3Fvt/Samspill?node-id=0-1&t=CFqYOkBkWHbDCtJo-1', '_blank')}
          >
            Resultat
            <span className="button-arrow">→</span>
          </button>
        </div>

        </div>

        <div className="end-section" style={{marginBottom: "5rem"}}>
          <div className="end-title">
          <p >Hmm, jeg skulle vært enda mer nysgjerrig!</p>
          </div>
              <p className="offset-right">For å være helt ærlig, så skulle jeg vært enda mer nysgjerrig over brukeren og deres behov. Da jeg først startet det tre ukers lange oppdraget, hang jeg meg opp i design og appens visuelle identitet, kanskje fordi det hang igjen etter forrige oppdrag. Hadde jeg prototypet appen på nytt, ville jeg brukt mer tid på enda flere brukertester og da spesielt underveis av mid-fi prototypen. </p>
          </div>

        </div>
      </section>



    </div>
  );
};

export default Samspill;
