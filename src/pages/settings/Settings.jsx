import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Sidebar from "../../components/sidebar/Sidebar"
const Settings = () => {
  return (
   <div>
    <Router>
<Routes>
<Sidebar/>

</Routes>
    </Router>
  
   </div>
  )
}

export default Settings