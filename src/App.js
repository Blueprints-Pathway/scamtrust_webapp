/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import About from "./pages/home/src/components/About/About";
import Faq from "./pages/home/src/components/Faq/Faq";
import KnowMore from "./pages/home/src/components/knowMore/KnowMore";
import HomePage from "./pages/home/src/HomePage";
import VendorDashboard from "./pages/dashboards/VendorDashboard/VendorDashboard";
import Sidebar from "./components/sidebar/Sidebar";
import PasswordRecoveryEmail from "./pages/passwordrecovery/PasswordRecoveryEmail";
import PasswordRecoveryPhone from "./pages/passwordrecovery/PasswordRecoveryPhone";
import EmailToken from "./pages/passwordrecovery/EmailToken";
import Confirms from "./pages/passwordrecovery/Confirms";
import Sucess from "./pages/passwordrecovery/Sucess";
const App = () => {
	return (
		<Routes>
			{/* SCAMTRUST LANDING PAGE ROUTE */}
			<Route path="/" element={<HomePage />} />
			<Route path="/faq" element={<Faq />} />
			<Route path="/about" element={<About />} />
			<Route path="/know-more" element={<KnowMore />} />

			{/* SCAMTRUST WEBAPP */}

			<Route path="/layout" element={<AppLayout />} />
			<Route path="passwordrecovery" element={<PasswordRecoveryEmail />} />
			<Route path="tokenemail" element={<EmailToken />} />
			<Route path="passwordrecoveryphone" element={<PasswordRecoveryPhone />} />
			<Route path="/vendordashboard" element={<VendorDashboard />} />
			<Route path="/passwordsucess" element={<Sucess />} />
			<Route path="/confirmpassword" element={<Confirms />} />
		</Routes>
	);
};

export default App;
