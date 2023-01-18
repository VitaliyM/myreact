import React from 'react';
import './contacts.css';

function Contacts() {
  return (
    <div className='contacts-block'>
      <h2 className='contacts-block__header'>Contacts</h2>
      <div className='contacts-block__location'>
        <h3 className='location__header'>Location</h3>
        <div className='location__text'>Zhytomyr, Ukraine</div>
      </div>
      <div className='contacts-block__messager'>
        <h3 className='messager__header'>Viber / Telegram</h3>
        <div className='messager__text'>+380660000000</div>
      </div>
      <div className='contacts-block__email'>
        <h3 className='email__header'>Email</h3>
        <div className='email__text'>frontend@gmail.com</div>
      </div>
    </div>
  )
}

export default Contacts