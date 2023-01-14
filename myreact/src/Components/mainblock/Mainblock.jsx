import React from 'react';
import './mainblock.css';
import Contacts from './pages/contacts/Contacts';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import { Routes, Route } from 'react-router-dom';

function Mainblock() {
  return (
    <main className='main-block'>

      

        <Home />
        <Projects />
        <Contacts />
    </main>
  )
}

export default Mainblock