import { Routes, Route } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import Signin from "./pages/auth/Signin";
import CustomerDashboard from "./pages/dashboard/CustomerDashboard";
import CustomerSignup from "./pages/auth/CustomerSignup";
import SetPassword from "./pages/auth/SetPassword";
import VendorDetails from "./pages/vendor/VendorDetails";

// import PasswordEmail from "./passwordRecovery/PasswordEmail";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Email from "./passwordRecovery/TokenEmail";
// import Confirm from "./passwordRecovery/Confirms";
// import PasswordPhoneNumber from "./passwordRecovery/passwordPhoneNumber";
// import TokenPhone from "./passwordRecovery/TokenPhone";
// import Sucess from "./passwordRecovery/Sucess";
// import "./App.css";
// import DashboardModal from "./components/DashBoard/DashboardModal";
// import Wallet from "./components/wallet/wallet";
// import CustomerWallet from "./components/wallet/CustomerWallet";
// import SetPassword from "./pages/SetPin";
// import CustomerTransaction from "./pages/VendorTransaction";
// import VendorTransactionCancellation from "./pages/VendorTransactionCancellation";
// import CustomerSignup from "./pages/signup/Signup";
// import SetPassword from "./components/signup/setPassword";
// import Transaction from "./components/signup/Transaction";
// import SecurityQuestion from "./components/signup/SecurityQuestion";
// import Activate from "./components/signup/Activate";
// import SideBar from "./components/SideBar/SideBar";
// import SettingsVendor from "./components/SettingsVendor/SettingsVendor";
// import VendorTransaction from "./pages/VendorTransaction";
// import VendorTransactionDetails from "./pages/VendorTransactionDetails";
// import VendorTransactionCompleted from "./pages/VendorTransactionCompleted";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/customer-dashboard" element={<CustomerDashboard />} />
      <Route path="/signup/vendor" element={<CustomerSignup />} />
      <Route path="/signup/set-password" element={<SetPassword />} />
      <Route path="/vendor" element={<VendorDetails />} />
      {/* <Route path="/signup" element={<SetPassword />} /> */}
      {/*<Route path="/customersignup" element={<CustomerSignup />} />
      <Route path="/email" element={<PasswordEmail />} />
      <Route path="/token" element={<Email />} />
      <Route path="/confirmPassword" element={<Confirm />} />
      <Route path="/phoneNumber" element={<PasswordPhoneNumber />} />
      <Route path="/tokenPhone" element={<TokenPhone />} />
      <Route path="/sucess" element={<Sucess />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/Customerwallet" element={<CustomerWallet />} />
      <Route path="/vendor-transaction" element={<VendorTransaction />} />
      <Route
        path="/vendor-transaction/:slug"
        element={<VendorTransactionDetails />}
      />
      <Route
        path="/vendor-transaction-completed/:slug"
        element={<VendorTransactionCompleted />}
      /> */}
      {/* <Route
        path="/vendor-transaction-cancel/"
        element={<VendorTransactionCancellation />}
      />
      <Route path="/setPassword" element={<SetPassword />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/activate" element={<Activate />} />
      <Route path="/securityquestion" element={<SecurityQuestion />} />
      <Route path="/sideBar" element={<SideBar />} />
      <Route path="/settingsVendor" element={<SettingsVendor />} /> */}
    </Routes>
  );
}

export default App;
