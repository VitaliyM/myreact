import React from 'react';
import './footer.css';

function Footer({ footerDataList }) {
  return (
    <footer className='footer-block'>
      <div className='footer-block__images'>
        {footerDataList.map((footerData) => {
          return (
            <img className='footer-block__img' src={footerData.imgsource} alt={footerData.alt} key={footerData.alt} />
          )
        })}
      </div>
      <div className="footer-block__copyright">&#169; 2022 frontend</div>

    </footer>
  )
}

export default Footer