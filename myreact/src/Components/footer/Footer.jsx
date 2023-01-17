import React from 'react';
import './footer.css';

function Footer({footerDataList}) {
  return (
    <footer className='footer-block'>Footer
      <div className='footer-block__images'>
      {footerDataList.map( (footerData) => {
        return (
          <img className='footer-block__img' src={footerData.imgsource} alt={footerData.alt} />
        )
      } )}
      </div>       
    
    </footer>
  )
}

export default Footer