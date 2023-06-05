import React, { useState } from 'react';
import './about.css';
import Popup from './pop';

const About = () => {
   const[isOpen, setIsOpen] = useState(false);
  return (
    <section className="userabout" id="about">
   
      <div className="image">
         <img src="images/about.jpg" alt=""/>
      </div>
   
      <div className="aboutcontent">
         <h3 className="abouttitle">WELCOME TO OUR WEBSITE</h3>
         <p>Petify is a pet adoption website that aims to help pets find loving homes and caring owners. The website features a user-friendly interface that allows visitors to search for pets by various criteria, such as breed, age, location and many more. It provides resources and information to help pet owners provide the best possible care for their furry friends. Through its platform, Petify seeks to promote animal welfare and reduce the number of pets in need of homes.</p>
         
         <div data-name="about-preview" className="swiper-slide slide">
            <a className="btn" onClick={() => setIsOpen(true)}>Read More</a>
         </div>
         <Popup open={isOpen}>	
		      <button className="close" onClick={() => setIsOpen(false)}>&times;</button>
		         <div className="aboutcontent-1">
			      <h2>About Us</h2>
               <p>Who are we?</p>
               
		         </div>
		         <div className="vl"></div>
		         <div className="aboutcontent-2">
			      <h2>About Us</h2>
               <p>Mission</p>
               <p>To provide a platform for connecting adoptable pets with loving owners, promote animal welfare, and reduce the number of pets in shelters.</p>
               <p>Vision</p>
               <p>To create a world where all pets are treated with compassion and respect, and every pet has a loving home.</p>
		         </div>
         </Popup>
      
         <div className="icons-container">
            <a href='#pets'>
            <div className="icons">
               <img src="images/All-icon.png" alt=""/>
               <h3>Companion</h3>
            </div>
            </a>
            <a href='#pets'>
            <div className="icons">
               <img src="images/Dog-icon.png" alt=""/>
               <h3>Dogs</h3>
            </div>
            </a>
            <a href='#pets'>
            <div className="icons">
               <img src="images/Cat-icon.png" alt=""/>
               <h3>Cats</h3>
            </div>
            </a>
            <a href='#pets'>
            <div className="icons">
               <img src="images/Rabbit-icon.png" alt=""/>
               <h3>Others</h3>
            </div>
            </a>
         </div>
      </div>
   </section>
    
  )
}

export default About;
