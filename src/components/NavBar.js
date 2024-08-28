import React from 'react';
import './NavBar.css';

const NavBar = ({ setCurrentPage, isHomePage }) => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <a href="/" onClick={() => setCurrentPage('home')}>Liv Karin Inoc Akselsen</a>
      </div>
      <nav className={`navbar__links ${isHomePage ? '' : 'hidden'}`}>
        <a href="#arbeid">Arbeid</a>
        <a href="#om-meg">Om Meg</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
    </header>
  );
};

export default NavBar;
