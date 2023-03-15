import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from './pages/landing/scamtrust-landing-page/src/components/About/About'
import LandingPage from './pages/landing/scamtrust-landing-page/src/Home'
import AppLayout from './components/layout/AppLayout'

const App = () => {
  return (
	<Routes>
		<Route path='/' element={<LandingPage />} />
		<Route path='/about' element={<About />} />
		<Route path='/scamtrust' element={<AppLayout /> } />
	</Routes>
  )
}

export default App          
