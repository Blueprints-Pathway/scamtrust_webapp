import React from "react"
import { Routes, Route } from "react-router-dom"
import AppLayout from "./components/Layout/AppLayout"
import About from "./pages/home/src/components/About/About"
import Faq from "./pages/home/src/components/Faq/Faq"
import KnowMore from "./pages/home/src/components/knowMore/KnowMore"
import VendorDashboard from "./pages/dashboards/VendorDashboard/VendorDashboard"
import Sidebar from "./components/sidebar/Sidebar"
import Vendordashboard from "./components/vendordashboard/Vendordashboard"
import HomePage from './pages/home/src/HomePage'
import Signin from './pages/sign-in/Signin'
import VendorSetPassword from './pages/sign-up/set-password/SetPassword'
import VendorRegistration from './pages/sign-up/vendor-sign-up/vendor-registration/VendorRegistration'
// import Vendorsignup from './pages/sign-up/vendor-sign-up/Vendorsignup'
import VendorBvn from './pages/sign-up/Bvn-verification/VerifyBvn'
import VendorTransactionPin from './pages/sign-up/transaction-pin/TransactionPin'
import VendorSecurity from './pages/sign-up/security-question/SecurityQuestion'
import VendorActivate from './pages/sign-up/vendor-sign-up/vendor-activate-account/VendorActivate'
import PasswordRecovery from './pages/password-recovery/PasswordRecovery'
import SignupModal from './components/sign-up-modal/SignupModal'
import CustomerRegistration from './pages/sign-up/customer-sign-up/customer-registration/CustomerRegistration'
import CustomerActivate from './pages/sign-up/customer-sign-up/customer-activate-account/CustomerActivate'

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
		<Route path='/sign-up-modal' element={<SignupModal  />} />
		<Route path='vendor-registration' element={<VendorRegistration  />} />
		<Route path='vendor-dashboard' element={<VendorDashboard  />} />
		<Route path='/vendor-activate-account' element={<VendorActivate />} />
		<Route path='/verify-bvn' element={<VendorBvn />} />
		<Route path='/set-password' element={<VendorSetPassword />} />
		<Route path='/transaction-pin' element={<VendorTransactionPin />} />
		<Route path='/security-question' element={<VendorSecurity />} />
		<Route path='/customer-registration' element={<CustomerRegistration />} />
		<Route path='/customer-activate-account' element={<CustomerActivate />} />
	</Routes>
  )
}

export default App
