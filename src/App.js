import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AppLayout from './components/Layout/AppLayout'
import About from './pages/home/src/components/About/About'
import Faq from './pages/home/src/components/Faq/Faq'
import KnowMore from './pages/home/src/components/knowMore/KnowMore'
import HomePage from './pages/home/src/HomePage'
import Signin from './pages/sign-in/Signin'
import VendorSetPassword from './pages/sign-up/vendor-sign-up/vendor-set-password/VendorSetPassword'
import VendorRegistration from './pages/sign-up/vendor-sign-up/vendor-registration/VendorRegistration'
// import Vendorsignup from './pages/sign-up/vendor-sign-up/Vendorsignup'
import VendorBvn from './pages/sign-up/vendor-sign-up/VendorBvn/VendorBvn'
import VendorTransactionPin from './pages/sign-up/vendor-sign-up/vendor-transaction-pin/VendorTransactionPin'
import VendorSecurity from './pages/sign-up/vendor-sign-up/Vendor-security-question/VendorSecurity'
import VendorActivate from './pages/sign-up/vendor-sign-up/vendor-activate-account/VendorActivate'
import PasswordRecovery from './pages/password-recovery/PasswordRecovery'
import SignupModal from './components/sign-up-modal/SignupModal'

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
		<Route path='/sign-up-modal' element={<SignupModal  />} />
		<Route path='vendor-registration' element={<VendorRegistration  />} />
		<Route path='/vendor-verify-bvn' element={<VendorBvn />} />
		<Route path='/vendor-set-password' element={<VendorSetPassword />} />
		<Route path='/vendor-transaction-pin' element={<VendorTransactionPin />} />
		<Route path='/vendor-security-question' element={<VendorSecurity />} />
		<Route path='/vendor-activate-account' element={<VendorActivate />} />
		<Route path='/password-recovery' element={<PasswordRecovery />} />
	</Routes>
  )
}

export default App          
