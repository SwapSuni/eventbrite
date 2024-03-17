import React from 'react'
import './Header_logged.css'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Header_logged = () => {
  const navigate= useNavigate();
  
  return (
    <div className='header'>
      <div className='navbar'>
        <div className='brand'>
          <h2 className='brand-name'>eventbrite</h2>
        </div>
        <button className='searchbar'>
          <SearchIcon style={{ color: 'grey' }} />
          <input type='text' placeholder='Search' className='search'></input>
        </button>

        <div className='event'>
          <button className='event-list'>View All Events</button>
        </div>
        <div className='user'>
          <button className='user-login' onClick={() => navigate('/login')}>Log In</button>
          <button className='user-login' onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Header_logged
