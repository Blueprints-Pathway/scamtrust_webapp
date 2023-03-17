import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from './pages/landing/scamtrust-landing-page/src/components/About/About'
import AppLayout from './components/layout/AppLayout'
import HomePage from './pages/landing/scamtrust-landing-page/src/Home'

const App = () => {
  return (
	<Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='/about' element={<About />} />
		<Route path='/layout' element={ <AppLayout /> } />
	</Routes>
  )
}

export default App          
