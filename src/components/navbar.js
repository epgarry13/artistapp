import React from 'react';
import "../styles/navbar.scss";

function Navbar() {
  return (
    <>
    <div className="navbar">
        <div className="navbar_container">
        <div>
            <a href="/">Home</a>
        </div>
        <div>
            <a href="/portfolio">Portfolio</a>
        </div>
        <div>
            <a href="/contact">Contact</a>
        </div>
        </div>
    </div>
    </>
   

  );
}

export default Navbar;