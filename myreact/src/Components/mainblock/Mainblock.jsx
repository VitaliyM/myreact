import React from 'react';
import './mainblock.css';
import Contacts from './pages/contacts/Contacts';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import { Routes, Route } from 'react-router-dom';

function Mainblock({projectsDataList}) {
  return (
    <main className='main-block'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects projectsDataList={projectsDataList} />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>

    </main>
  )
}

export default Mainblock