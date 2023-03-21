import React from "react"
import { Routes, Route } from "react-router-dom"
import AppLayout from "./components/layout/AppLayout"
import About from "./pages/home/src/components/About/About"
import Faq from "./pages/home/src/components/Faq/Faq"
import KnowMore from "./pages/home/src/components/knowMore/KnowMore"
import VendorDashboard from "./pages/dashboards/VendorDashboard/VendorDashboard"
import Sidebar from "./components/sidebar/Sidebar"
import Vendordashboard from "./components/vendordashboard/Vendordashboard"
import HomePage from './pages/home/src/HomePage'
import Signin from './pages/sign-in/Signin'
import VendorSetPassword from './pages/sign-up/vendor-sign-up/vendor-set-password/VendorSetPassword'
import VendorRegistration from './pages/sign-up/vendor-sign-up/vendor-registration/VendorRegistration'
// import Vendorsignup from './pages/sign-up/vendor-sign-up/Vendorsignup'
import VendorBvn from './pages/sign-up/vendor-sign-up/VendorBvn/VendorBvn'
import VendorTransactionPin from './pages/sign-up/vendor-sign-up/vendor-transaction-pin/VendorTransactionPin'
import VendorSecurity from './pages/sign-up/vendor-sign-up/Vendor-security-question/VendorSecurity'
import VendorActivate from './pages/sign-up/vendor-sign-up/vendor-activate-account/VendorActivate'

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
		<Route path='/sign-in' element={<Signin />} />
		{/* <Route path='vendor-sign-up' element={<Vendorsignup  />} /> */}
		<Route path='vendor-registration' element={<VendorRegistration  />} />
		<Route path='/vendor-verify-bvn' element={<VendorBvn />} />
		<Route path='/vendor-set-password' element={<VendorSetPassword />} />
		<Route path='/vendor-transaction-pin' element={<VendorTransactionPin />} />
		<Route path='/vendor-security-question' element={<VendorSecurity />} />
		<Route path='/vendor-activate-account' element={<VendorActivate />} />
	</Routes>
  )
}

export default App
