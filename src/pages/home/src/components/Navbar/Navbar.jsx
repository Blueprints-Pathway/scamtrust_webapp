import React from 'react'
import "./Navbar.css"
import navLogo from '../../Assets/scamTrust-logo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Navbar = (props) => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/sign-in')
  }

  return(
    <div className='nav-con'>
       <div className='nav-left'>
          <Link to="/"><img className='nav-logo' src={navLogo} alt='...' /></Link>
       </div>
       <div className='nav-right'>
           <button className='log-btn ab-btn'><Link className='btn log-btn' to="/about">About Us</Link></button>
           
           <button onClick={()=>{navigate('/sign-in')}}
           className='reg-btn btn log-btn-1'>
              Login
            </button>
            
           <button onClick={handleSignUp}
           className='sign-btn'>
            Sign up
           </button>
       </div>
    </div>
  )
}

export default Navbar