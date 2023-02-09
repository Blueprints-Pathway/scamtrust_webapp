/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import Signin from "./pages/auth/Signin";
import CustomerDashboard from "./pages/dashboard/CustomerDashboard";
import CustomerSignup from "./pages/auth/CustomerSignup";
import VendorDetails from "./pages/vendor/VendorDetails";
import CustomerBVN from "./components/customerSignup/CustomerBVN";
// import CustomerTransaction from "./components/customerSignup/CustomerTransaction";
import CustomerTransact from "./components/Pages/CustomerTransact";
import CustomerActivate from "./components/customerSignup/CustomerActivate";
import PrivacySettings from "./components/SettingsVendor/PrivacySettings";
import DashBoardVendor from "./components/DashBoardVendor/DashBoardVendor";
import SettingsVendor from "./components/SettingsVendor/SettingsVendor";
import Support from "./components/support/Support";
import VendorRating from "./components/vendorRating/VendorRating";
import Withdrawal from "./components/Withdrawal/Withdrawal";
// import VendorDashboard from "./components/DashBoardVendor/VendorDashboard";
import VendorTransaction from "./pages/vendor/VendorTransaction";
import Wallet from "./pages/Wallet/Wallet";
import VendorSignup from "./pages/auth/VendorSignup";
import VendorRc from "./pages/auth/VendorRc";
import VendorSetPin from "./pages/auth/VendorSetpin";
import CustomerSetpin from "./pages/auth/CustomerSetpin";
import VendorSetPassword from "./pages/auth/VendorSetPassword";
import SecurityQuestion from "./pages/auth/VendorSecurityQuestion";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import CustomerSetPassword from "./pages/auth/CustomerSetPassword";
import CustomerSecurityQuestion from "./pages/auth/CustomerSecurityQuestion";
import Ratting from "./pages/vendor/Ratting";
import ActivateAccount from "./pages/auth/ActivateAccount";
import PasswordEmail from "../src/passwordRecovery/PasswordEmail";
import PasswordPhoneNumber from "./passwordRecovery/passwordPhoneNumber";
import TokenPhone from "./passwordRecovery/TokenPhone";
import TokenEmail from "./passwordRecovery/TokenEmail";
import Confirms from "./passwordRecovery/Confirms";
import Sucess from "./passwordRecovery/Sucess";
import Faq from "./components/faq/Faq";
import VendorFaq from "./components/faq/VendorFaq";
import BuyerFaq from "./components/faq/BuyerFaq";
import ChatModal from "./components/Pages/CustDashboard/ChatModal";
import InitiateTransaction from "./components/InitiateTransaction/InitiateTransaction";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Signin />} />
			<Route element={<ProtectedRoutes />}>
				<Route path="/customer-dashboard" element={<CustomerDashboard />} />
				<Route path="/vendor-transaction" element={<VendorTransaction />} />
				<Route path="/vendor/:slug" element={<VendorDetails />} />
				<Route path="/customer-transaction" element={<CustomerTransact />} />
				<Route path="/wallet" element={<Wallet />} />
				<Route path="/vendor-dashboard" element={<DashBoardVendor />} />
				<Route path="/settings" element={<SettingsVendor />} />
				<Route path="/support" element={<Support />} />
				<Route path="/vendor-rating" element={<VendorRating />} />
				<Route path="/withdrawal" element={<Withdrawal />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="/vendor-faq" element={<VendorFaq />} />
				<Route path="/buyer-faq" element={<BuyerFaq />} />
				<Route path="/chat" element={<ChatModal />} />
				<Route path="/initiateTransaction" element={<InitiateTransaction />} />

				<Route path="/customer-ratting" element={<Ratting />} />
			</Route>

			<Route
				path="/customer-signup-setpassword"
				element={<CustomerSetPassword />}
			/>
			<Route path="/customer-signup" element={<CustomerSignup />} />
			<Route path="/activate-account" element={<ActivateAccount />} />
			<Route path="/customer-bvn" element={<CustomerBVN />} />
			<Route path="/customer-set-password" element={<CustomerSetPassword />} />
			<Route path="/customer-activate" element={<CustomerActivate />} />
			<Route
				path="/customer-signup-security-question"
				element={<CustomerSecurityQuestion />}
			/>
			<Route path="/customer-signup-setpin" element={<CustomerSetpin />} />
			<Route path="/vendor-signup" element={<VendorSignup />} />
			<Route path="/vendor-signup-rc" element={<VendorRc />} />
			<Route path="/vendor-signup-setpin" element={<VendorSetPin />} />
			<Route
				path="/vendor-signup-setpassword"
				element={<VendorSetPassword />}
			/>
			<Route
				path="/vendor-signup-security-question"
				element={<SecurityQuestion />}
			/>
			<Route path="/password-recovery" element={<PasswordEmail />} />
			<Route path="/phoneNumber" element={<PasswordPhoneNumber />} />
			<Route path="/tokenEmail" element={<TokenEmail />} />
			<Route path="/tokenPhone" element={<TokenPhone />} />
			<Route path="/password-sucess" element={<Sucess />} />
			<Route path="/confirmPassword" element={<Confirms/>} />
		</Routes>
	);
}

export default App;
