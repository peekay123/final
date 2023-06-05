import React, {useState} from 'react';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import './register.css';


const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  })

  const {name, email, password, confirmpassword} = inputs;

  const onChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try{
      const body = {name, email, password, confirmpassword}
      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: {
       'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();
      if(parseRes){
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
      toast.success('Registration Successfull', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

        setInputs({
          name: '',
          email: '',
          password: '',
          confirmpassword: ''
        });

        navigate('/login')

    }catch(error) {
      console.log(error)
    }
  }
  return (
    <>
    <section className='signup'>
        <div className="center-signup">
        <h1>Signup</h1>
        <form onSubmit={onSubmitForm}>
            <div className="txt_field">
            <input 
              type='text' 
              name='name' 
              value={name}
              onChange={e => onChange(e)}
              required
              />
            <span></span>
            <label>Username</label>
            </div>
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
              required
              />
            <span></span>
            <label>Password</label>
            </div>
            <div className="txt_field">
                <input 
                  type='password' 
                  name='confirmpassword' 
                  value={confirmpassword}
                  onChange={e => onChange(e)}
                  required/>
                <span></span>
                <label>Confirm Password</label>
            </div>
            <button type="submit" className="signup_btn">Signup</button>
            <br/><br/>
            <div className="signup_link">
            Already have an account? <a href="/login">Signin</a>
            </div>
        </form>
        </div>
    </section>
    </>
  )
}

export default Register;
