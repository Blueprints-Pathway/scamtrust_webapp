import React from "react"
import { Routes, Route } from "react-router-dom"
import About from "./pages/home/src/components/About/About"
import Faq from "./pages/home/src/components/Faq/Faq"
import KnowMore from "./pages/home/src/components/knowMore/KnowMore"
import VendorDashboard from "./pages/dashboards/VendorDashboard/VendorDashboard"
import HomePage from './pages/home/src/HomePage'
import Signin from './pages/sign-in/Signin'
import VendorSetPassword from './pages/sign-up/set-password/SetPassword'
import VendorRegistration from './pages/sign-up/vendor-sign-up/vendor-registration/VendorRegistration'
import VendorBvn from './pages/sign-up/Bvn-verification/VerifyBvn'
import VendorTransactionPin from './pages/sign-up/transaction-pin/TransactionPin'
import VendorSecurity from './pages/sign-up/security-question/SecurityQuestion'
import VendorActivate from './pages/sign-up/vendor-sign-up/vendor-activate-account/VendorActivate'
import SignupModal from './components/sign-up-modal/SignupModal'
import CustomerRegistration from './pages/sign-up/customer-sign-up/customer-registration/CustomerRegistration'
import CustomerActivate from './pages/sign-up/customer-sign-up/customer-activate-account/CustomerActivate'
import CustomerDashboard from "./pages/dashboards/CustomerDashboard/CustomerDashboard"
import Transaction from './pages/transactions/Transactions'
import Awaiting from "./pages/transactions/awaiting/Awaiting"
import Ongoing from "./pages/transactions/ongoing/Ongoing"
import Completed from "./pages/transactions/completed/Completed"
import Cancelled from "./pages/transactions/cancelled/Cancelled"
import Declined from "./pages/transactions/declined/Declined"


const App = () => {
  return (
			
<Routes>
		
		{/* SCAMTRUST LANDING PAGE ROUTE */}
		<Route path='/' element={<HomePage />} />
		<Route path='/faq' element={<Faq />} />
		<Route path='/about' element={<About />} />
		<Route path='/know-more' element={<KnowMore />} />
  
		{/* SCAMTRUST WEBAPP */}
		
		<Route path='/customer-dashboard' element={<CustomerDashboard />} />
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

		                {/* TRANSACTIONS */}
		<Route path='/transactions' element={<Transaction />} />
		<Route path='/awaiting-approval' element={<Awaiting />} />
		<Route path='/ongoing-transaction' element={<Ongoing />} />
		<Route path='/completed-transaction' element={<Completed />} />
		<Route path='/cancelled-transaction' element={<Cancelled />} />
		<Route path='/declined-transaction' element={<Declined />} />
	</Routes>
  )
}

export default App
