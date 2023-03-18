import React, { useState, useEffect } from 'react'
import Home from './components/Home';
import logo from './Assets/loader-img-2.png'
import './HomePage.css'

function HomePage() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  },[]);

  return (
    <div className='HomePage-con'>
      {loading ?
      <div className='loader-div'>
        <img className='loader-img' src={logo} alt='...' />
      </div>  : <Home /> }
    </div>
  );
}
export default HomePage;
