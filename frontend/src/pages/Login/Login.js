import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const Login = () => {
    const navigate= useNavigate();

    const [click, setClick] = useState(false);
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const handleContinue = async(e) => {
        e.preventDefault();
        try{
            const log= await axios.post('http://127.0.0.1:8000/login', {email, password});
            console.log(log.data);
            navigate('/');
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
                        <h2 className='heading-secondary'>Log In</h2>
                    </div>
                    <div className='login-form'>
                        <div className='input-feild'>
                            <span className='inner-feild'>
                                <input type='email' className='email' placeholder='Email address' onChange={(e)=>setEmail(e.target.value)}></input>
                                {click ? (
                                    <button className='edit' onClick={() => setClick(false)}>Edit</button>
                                ) : ("")}
                            </span>
                            {click ? (
                                <>
                                    <div className='password-feild'>
                                        <input type='password' className='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
                                        <p className='forgot-password'>Forgot password</p>
                                    </div>
                                </>
                            ) : ("")}
                        </div>
                        <div className='btn'>
                            {click ? (
                                <button className='button' onClick={handleContinue}>Log In</button>
                            ) : (
                                <button className='button' onClick={() => setClick(true)}>Continue</button>
                            )}

                        </div>
                    </div>
                    <div className='link'>
                        Don't have an account?
                        <Link to='/signup' style={{
                            textDecoration: 'none',
                            color: 'purple',
                            fontWeight: 600,
                            marginLeft: '5px'
                        }}>Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
