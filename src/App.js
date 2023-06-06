/** @format */
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/home/src/components/About/About";
import Faq from "./pages/home/src/components/Faq/Faq";
import KnowMore from "./pages/home/src/components/knowMore/KnowMore";
import HomePage from "./pages/home/src/HomePage";
import Signin from "./pages/sign-in/Signin";
import VendorSetPassword from "./pages/sign-up/set-password/SetPassword";
import VendorRegistration from "./pages/sign-up/vendor-sign-up/vendor-registration/VendorRegistration";
import VendorBvn from "./pages/sign-up/Bvn-verification/VerifyBvn";
import VendorTransactionPin from "./pages/sign-up/transaction-pin/TransactionPin";
import VendorSecurity from "./pages/sign-up/security-question/SecurityQuestion";
import VendorActivate from "./pages/sign-up/vendor-sign-up/vendor-activate-account/VendorActivate";
import SignupModal from "./components/sign-up-modal/SignupModal";
import CustomerRegistration from "./pages/sign-up/customer-sign-up/customer-registration/CustomerRegistration";
import CustomerActivate from "./pages/sign-up/customer-sign-up/customer-activate-account/CustomerActivate";
import CustomerDashboard from "./pages/dashboards/CustomerDashboard/CustomerDashboard";
import Transaction from "./pages/transactions/Transactions";
import Awaiting from "./pages/transactions/awaiting/Awaiting";
import Ongoing from "./pages/transactions/ongoing/Ongoing";
import Completed from "./pages/transactions/completed/Completed";
import Cancelled from "./pages/transactions/cancelled/Cancelled";
import Declined from "./pages/transactions/declined/Declined";
import CancelReason from "./pages/transactions/cancel-reason/CancelReason";
import VendorDetails from "./pages/vendorprofile/VendorDetails";
import Wallet from "./pages/Wallet/Wallet";
import SettingsVendor from "../src/pages/SettingsVendor/SettingsVendor";
import VendorDashboard from "./pages/dashboards/VendorDashboard/VendorDashboard";
import Support from "./pages/support/Support";
import Ratting from "./components/transactions/ratting/Ratting";
import Fundbutton from "./components/buttons/fundbutton/Fundbutton"
import FaqPage from "./pages/faqPage/FaqPage"
import RateTransactions from "./pages/transactions/RateTransaction/RateTransactions";
import ViewRattings from "./pages/transactions/viewRattings/ViewRattings";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard"
import UsersListPage from "./pages/admin/UsersListPage"
import TokenEmail from "./pages/SettingsVendor/TokenEmail";
import TokenPhone from "./pages/SettingsVendor/TokenPhone";
import PasswordEmail from "./pages/passwordRecovery/PasswordEmail";
import PasswordPhoneNumber from "./pages/passwordRecovery/passwordPhoneNumber";
import Sucess from "./pages/passwordRecovery/Sucess";
import Confirms from "./pages/passwordRecovery/Confirms";
import AccountDeletionRequestPage from "./pages/account-deletion/AccountDeletionRequestPage";
import NewAdminDashboard from "./pages/newAdmin/NewAdminDashboard";
import AdminTransaction from "./pages/newAdmin/AdminTransactionPage";
import UserManagement from "./pages/newAdmin/user-management/UserManagementPage";
import AdminUserProfile from "./pages/newAdmin/user-management/AdminUserProfile";
import UserRegistrationPage from "./pages/newAdmin/user-management/UserRegistrationPage";
import RolesPermission from "./pages/newAdmin/user-management/RolesPermission";
import AdminWithdrawals from "./pages/newAdmin/AdminWithdrawals";
import AdminReconcillation from "./pages/newAdmin/admin-reconcillation/adminReconcillation";



const App = () => {
	return (
		<Routes>
			{/* SCAMTRUST LANDING PAGE ROUTE */}
			<Route path="/" element={<HomePage />} />
			<Route path="/faq" element={<Faq />} />
			<Route path="/about" element={<About />} />
			<Route path="/know-more" element={<KnowMore />} />

              
			        {/* SCAMTRUST  ADMIN */}
			<Route path="/new-admin-dashboard" element={<NewAdminDashboard />} />
			<Route path="/admin-transaction" element={<AdminTransaction />} />
			<Route path="/admin-user-management" element={<UserManagement />} />
			<Route path="/admin-user-profile" element={<AdminUserProfile />} />
			<Route path="/admin-withdrawals" element={<AdminWithdrawals />} />
			<Route path="/admin-reconcillation" element={<AdminReconcillation />} />
			<Route path="/user-registration" element={<UserRegistrationPage />} />
			<Route path="/roles-permission" element={<RolesPermission />} />


		{/* SCAMTRUST WEBAPP */}
		<Route path='/customer-dashboard' element={<CustomerDashboard />} />
		<Route path="customer-dashboard/request-account-deletion" element={<AccountDeletionRequestPage /> } />
		<Route path='/admin-dashboard' element={<AdminDashboard />} />
		<Route path='/vendor-dashboard' element={<VendorDashboard />} />
		<Route path='/users-list' element={<UsersListPage />} />
		<Route path='/sign-in' element={<Signin />} />
		<Route path='/sign-up-modal' element={<SignupModal  />} />
		<Route path='vendor-registration' element={<VendorRegistration  />} />
		<Route path='/vendor-activate-account' element={<VendorActivate />} />
		<Route path='/verify-bvn' element={<VendorBvn />} />
		<Route path='/set-password' element={<VendorSetPassword />} />
		<Route path='/transaction-pin' element={<VendorTransactionPin />} />
		<Route path='/security-question' element={<VendorSecurity />} /> 
		<Route path='/faq-page' element={<FaqPage />} /> 
		<Route path='/support' element={<Support />} />
		<Route  path='/settings'
        element={<SettingsVendor/>}/>
      
	
		<Route path='/customer-registration' element={<CustomerRegistration />} />
		<Route path='/customer-activate-account' element={<CustomerActivate />} />
		<Route path="/vendor/:slug" element={<VendorDetails/>} />
		<Route path="/password-recovery" element={<PasswordEmail />} />
			<Route path="/phoneNumber" element={<PasswordPhoneNumber />} />
			<Route path="/tokenEmail" element={<TokenEmail />} />
			<Route path="/tokenPhone" element={<TokenPhone />} />
			<Route path="/password-sucess" element={<Sucess />} />
			<Route path='confirmPassword' element={<Confirms /> } />

			{/* TRANSACTIONS */}
			<Route path="/transactions" element={<Transaction />} />
			<Route path="/awaiting-approval/:id" element={<Awaiting />} />
			<Route path="/ongoing-transaction/:id" element={<Ongoing />} />
			<Route path="/ongoing-transaction/:id/ratting" element={<Ratting />} />
			<Route path="/completed-transaction/:id" element={<Completed />} />
			<Route path="/cancelled-transaction/:id" element={<Cancelled />} />
			<Route path="/declined-transaction" element={<Declined />} />
			<Route path="/cancel-reason/:id" element={<CancelReason />} />
			<Route path="/rate-vendor" element={<RateTransactions />} />
			<Route path="/view-rattings" element={<ViewRattings />} />
			<Route path="/rate-vendor" element={<RateTransactions />} />
			
			{/* 
			
                              WALLET */}
		<Route path='/wallet' element={<Wallet />} />
		<Route path='/fund-wallet' element={<Fundbutton />} />


	</Routes>
  )
}

export default App;
