import React from "react"
import Sidebar from "../../../components/sidebar/Sidebar"

import "./VendorDashboard.css"
import { Form, Layout, Menu, theme, Badge, Avatar } from "antd"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Vendordashboard from "../../../components/vendordashboard/Vendordashboard"
const { Header, Content, Sider } = Layout
const VendorDashboard = () => {
  return (
    <div>
       
      <Layout className='wrapper'>
        <Sidebar />
      
        <Vendordashboard/>
       
      
    
      
      </Layout>
    
    </div>
  )
}
export default VendorDashboard
