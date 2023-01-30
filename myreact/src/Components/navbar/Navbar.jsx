import React from 'react';
import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './navbar.css';


const activeLogo = ({ isActive }) => isActive ? "header-block__logo" : "header-block__logo";

const activeLink = ( {isActive} ) => isActive ? "menu__menu-list_active" : "menu__menu-list";

// let getStorage = localStorage.getItem('darkMode');
// let menuList = document.querySelectorAll('.menu__menu-list');



function Navbar() {
  return (
    <header className='header-block'>
      <NavLink to='/' className={activeLogo} >Portfolio</NavLink>
      <div className='header-block__menu'>
        <NavLink to='/' className={activeLink} >Home</NavLink>
        <NavLink to='/projects' className={activeLink} >Projects</NavLink>
        <NavLink to='/contacts' className={activeLink} >Contacts</NavLink>
        <BtnDarkMode />
      </div>
    </header>
  )
}

export default Navbar