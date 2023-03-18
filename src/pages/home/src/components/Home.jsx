import React from 'react'
import Intro from './Intro/Intro'
import Ending from './Ending/Ending'
import Footer from './Footer/Footer'
import LandingPage from './LandingPage/LandingPage'
import Navbar from './Navbar/Navbar'

const Home = () => {
  return (
    <div>
       <Navbar />
       <LandingPage />
       <Intro />
       <Ending />
       <Footer /> 
    </div>
  )
}

export default Home