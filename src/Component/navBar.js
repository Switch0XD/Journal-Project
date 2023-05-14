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

      <img className='logo' src={logo} alt="" />

    </nav>
  );
}

export default NavBar;
