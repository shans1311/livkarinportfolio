import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HomeSection from './components/sections/HomeSection';
import ArbeidSection from './components/sections/ArbeidSection';
import KontaktSection from './components/sections/KontaktSection';
import OmMegSection from './components/sections/OmMegSection';
import Grunderstien from './components/subPages/GrunderStien'; // Adjust path as needed
import Korky from './components/subPages/Korky'; // Adjust path as needed
import Samspill from './components/subPages/Samspill'; // Adjust path as needed
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const isHomePage = currentPage === 'home';

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HomeSection />
            <ArbeidSection setCurrentPage={setCurrentPage} />
            <OmMegSection />
            <KontaktSection />
          </>
        );
      case 'grunderstien':
        return <Grunderstien />;
      case 'korky':
        return <Korky />;
      case 'samspill':
        return <Samspill />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="App">
      <NavBar setCurrentPage={setCurrentPage} isHomePage={isHomePage} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
