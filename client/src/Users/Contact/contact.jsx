import React, { useState } from 'react';
import './contact.css';
import {toast} from 'react-toastify';

const Contact = () => {
    const [name, setName] = useState('');
    const[number, setNumber] = useState('');
    const[message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setName('');
        setNumber('');
        setMessage('');

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
        <section className="contact" id="contact">
            <div className="heading">
                <h3>contact us</h3>
            </div>

            <form>
                <div className="box-container">
                    <div className="box">
                        <div className="inputBox">
                            <span>Full Name</span>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter your name"/>
                        </div>
                        <div className="inputBox">
                            <span>Your Message</span>
                            <textarea name="" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="enter your message" id="" cols="30" rows="10" maxLength={255}></textarea>
                        </div>
                    </div>
                    <div className="box">
                    <div className="inputBox">
                            <span>Number</span>
                            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="enter your Number"/>
                        </div>
                        <div className="inputBox">
                        <span>Our Address</span>
                        <iframe
                        title='map'
                        className="map" 
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Gyalpozhing%20College%20of%20Information%20Technology,%20Mongar%20-%20Gyelposhing%20Road,%20Gyelpozhing,%20Bhutan+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                        allowFullScreen="" 
                        loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
                <button className="btn" onClick={handleSubmit}>Submit</button>
            </form>

        </section>
    </>
  )
}

export default Contact