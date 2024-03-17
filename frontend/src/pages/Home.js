import React, { useEffect, useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import Header_logged from '../Components/Header/Header_logged';
import Header_unlogged from '../Components/Header/Header_unlogged';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const Home = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/user")
    .then(function(res) {
      setLoggedIn(true);
    })
    .catch(function(error) {
      setLoggedIn(false);
    });
  }, []);

  return (
    <div>
      <div className='main-body'>
        {loggedIn ? (
          <>
            <Header_unlogged />
            <div className='img-content1'>
              <p className='img-text'>YOU HAVE GOT PLANS</p>
              <button className='img-button'>Find your next event</button>
            </div>
          </>
        ) : (
          <>
            <Header_logged />
            <div className='img-content'>
              <p className='img-text'>DON'T BE GREEN WITH ENVY</p>
              <button className='img-button'>Find your next event</button>
            </div>
          </>
        )}
      </div >
    </div >
  )
}

export default Home
