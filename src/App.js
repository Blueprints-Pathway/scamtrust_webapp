import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import About from './pages/home/src/components/About/About'
import Faq from './pages/home/src/components/Faq/Faq'
import KnowMore from './pages/home/src/components/knowMore/KnowMore'
import HomePage from './pages/home/src/HomePage'
import PasswordRecoveryEmail from './pages/passwordrecovery/PasswordRecoveryEmail'
import PasswordRecoveryPhone from './pages/passwordrecovery/PasswordRecoveryPhone'


const App = () => {
  return (
	<Routes>
		  {/* SCAMTRUST LANDING PAGE ROUTE */}
		<Route path='/' element={<HomePage />} />
		<Route path='/faq' element={<Faq />} />
		<Route path='/about' element={<About />} />
		<Route path='/know-more' element={<KnowMore />} />

		           {/* SCAMTRUST WEBAPP */}
		<Route path='/layout' element={<AppLayout />} />
		<Route path='/passwordrecoveryemail' element={<PasswordRecoveryEmail/>} />
		<Route path='/passwordrecoveryphone' element={	<PasswordRecoveryPhone/>} />
		
	
	
		
	</Routes>
  )
}

export default App          
