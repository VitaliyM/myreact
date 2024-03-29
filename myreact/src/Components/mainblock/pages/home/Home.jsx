import React from 'react';
import './home.css';
import cv from './../../../../HelperList/Mamchur_Vitalii_CV.pdf'

function Home() {

  let getCv = () => {
    window.open(cv);
  }

  return (
    <div className='home-block'>

      <section className="home-block__section1">
        <div className="home-block__text">
          <h1>Hi, my name is Vitalii</h1>
          <h3>a frontend developer</h3>
          <h5>with passion for learning and creating</h5>
          <button className="home-block__download-cv"
            onClick={getCv} >
            Download CV
          </button>

          <div className="rectangles-block">
            <div className="rectangles-block__rec rectangles-block__rect1"></div>
            <div className="rectangles-block__rec rectangles-block__rect2"></div>
            <div className="rectangles-block__rec rectangles-block__rect3"></div>
            <div className="rectangles-block__rec rectangles-block__rect4"></div>
            <div className="rectangles-block__rec rectangles-block__rect5"></div>
          </div>

        </div>
      </section>

      <section className="home-block__section2">
        <div className="home-block__skills-header">Frontend</div>
        <div className="home-block__skills-text">HTML, CSS, JavaScript, BootStrap, GIT, NPM, ReactJS, Redux</div>
      </section>

    </div>
  )
}

export default Home