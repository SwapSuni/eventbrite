import React from 'react'
import './Dropdown.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Dropdown = () => {
    const navigate= useNavigate();
    const handlelogout=async(e)=>{
        e.preventDefault();
        try{
            const res= await axios.post('http://127.0.0.1:8000/logout', {withCredentials: true});
            console.log(res.data);
        }
        catch(error){
            console.error();
        }
    }
    return (
        <div className='drop'>
            <div className='user-events'>
                <button className='drop-btn' onClick={()=>navigate('/user-events')}>Your events</button>
            </div>
            <div className='logout'>
                <button className='drop-btn' onClick={handlelogout}>Log Out</button>
            </div>
        </div>
    )
}

export default Dropdown
