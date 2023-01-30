import React from 'react';
import { useState, useEffect } from 'react';
import './btnDarkMode.css';

function BtnDarkMode() {

  // Устанавливаем начальное состояние darkMode
  // Изменять значение darkMode можно через ф-цию setDarkMode  
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') || 'dark');
  
  console.log(`LocalStorage "darkMode" = ${darkMode}`);
  
  // useEffect() запускает ф-цию при первичном рендиренге (запуске) страницы,
  // так же запускать ф-цию при изменении состояния
  // Второй аргумент массив: если пустой ф-ция сработает один раз,
  // можно передать состояние, ф-ция будет срабатывать при изменеии состояния
  useEffect(() => {
    
    localStorage.setItem('darkMode', darkMode);
    let menuList = document.querySelectorAll('.menu__menu-list');

    if (darkMode === 'light') {
      document.querySelector('.btn-mode').classList.add('btn-mode--light');
      document.body.classList.add('body--light-mode');
      document.querySelector('.header-block__logo').classList.add('header-block__logo--light-mode');
      for (let i = 0; i < menuList.length; i++) {
        menuList[i].classList.add('menu__menu-list--light-mode');
      }
    } else {
      document.querySelector('.btn-mode').classList.remove('btn-mode--light');
      document.body.classList.remove('body--light-mode');
      document.querySelector('.header-block__logo').classList.remove('header-block__logo--light-mode');
      for (let i = 0; i < menuList.length; i++) {
        menuList[i].classList.remove('menu__menu-list--light-mode');
      }
    }

  }, [darkMode]);


  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'dark' ? 'light' : 'dark';
    });
  };



  return (
    <div className='btn-mode' onClick={toggleDarkMode}>White/Black</div>
  )
}

export default BtnDarkMode;