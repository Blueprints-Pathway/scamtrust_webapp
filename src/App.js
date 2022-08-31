import React from "react";
import { Route, Routes } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import Signin from "./pages/auth/Signin";
import CustomerDashboard from "./pages/dashboard/CustomerDashboard";
import CustomerSignup from "./pages/auth/CustomerSignup";
import VendorDetails from "./pages/vendor/VendorDetails";
import CustomerBVN from "./components/customerSignup/CustomerBVN";
import CustomerTransaction from "./components/customerSignup/CustomerTransaction";
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
import VendorSetPin from "./pages/auth/VendorSetpin";
import CustomerSetpin from "./pages/auth/CustomerSetpin";
import VendorSetPassword from "./pages/auth/VendorSetPassword";
import SecurityQuestion from "./pages/auth/VendorSecurityQuestion";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import CustomerSetPassword from "./pages/auth/CustomerSetPassword";
import CustomerSecurityQuestion from "./pages/auth/CustomerSecurityQuestion";
import Ratting from "./pages/vendor/Ratting";

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
        <Route path="/settings" element={<SettingsVendor />} />
        <Route path="/support" element={<Support />} />
        <Route path="/vendor-rating" element={<VendorRating />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        < Route path="/customer-ratting" element={<Ratting />}/>
      </Route>

      <Route
        path="/customer-signup-setpassword"
        element={<CustomerSetPassword />}
      />
      <Route path="/customer-signup" element={<CustomerSignup />} />
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
    </Routes>
  );
}

export default App;
