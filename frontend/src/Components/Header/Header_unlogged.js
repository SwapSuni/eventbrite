import React, { useState } from 'react'
import './Header_unlogged.css'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';

const Header_unlogged = () => {
  const [drop, setDrop] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className='header'>
        <div className='navbar'>
          <div className='brand'>
            <h2 className='brand-name'>eventbrite</h2>
          </div>
          <button className='searchbar'>
            <SearchIcon style={{ color: 'grey' }} />
            <input type='text' placeholder='Search' className='search'></input>
          </button>
          <div className='events'>
            <button className='event-list'>View All Events</button>
          </div>
          <div className='event-create'>
            <div className='icon-container'>
              <AddIcon onClick={() => navigate('/new-event')} />
            </div>
            <p className='icon-text'>Create an event</p>
          </div>
          <div className='like'>
            <div className='icon-container'>
              <FavoriteBorderOutlinedIcon onClick={() => navigate('/liked-events')} />
            </div>
            <p className='icon-text'>Likes</p>
          </div>
          <div className='user'>
            <AccountCircleOutlinedIcon />
            <p className='icon-text'>Swapnil Sunil Sinha</p>
            {drop ? (
              <>
                <KeyboardArrowUpIcon onClick={() => setDrop(false)} />
              </>
            ) : (
              <>
                <KeyboardArrowDownIcon onClick={() => setDrop(true)} />
              </>
            )}
            {drop ? (
              <Dropdown />
            ) : ("")}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header_unlogged
