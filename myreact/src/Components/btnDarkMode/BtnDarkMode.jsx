import React from 'react';
import { useState, useEffect } from 'react';
import './btnDarkMode.css';

function BtnDarkMode() {

  // Устанавливаем начальное состояние darkMode
  // Изменять значение darkMode можно через ф-цию setDarkMode
  const [darkMode, setDarkMode] = useState('light');

 
  console.log("Dark Mode - " + darkMode);
  console.log(`LocalStorage GET ${localStorage.getItem("darkMode", darkMode)}`);
  // console.log("Before - " + JSON.parse(localStorage.getItem(darkMode)));
  // console.log("After - " + localStorage.setItem('darkMode', JSON.stringify(darkMode)));


  // useEffect() запускает ф-цию при первичном рендиренге (запуске) страницы,
  // так же запускать ф-цию при изменении состояния
  // Второй аргумент массив: если пустой ф-ция сработает один раз,
  // можно передать состояние, ф-ция будет срабатывать при изменеии состояния
  useEffect(() => {
    // let getTheme = JSON.parse(localStorage.getItem(darkMode));
    // console.log(`localStorage Before - ${getTheme}`);
    
    // console.log(`Use state - ${darkMode}`);
    
    // localStorage.setItem('darkMode', JSON.stringify(darkMode));

    // console.log(`localStorage After - ${getTheme}`);

    
    
    if (darkMode === 'dark') {
      document.body.classList.remove('body--light-mode');
      document.querySelector('.header-block__logo').classList.remove('header-block__logo--light-mode');
    } else {
      document.body.classList.add('body--light-mode');
      document.querySelector('.header-block__logo').classList.add('header-block__logo--light-mode');
    }
    
  }, [darkMode]);

  
  const toggleDarkMode = () => {
    setDarkMode( (currentValue) => {
      return currentValue === 'dark' ? 'light' : 'dark';
    });
  };


  return (
    <div className='btn-mode' onClick={toggleDarkMode}>White/Black</div>
  )
}

export default BtnDarkMode