// import React from "react";
// import "./components/Loginform"



// function Navigation() {
//   return (
//     <div className='NavBar'>
//       <nav className="main-nav">
//         <div className="logo">
//           <label>VIT</label>
//         </div>

//         <div className="Credential">
//           <label>User</label>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navigation;




import React from 'react';
import { useState } from 'react';
import './NavBar.css';

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




