import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const Signup = () => {
  const naviagte= useNavigate();
  const [click, setClick] = useState(false);
  const [firstname, setFirstname]= useState("");
  const [lastname, setLastname]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

  const handleContinue = async(e) => {
    e.preventDefault();
    const data={
      username:firstname + lastname,
      email,
      password,
    }
    try{
      const res= await axios.post('http://127.0.0.1:8000/register', data);
      const log= await axios.post('http://127.0.0.1:8000/login', {email, password});
      console.log('User created successfully:', res.data, log.data);
      naviagte('/');
    }
    catch(error){
      console.error();
    }
  }
  return (
    <div className='box'>
      <div className='login-container'>
        <div className='main'>
          <div className='header'>
            <h2 className='heading-primary'>eventbrite</h2>
            <h2 className='heading-secondary'>Create an Account</h2>
          </div>
          <div className='login-form'>
            <div className='input-feild'>
              {click ? (
                <div className='name-feild'>
                  <input type='text' className='firstname' placeholder='First Name' onChange={(e)=>setFirstname(e.target.value)}></input>
                  <input type='text' className='lastname' placeholder='Last Name' onChange={(e)=>setLastname(e.target.value)}></input>
                </div>
              ) : ("")}
              <span className='inner-feild'>
                <input type='email' className='email' placeholder='Email address' onChange={(e)=>setEmail(e.target.value)}></input>
                {click ? (
                  <button className='edit' onClick={() => setClick(false)}>Edit</button>
                ) : ("")}
              </span>
              {click ? (
                <>
                  <div className='password-feild'>
                    <input type='text' className='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
                    <div className='guideline'>
                      <input type='checkbox' className='checkbox'></input>
                      <span>I accept the <span className='highlight-text'>Eventbite Terms of Service, Community Guidelines</span> and have read the <span className='highlight-text'>Privacy Policy</span>.</span>
                    </div>
                  </div>
                </>
              ) : ("")}
            </div>
            <div className='btn'>
              {click ? (
                <button className='button' onClick={handleContinue}>Sign Up</button>
              ) : (
                <button className='button' onClick={() => setClick(true)}>Continue</button>
              )}

            </div>
          </div>
          <div className='link'>
            Already have an account?
            <Link to='/login' style={{
              textDecoration: 'none',
              color: 'purple',
              fontWeight: 600,
              marginLeft: '5px'
            }}>Log In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
