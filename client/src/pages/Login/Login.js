import React, {useState} from "react";
import {toast} from 'react-toastify';
import "./Login.css";

export default function Login({setAuth, setAdmin}) {
  const[inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const {email, password} = inputs;

  const onChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {email, password}
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      if(parseRes.user_email === 'petifyadminCSF201@gmail.com' && parseRes.token){
        sessionStorage.setItem("admin", true)
        setAdmin(true);
        setAuth(true);
        localStorage.setItem("token", parseRes.token);
        toast.success('Signed-in Successfully', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else if(parseRes.token){
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success('Signed-in Successfully', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else {
        setAuth(false)
        sessionStorage.setItem("admin", false)
        setAdmin(false)
        toast.error(parseRes, {
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
    }catch(error){
      console.log(error);
    }
  }
    return (
        <div>
    <section className="login_sec">
    <div className="center">
      <h1>Sign-in</h1>
      <form onSubmit={onSubmitForm}>
        <div className="txt_field">
          <input 
          type='email' 
          name='email'
          value={email}
          onChange={e => onChange(e)} 
          required/>
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input 
          type='password' 
          name='password' 
          value={password}
          onChange={e => onChange(e)}
          required/>
          <span></span>
          <label>Password</label>
        </div>
        <button type="submit" className="login_btn">signin</button>
        <br/><br/>
        <div class="signup_link">
            Don't have an account? <a href="/register">Signup</a>
        </div>
      </form>
    </div>
  </section>
  </div>
    )
}