import React, {useContext, useEffect, useState, useRef } from 'react';
import { PetifyContext } from '../../context/context';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './pet.css';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';


const Pet = () => {
  const navigate = useNavigate();
  const {pets, setPets} = useContext(PetifyContext);
  const swiperRef = useRef(null);

  const fetchData = async () => {
    try{
      const response = await fetch('http://localhost:8000/data', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json()
      setPets(data.data.pets)
    } catch(err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchData();

    const swiperOptions = {
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      },
    };

    if (swiperRef.current) {
      swiperRef.current.destroy();
    }

    swiperRef.current = new Swiper('.pets-slider', swiperOptions);

    const previewContainer = document.querySelector('.pets-preview-container');
    const previewBox = previewContainer.querySelectorAll('.pets-preview');
    const petsSlides = document.querySelectorAll('.pets .slide');

    petsSlides.forEach((pets) => {
      pets.onclick = () => {
        previewContainer.style.display = 'flex';
        const name = pets.getAttribute('data-name');
        previewBox.forEach((preview) => {
          const target = preview.getAttribute('data-target');
          if (name === target) {
            preview.classList.add('active');
          }
        });
      };
    });

    previewContainer.querySelector('#close-preview').onclick = () => {
      previewContainer.style.display = 'none';
      previewBox.forEach((close) => {
        close.classList.remove('active');
      });
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login')
    toast.error('Please Log in', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <>
      <section className="pets" id="pets">
        <div className="heading">  
          <h3>popular pets</h3>
        </div>
        <div className="swiper pets-slider">
          <div className="swiper-wrapper">
            {pets.map((pet) => {
              const {id, image, breed,  price} = pet;
              return (
                <div key={id} className="swiper-slide slide"  data-name={id}>
                  <img src={`http://localhost:8000/images/${image}`} alt=""/>
                  <h3>{breed}</h3>
                  <div className="price">Nu. {price}</div>
                </div>
              );
            })}
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <section className="pets-preview-container">
          <div id="close-preview" className="fas fa-times"></div>
          {pets.map((pet) => {
            const{id, image, breed, age, vaccinated, location, status, price} = pet;
            return(
              <div key={id} className="pets-preview" data-target={id}>
                <img src={`http://localhost:8000/images/${image}`} alt=""/>
                <h3>{breed}</h3>
                <p><b>Age:</b> {age}</p>
                <p><b>Vaccinated:</b> {vaccinated}</p>
                <p><b>Location:</b> {location}</p>
                <p><b>Status:</b> {status}</p>
                <div className="price">Nu. {price}</div>
                {status !== 'Booked' && (
                  <a onClick={handleSubmit} className="btn">
                    Adopt Now
                  </a>
                )}
              </div>
            );
          })}
        </section>
      </section>      
    </>
  );
}

export default Pet;
