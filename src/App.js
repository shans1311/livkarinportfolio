import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import HomeSection from './components/sections/HomeSection';
import ArbeidSection from './components/sections/ArbeidSection';
import KontaktSection from './components/sections/KontaktSection';
import OmMegSection from './components/sections/OmMegSection';
import Grunderstien from './components/subPages/GrunderStien';
import Korky from './components/subPages/Korky';
import Samspill from './components/subPages/Samspill';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const isHomePage = currentPage === 'home';

  // Scroll to top when currentPage changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

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
