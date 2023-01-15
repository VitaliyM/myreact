import React from 'react';
import './home.css';

function Home() {
  return (
    <div className='home-block'>

      <section className="mainBlockSection1">
        <div className="mainBlockText">
          <h1>Hi, my name is Vitalii</h1>
          <h3>a frontend developer</h3>
          <h5>with passion for learning and creating</h5>
          <button className="downloadCv">Download CV</button>

          <div className="rectangles">
            <div className="rec rect1"></div>
            <div className="rec rect2"></div>
            <div className="rec rect3"></div>
            <div className="rec rect4"></div>
            <div className="rec rect5"></div>
          </div>

        </div>
      </section>

      <section className="mainBlockSection2">
        <div className="skillsHeader">Frontend</div>
        <div className="skillsText">HTML, CSS, JavaScript, BootStrap, NPM, ReactJS, Redux</div>
      </section>

    </div>
  )
}

export default Home