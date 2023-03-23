import React from 'react';
import { useState } from 'react';
import '../Styles/navBar.css';
import logo from '../Images/logo512.png';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <button className="menu-icon" onClick={handleMenuClick}>
        {showMenu ? 'Close' : 'Menu'}
      </button>
      <ul className={`menu ${showMenu ? 'show' : ''}`}>

      </ul>
    </nav>
  );
}

export default NavBar;
