import React from 'react';
import './Header.css';
import logo from '../../icons/NetflixLogo.png';
import ProfileIMG from '../../icons/ProfileIMG.png';

export default () => {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="Logo netflix" />
        <img src={ProfileIMG} alt="Logo netflix" />
      </nav>
    </header>
  );
};
