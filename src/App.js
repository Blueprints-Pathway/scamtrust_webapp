import PasswordEmail from "./passwordRecovery/PasswordEmail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Email from "./passwordRecovery/TokenEmail";
import Confirm from "./passwordRecovery/Confirms";
import PasswordPhoneNumber from "./passwordRecovery/passwordPhoneNumber";
import TokenPhone from "./passwordRecovery/TokenPhone";
import Sucess from "./passwordRecovery/Sucess";
// import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";
import DashboardModal from "./components/dashboard/DashboardModal";
import Wallet from "./components/wallet/wallet";
import CustomerWallet from "./components/wallet/CustomerWallet";
// import Signup from "./pages/Signup";
// import CustomerSignup from "./pages/customer/CustomerSignup";
import CustomerTransaction from "./pages/VendorTransaction";
import TransactionCancellation from "./pages/TransactionCancellation";
import Signup from "./components/customerSignup/Signup";
import BVN from "./components/customerSignup/BVN";
import SetPassword from "./components/customerSignup/setPassword";
import Transaction from "./components/customerSignup/Transaction";
import SecurityQuestion from "./components/customerSignup/SecurityQuestion";
import Activate from "./components/customerSignup/Activate";
import SideBar from "./components/SideBar/SideBar";
// import Dashboard from "./components/dashboard/Dashboard";
// import DashBoard from './components/dashboard/Dashboard';
import SettingsVendor from "./components/SettingsVendor/SettingsVendor";
import VendorDashboard from "./components/dashboard/CustomerDashboard";
import VendorSignup from "./pages/VendorSignup";
import Signin from "./pages/Signin";
import DashboardCustomer from "./components/dashboard/DashBoard";
import DashBoard from "./components/dashboard/DashBoard";
import Register from "./pages/Register";

function App() {
	return (
		<Routes>
			<Route path="/vendordashboard" element={<DashBoard />} />
			<Route path="/modal" element={<DashboardModal />} />
			<Route path="/dashboard" element={<VendorDashboard />} />
			<Route path="/customersignup" element={<Signup />} />
			<Route path="/email" element={<PasswordEmail />} />
			<Route path="/token" element={<Email />} />
			<Route path="/confirmPassword" element={<Confirm />} />
			<Route path="/phoneNumber" element={<PasswordPhoneNumber />} />
			<Route path="/tokenPhone" element={<TokenPhone />} />
			<Route path="/sucess" element={<Sucess />} />
			
			<Route path="/wallet" element={<Wallet />} />
			<Route path="/Customerwallet" element={<CustomerWallet />} />
			<Route path="/vendorsignup" element={<Register />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/bvn" element={<BVN />} />
			<Route path="/signin" element={<Signin />} />
			<Route path="/setPassword" element={<SetPassword />} />
			<Route path="/transaction" element={<Transaction />} />
			<Route path="/activate" element={<Activate />} />
			<Route path="/securityquestion" element={<SecurityQuestion />} />

			<Route path="/sideBar" element={<SideBar />} />

			<Route path="/settingsVendor" element={<SettingsVendor />} />
		</Routes>
	);
}

export default App;
