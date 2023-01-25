import React from 'react';
import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './navbar.css';


const setActive = ({ isActive }) =>(isActive ? "menu__menu-list_active" : "menu__menu-list");

function Navbar() {
  return (
    <header className='header-block'>
        <NavLink to='/' className='header-block__logo'>Portfolio</NavLink>
        <div className='header-block__menu'>
            <NavLink to='/' className={setActive} >Home</NavLink>
            <NavLink to='/projects' className={setActive} >Projects</NavLink>
            <NavLink to='/contacts' className={setActive} >Contacts</NavLink>
            <BtnDarkMode />
        </div>
    </header>
  )
}

export default Navbar