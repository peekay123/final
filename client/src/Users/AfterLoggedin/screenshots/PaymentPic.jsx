import React, { useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { useNavigate } from 'react-router-dom';
import './payments.css'

SwiperCore.use([Navigation]);

const PaymentPic = () => {
  let navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [isActivePopUp, setIsActivePopUp] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const closeNavbar = () => {
    setIsActive(false);
  };

  const showModal = () => {
    setIsActivePopUp(true);
  };

  const hideModal = () => {
    setIsActivePopUp(false);
  };
  const handleSubmit = () => {
    navigate('/index');
  }
  return (
    <>
    <section className="header">
        <a href="#" className="logo">
          <i className="fas fa-paw"></i> Petify
        </a>

        <nav className={`navbar ${isActive ? 'active' : ''}`}>
          <a href="/index" onClick={closeNavbar}>
            home
          </a>
          <a href='/' onClick={closeNavbar}>
            signout
          </a>
          
        </nav>

        <div
          id="menu-btn"
          className={`fas fa-bars ${isActive ? 'fa-times' : ''}`}
          onClick={toggleNavbar}
        ></div>
      </section>
    <section className={`payment ${isActivePopUp ? "active" : ""}`}>
    <div className="heading">
          <h3>Payment</h3>
        </div>
        <div className='con'>
            <label htmlFor="images" className="drop-container">
              <span className="drop-title">Drop Screenshot here</span>
                or
              <input type="file" id="images" accept="image/*" required/>
            </label>
            <button className='btn' onClick={showModal}>Submit</button>
        </div>
      <div className="payment-overlay" onClick={hideModal}></div>

        {isActivePopUp && (
        <div className="modal-box">
          <i className="fas fa-check-circle"></i>
          <h2>Thank You</h2>
          <h3>We will cross check and let you know as soon as possible</h3>
          <div className="button">
            <button className="btn" onClick={handleSubmit}>
              Ok, Close
            </button>
          </div>
        </div>
      )}
    </section>
    </>
  )
}

export default PaymentPic