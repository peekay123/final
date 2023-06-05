import React, { useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import './payment.css';


SwiperCore.use([Navigation]);

const OTPPage = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const closeNavbar = () => {
    setIsActive(false);
  };

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

      <section className="payment" >
      <div className="heading">
                <span>Payment</span>
                <h3>Get hold of your Companion</h3>
            </div>
        <div className="container-otp"> 
			      <form>
				      <p>Enter OTP</p>
                      <p className='otp'>Please provide valid OTP number that you recieved on your phone via SMS.</p>
			        <br/>
			      <input type="number" name="" placeholder="Enter OTP number"/>
			        <button className="submit">Proceed</button>
			        </form>
          </div>
                
      </section>

    </>
  );
};

export default OTPPage;
