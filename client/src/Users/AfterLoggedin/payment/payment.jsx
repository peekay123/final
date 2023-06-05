import React, { useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { useNavigate } from 'react-router-dom';
import './payment.css';


SwiperCore.use([Navigation]);

const PaymetPage = () => {
  let navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const closeNavbar = () => {
    setIsActive(false);
  };

  const handleNavigate = () => {
    navigate('/payment/otp')
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

      <section className="payment" >
      <div className="heading">
                <span>Payment</span>
                <h3>Get hold of your Companion</h3>
            </div>
        <div className="container"> 
			      <form>
				      <p>Accepted Banks</p>
			        <div className="logo">
				        <img src="./images/BOB.png" width="57"/>
				        <img src="./images/BDBL.jpeg" width="57"/>
				        <img src="./images/BNB.png" width="57"/>
				        <img src="./images/TBank.jpeg" width="57"/>
				        <img src="./images/DrukPNB.jpeg" width="57"/>
			        </div>
			        <br/>
			          <p>CID</p>
			        <input type="number" name="" placeholder="Enter CID number"/>
			        <p>Account Number</p>
			      <input type="number" name="" placeholder="Enter account number"/>
			        <button className="submit" onClick={handleNavigate}>Proceed</button>
			        </form>
          </div>
                
      </section>

    </>
  );
};

export default PaymetPage;
