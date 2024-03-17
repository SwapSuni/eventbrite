import React from 'react'
import Header_unlogged from '../../Components/Header/Header_unlogged'
import './New_event.css'
import { useNavigate } from 'react-router-dom'


const New_event = () => {
  const navigate= useNavigate();

  return (
    <div className='body'>
      <Header_unlogged />
      <div className='main-body'>
        <div className='form-container'>
          <div className='form-title'>
            <h2>Create your event here</h2>
          </div>
          <div className='form'>
            <form className='content'>
              <label className='event-label label'>
                <p className='event-name'>Enter the name of your event: </p>
                <input type='text' className='event-input input' placeholder='Event Name'></input>
              </label>
              <label className='date-label label'>
                <p className='event-date'>When do you wish to host this event: </p>
                <input type='date' className='date-input input' placeholder='Date of event'></input>
              </label>
              <label className='time-label label'>
                <p className='event-time'>Specify the time: </p>
                <input type='time' className='time-input input' placeholder='Time of event'></input>
              </label>
              <label className='location-label label'>
                <p className='event-location'>Where do you want to host your event: </p>
                <input type='text' className='loc-input input' placeholder='Event location'></input>
              </label>
              <label className='desc-label label'>
                <p className='event-desc'>Give a brief description about this event</p>
                <textarea typeof='text' className='input' placeholder='Description'></textarea>
              </label>
              <label className='img-label label'>
                <p className='event-img'>Upload an image describing your event </p>
                <input type='file' className='img-input input'></input>
              </label>
            </form>
          </div>
        </div>
        <div className='footer'>
          <div className='btn-container'>
            <button className='exit-btn' onClick={()=>navigate('/')}>Exit</button>
            <button className='submit-btn'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New_event
