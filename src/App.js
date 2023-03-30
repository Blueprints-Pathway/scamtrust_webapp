import React from "react"
import { Routes, Route } from "react-router-dom"
import WithdrawPin from "./components/buttons/withdrawbutton/WithdrawPin"
import AppLayout from "./components/layout/AppLayout"
import Transaction from "./pages/dashboards/transactions/Transaction"
import VendorDashboard from "./pages/dashboards/VendorDashboard/VendorDashboard"
import About from "./pages/home/src/components/About/About"
import Faq from "./pages/home/src/components/Faq/Faq"
import KnowMore from "./pages/home/src/components/knowMore/KnowMore"
import HomePage from "./pages/home/src/HomePage"
import PasswordRecoveryEmail from "./pages/passwordrecovery/PasswordRecoveryEmail"
import PasswordRecoveryPhone from "./pages/passwordrecovery/PasswordRecoveryPhone"
import Settings from "./pages/settings/Settings"

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
      <Route
        path='/passwordrecoveryemail'
        element={<PasswordRecoveryEmail />}
      />
      <Route
        path='/passwordrecoveryphone'
        element={<PasswordRecoveryPhone />}
      />
      <Route
        path='/vendordashboard'
        element={<VendorDashboard/>}
      />
      <Route path="/transaction" element={<Transaction/>}/>
      <Route path="/withdrawpin" element={<WithdrawPin/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Routes>
  )
}

export default App
