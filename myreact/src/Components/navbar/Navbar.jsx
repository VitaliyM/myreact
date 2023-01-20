import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';


// const menuList = 'menu__menu-list';
const setActive = ({ isActive }) =>(isActive ? "menu__menu-list_active" : "menu__menu-list");

function Navbar() {
  return (
    <header className='header-block'>
        <div className='header-block__logo'>Portfolio</div>
        <div className='header-block__menu'>
            <NavLink to='/' className={setActive} >Home</NavLink>
            <NavLink to='/projects' className={setActive} >Projects</NavLink>
            <NavLink to='/contacts' className={setActive} >Contacts</NavLink>
            <div className='menu__menu-list'>White/Black</div>
        </div>
    </header>
  )
}

export default Navbar