import React from "react"
import { Routes, Route } from "react-router-dom"
import AppLayout from "./components/layout/AppLayout"
import About from "./pages/home/src/components/About/About"
import Faq from "./pages/home/src/components/Faq/Faq"
import KnowMore from "./pages/home/src/components/knowMore/KnowMore"
import HomePage from "./pages/home/src/HomePage"
import VendorDashboard from "./pages/dashboards/VendorDashboard/VendorDashboard"
import Sidebar from "./components/sidebar/Sidebar"
import Vendordashboard from "./components/vendordashboard/Vendordashboard"
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AppLayout from './components/Layout/AppLayout'
import About from './pages/home/src/components/About/About'
import Faq from './pages/home/src/components/Faq/Faq'
import KnowMore from './pages/home/src/components/knowMore/KnowMore'
import HomePage from './pages/home/src/HomePage'
import Signin from './pages/sign-in/Signin'
import Vendorsignup from './pages/sign-up/vendor-sign-up/Vendorsignup'

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
		<Route path='/vendor-sign-up' element={<Vendorsignup />} />
		<Route path='/sign-in' element={<Signin />} />
	</Routes>
  )
}

export default App
