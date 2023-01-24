import React from 'react';
import { useState, useEffect } from 'react';
import './btnDarkMode.css';

function BtnDarkMode() {

    // Устанавливаем начальное состояние darkMode = 'light'
    // Изменять значение darkMode можно через ф-цию setDarkMode
    const [darkMode, setDarkMode] = useState('light'); 

    // useEffect() запускает ф-цию при первичном рендиренге (запуске) страницы,
    // так же запускать ф-цию при изменении состояния
    // Второй аргумент массив: если пустой ф-ция сработает один раз,
    // можно передать состояние, ф-ция будет срабатывать при изменеии состояния
    useEffect( ()=>{
        console.log(`Use effect ${darkMode}`)
    }, [darkMode] );

    const toggleDarkMode = () => {
        setDarkMode( (currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        } );
    };

  return (
    <div className='btn-mode' onClick={toggleDarkMode}>White/Black</div>
  )
}

export default BtnDarkMode