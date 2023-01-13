import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <header className='header-block'>
        <div className='header-block__logo'>Portfolio</div>
        <div className='header-block__menu'>
            <div className='menu__menu-list'>Home</div>
            <div className='menu__menu-list'>Projects</div>
            <div className='menu__menu-list'>Contacts</div>
            <div className='menu__menu-list'>White/Black</div>
        </div>
    </header>
  )
}

export default Navbar