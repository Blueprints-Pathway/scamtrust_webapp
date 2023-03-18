import React from 'react'
import "./Navbar.css"
import navLogo from '../../Assets/scamTrust-logo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();
  return(
    <div className='nav-con'>
       <div className='nav-left'>
          <Link to="/"><img className='nav-logo' src={navLogo} alt='...' /></Link>
       </div>
       <div className='nav-right'>
           <button className='log-btn ab-btn'><Link className='btn log-btn' to="/about">About Us</Link></button>
           
           <button onClick={()=>{navigate('/layout')}}
           className='btn reg-btn log-btn-1'>
              Login
            </button>
            
           <button onClick={()=>{navigate('/layout')}}
           className='sign-btn'>
            Sign up
           </button>
       </div>
    </div>
  )
}

export default Navbar