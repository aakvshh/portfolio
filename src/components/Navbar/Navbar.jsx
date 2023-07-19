import React from 'react'
import styles from './navbar.css'

export const Navbar = () => {
  return (
    <>
        <header class="header">
    <div class="navtext-container">
      {/* <div class="navtext">company</div> */}
    </div>
    <input type="checkbox" class="menu-btn" id="menu-btn" />
    <label for="menu-btn" class="menu-icon"><span class="navicon"></span></label>
    <ul class="menu">
      <li class="top"><a href="#home">home</a></li>
      <li><a href="#skills">skills</a></li>
      <li><a href="#projects">highlights</a></li>
      <li><a href="#contact">contact</a></li>
    </ul>

  </header>
    </>
  )
}
