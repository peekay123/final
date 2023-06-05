import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <section className="userfooter">
   
      <div className="icons-container">
   
         <div className="icons">
            <i className="fas fa-paw"></i>
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio at, saepe accusamus dolorum, quos eos nesciunt amet exercitationem illum quis nostrum, repellat quaerat eum debitis fugit alias magnam omnis!</p>
         </div>
   
         <div className="icons">
         <i className="fas fa-link"></i>
            <h3>Quick Links</h3>
            <a href='https://zala.bt/category/animals-pet-supplies' target="_blank" >https://zala.bt</a><br/>
            <a href='https://www.azhapasa.com/search?s=pets' target="_blank" >https://www.azhapasa.com</a><br/>
            <a href='https://dol.gov.bt/' target="_blank" >https://dol.gov.bt</a><br/>
            <a href='https://theuniversityanimalclinic.com/food-for-thought-how-to-correctly-feed-your-dog-other-pets/#:~:text=While%20occasional%20snacks%20are%20fine,fast%20your%20dog%20usually%20eats.' target="_blank" >https://theuniversityanimalclinic.com</a>

         </div>
   
         <div className="icons">
            <i className="fas fa-envelope"></i>
            <h3>email</h3>
            <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWtMqjRjdqdctvVkDtNnNckZQxMJrglHwzGvWNFXnchHxcBnwwkSXmwZmltTfhLZlHnxFwdsQ' target="_blank" >12200075.gcit@rub.edu.bt</a><br/>
            <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGKnKzdDhVnZcjhbfBPhRHdNdTlLnbQKvzKWjCVNCLXbgqZswHqPQWKjmhQxWmJHTGfVHpg' target="_blank" >12200077.gcit@rub.edu.bt</a><br/>
            <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSHxjXqfHhgLxWtSdbzqvKRjWXlklgHQLhhdrsCvlQCMpdvLQMKQKMppJBgwznVgvxgQLhpg' target="_blank" >12200080.gcit@rub.edu.bt</a><br/>
            <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRwRrczbxNVvkQgRXPxbNVFWtWHRNMqngCPsTkJzmbSFBkJKKRgtrDdGHnghhPXQclQQZwhQ' target="_blank" >12190063.gcit@rub.edu.bt</a>
         </div>
   
      </div>

      <div className="share">
      <a href="https://www.facebook.com" className="fab fa-facebook-f" target="_blank" ></a>
      <a href="https://www.whatsapp.com" className="fab fa-whatsapp" target="_blank" ></a>
      <a href="https://www.instagram.com" className="fab fa-instagram" target="_blank" ></a>
      <a href="https://telegram.org" className="fab fa-telegram" target="_blank" ></a>
   </div>
   
      <div className="credit"> created by <span>Group 4</span> | all rights reserved! </div>
   
   </section>
  )
}

export default Footer;