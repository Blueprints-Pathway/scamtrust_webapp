import PasswordEmail from "./passwordRecovery/PasswordEmail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Email from "./passwordRecovery/TokenEmail";
import Confirm from "./passwordRecovery/Confirms";
import PasswordPhoneNumber from "./passwordRecovery/passwordPhoneNumber";
import TokenPhone from "./passwordRecovery/TokenPhone";
import Sucess from "./passwordRecovery/Sucess";
import Dashboard from "./components/DashBoard/DashBoard"
import "./App.css";
import DashboardModal from "./components/DashBoard/DashboardModal"
import Wallet from "./components/wallet/wallet";
import CustomerWallet from "./components/wallet/CustomerWallet";
import Signup from "./pages/Signup";
import CustomerSignup from "./pages/customer/CustomerSignup";
import CustomerTransaction from "./pages/VendorTransaction";
import TransactionCancellation from "./pages/TransactionCancellation";
// import Signup from "./components/signup/Signup";
import BVN from "./components/signup/BVN";
import SetPassword from "./components/signup/setPassword";
import Transaction from "./components/signup/Transaction";
import SecurityQuestion from "./components/signup/SecurityQuestion";
import Activate from "./components/signup/Activate";
import SideBar from "./components/SideBar/SideBar";
import SettingsVendor from "./components/SettingsVendor/SettingsVendor";
import VendorTransaction from "./pages/VendorTransaction";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/customersignup" element={<CustomerSignup />} />
      <Route path="/email" element={<PasswordEmail />} />
      <Route path="/token" element={<Email />} />
      <Route path="/confirmPassword" element={<Confirm />} />
      <Route path="/phoneNumber" element={<PasswordPhoneNumber />} />
      <Route path="/tokenPhone" element={<TokenPhone />} />
      <Route path="/sucess" element={<Sucess />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/Customerwallet" element={<CustomerWallet />} />
      <Route path="/" element={<Signup />} />
      <Route path="/vendor-transaction" element={<VendorTransaction />} />
      <Route path="/bvn" element={<BVN />} />
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
