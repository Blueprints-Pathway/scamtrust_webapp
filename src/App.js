import React from "react";
import { Route, Routes } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import Signin from "./pages/auth/Signin";
import CustomerDashboard from "./pages/dashboard/CustomerDashboard";
import CustomerSignup from "./pages/auth/CustomerSignup";
import VendorDetails from "./pages/vendor/VendorDetails";
import CustomerBVN from "./components/customerSignup/CustomerBVN";
import CustomerTransaction from "./components/customerSignup/CustomerTransaction";
import CustomerSecurityQuestion from "./components/customerSignup/CustomerSecurityQuestion";
import CustomerActivate from "./components/customerSignup/CustomerActivate";
import PrivacySettings from "./components/SettingsVendor/PrivacySettings";
import DashBoardVendor from "./components/DashBoardVendor/DashBoardVendor";
import SettingsVendor from "./components/SettingsVendor/SettingsVendor";
import Support from "./components/support/Support";
import VendorRating from "./components/vendorRating/VendorRating";
import Withdrawal from "./components/Withdrawal/Withdrawal";
import VendorDashboard from "./components/DashBoardVendor/VendorDashboard";
import VendorTransaction from "./pages/vendor/VendorTransaction";
import Wallet from "./pages/Wallet/Wallet";
import VendorSignup from "./pages/auth/VendorSignup";
import VendorRc from "./pages/auth/VendorRc";
import SetPin from "./pages/auth/VendorSetpin";
import VendorSetPassword from "./pages/auth/VendorSetPassword";
import SecurityQuestion from "./pages/auth/VendorSecurityQuestion";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import CustomerSetPassword from "./pages/auth/CustomerSetPassword";

// import CustomerTransaction from "./pages/VendorTransaction";
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
// import VendorTransactionCancellation from "./pages/VendorTransactionCancellation";
// import CustomerSignup from "./pages/signup/Signup";
// import SetPassword from "./components/signup/setPassword";
// import Transaction from "./components/signup/Transaction";
// import SecurityQuestion from "./components/signup/SecurityQuestion";
// import Activate from "./components/signup/Activate";
// import SideBar from "./components/SideBar/SideBar";
// import SettingsVendor from "./components/SettingsVendor/SettingsVendor";
// import VendorTransactionDetails from "./pages/VendorTransactionDetails";
// import VendorTransactionCompleted from "./pages/VendorTransactionCompleted";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/customer-transaction" element={<VendorTransaction />} />
        <Route path="/vendor/:slug" element={<VendorDetails />} />
        <Route path="/customer-transaction" element={<CustomerTransaction />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/vendor-dashboard" element={<DashBoardVendor />} />
        <Route path="/vendor-settings" element={<SettingsVendor />} />
        <Route path="/support" element={<Support />} />
        <Route path="/vendor-rating" element={<VendorRating />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
      </Route>

      <Route
        path="/signup/customer-set-password"
        element={<CustomerSetPassword />}
      />
      <Route path="/customer-signup" element={<CustomerSignup />} />
      <Route path="/customer-bvn" element={<CustomerBVN />} />
      <Route path="/customer-set-password" element={<CustomerSetPassword />} />
      <Route path="/customer-activate" element={<CustomerActivate />} />
      <Route
        path="/customer-security-question"
        element={<CustomerSecurityQuestion />}
      />
      <Route path="/vendor-signup" element={<VendorSignup />} />
      <Route path="/vendor-signup-rc" element={<VendorRc />} />
      <Route path="/vendor-signup-setpin" element={<SetPin />} />
      <Route
        path="/vendor-signup-setpassword"
        element={<VendorSetPassword />}
      />
      <Route
        path="/vendor-signup-security-question"
        element={<SecurityQuestion />}
      />
      {/* <Route path="/signup" element={<SetPassword />} /> */}
      {/* <Route path="/signup/customer" element={<CustomerSignup />} /> */}
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
