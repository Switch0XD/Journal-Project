import React from 'react';
import { useState } from 'react';
import './Styles/navBar.css';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">VIT</div>
      <div className="navbar-menu">
        <div className="navbar-menu-item" onClick={handleMenuClick}>
          User
          <i className={showMenu ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
        </div>
        {showMenu && (
          <div className="navbar-dropdown">
            <div className="navbar-dropdown-item">Profile</div>
            <div className="navbar-dropdown-item">Settings</div>
            <div className="navbar-dropdown-item">Logout</div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;




