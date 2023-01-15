import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <header className='header-block'>
        <div className='header-block__logo'>Portfolio</div>
        <div className='header-block__menu'>
            <NavLink to='/' className='menu__menu-list'>Home</NavLink>
            <NavLink to='/projects' className='menu__menu-list'>Projects</NavLink>
            <NavLink to='/contacts' className='menu__menu-list'>Contacts</NavLink>
            <div className='menu__menu-list'>White/Black</div>
        </div>
    </header>
  )
}

export default Navbar