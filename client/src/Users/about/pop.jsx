import React from 'react';
import './about.css';

const Popup = ({open, children}) => {
    if(!open) return null
  return (
    <>
    <div className='overlay'/>
    
    <div className='popupmodal'>
        {children}
    </div>
    </>
  )
}

export default Popup