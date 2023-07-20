import React from 'react'
import './navbar.css'


export const Navbar = () => {
  return (
    <>
        <header className="header">
    <div className="navtext-container">
      {/* <div className="navtext">company</div> */}
    </div>
    <input type="checkbox" className="menu-btn" id="menu-btn" />
    <label htmlFor="menu-btn" className="menu-icon"><span className="navicon"></span></label>
    <ul className="menu">
      <li className="top"><a href="#hero">Home</a></li>
      <li><a href="#aboutSection">About</a></li>
      <li><a href="#skillSection">Skills</a></li>
      <li><a href="#highlights">Highlights</a></li>
      <li><a href="#contactSection">Contact</a></li>
    </ul>

  </header>
    </>
  )
}
