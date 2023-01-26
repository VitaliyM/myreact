import React from 'react';
import { useState, useEffect } from 'react';
import './btnDarkMode.css';

function BtnDarkMode() {

  // Устанавливаем начальное состояние darkMode
  // Изменять значение darkMode можно через ф-цию setDarkMode
  
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') || 'dark');
  
  console.log("darkMode - " + darkMode);

  // useEffect() запускает ф-цию при первичном рендиренге (запуске) страницы,
  // так же запускать ф-цию при изменении состояния
  // Второй аргумент массив: если пустой ф-ция сработает один раз,
  // можно передать состояние, ф-ция будет срабатывать при изменеии состояния
  useEffect(() => {

    localStorage.setItem('darkMode', darkMode);

    if (darkMode === 'light') {
      document.body.classList.add('body--light-mode');
      document.querySelector('.header-block__logo').classList.add('header-block__logo--light-mode');
    } else {
      document.body.classList.remove('body--light-mode');
      document.querySelector('.header-block__logo').classList.remove('header-block__logo--light-mode');
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

export default BtnDarkMode