import React, { useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './home.css';
import About from '../../about/about';
import PetAfterLoggedIn from '../pet/pet';
import Gallery from '../../gallery/gallery';
import ContactAfterLoggedIn from '../Contact/contact';
import Footer from '../../footer/footer';
import {toast} from 'react-toastify';


SwiperCore.use([Navigation]);

const HomeAfterLoggedIn = ({setAuth}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const closeNavbar = () => {
    setIsActive(false);
  };
  const logout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    setAuth(false);
    toast.success('Sign-Out Successfully', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      window.location.href = '/';
    }

  return (
    <>
      <section className="header">
        <a href="#" className="logo">
          <i className="fas fa-paw"></i> Petify
        </a>

        <nav className={`navbar ${isActive ? 'active' : ''}`}>
          <a href="#" onClick={closeNavbar}>
            home
          </a>
          <a href="#about" onClick={closeNavbar}>
            about
          </a>
          <a href="#pets" onClick={closeNavbar}>
            adopt pet
          </a>
          <a href="#gallery" onClick={closeNavbar}>
            gallery
          </a>
          <a href="#contact" onClick={closeNavbar}>
            contact
          </a>
          <a style={{cursor: 'pointer'}} onClick={ logout}>
            signout
          </a>
          
        </nav>

        <div
          id="menu-btn"
          className={`fas fa-bars ${isActive ? 'fa-times' : ''}`}
          onClick={toggleNavbar}
        ></div>
      </section>

      <section className="home" id="home">
        <Swiper
          className="home-slider"
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          <SwiperSlide
            className="swiper-slide slide"
            style={{ background: `url(images/background1.jpg) no-repeat` }}
          >
            <div className="content">
              <span>Adopt now</span>
              <h6>Adopt a pet and share the love!</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide slide"
            style={{ background: `url(images/background2.jpg) no-repeat` }}
          >
            <div className="content">
              <span>save life</span>
              <h6>Saving lives, one adoption at a time - adopt your new furry friend now!</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide slide"
            style={{ background: `url(images/backgrounf3.jpg) no-repeat` }}
          >
            <div className="content">
              <span> share Love </span>
              <h6>Love a pet, save a life - adopt today!</h6>
            </div>
          </SwiperSlide>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </section>

      <About/>

      <PetAfterLoggedIn/>

      <Gallery/>

      <ContactAfterLoggedIn/>

      <Footer/>

    </>
  );
};

export default HomeAfterLoggedIn;
