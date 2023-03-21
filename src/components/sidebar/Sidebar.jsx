import { Form, Layout, Menu, theme, Badge, Avatar } from "antd"
import React from "react"
import "./Sidebar.css"
import { VscArrowSwap } from "react-icons/vsc"
import { SlSettings } from "react-icons/sl"
import { CiWallet } from "react-icons/ci"
import { VscHome } from "react-icons/vsc"
import { BiSupport } from "react-icons/bi"
import { IoLogOutOutline } from "react-icons/io5"
import { MdNotificationsNone } from "react-icons/md"
import search from "../../assets/images/search.png"
import scamTrustLogo from "../../assets/images/scamTrustLogo.png"
import CustomerDashboard from "../../pages/dashboards/CustomerDashboard/CustomerDashboard"
import {Link} from "react-router-dom"

const { Header, Content, Sider } = Layout

const Sidebar = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  return (
    <div>
      <Sider
        style={{ backgroundColor: "#232164", zIndex: "30" }}
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className='logo' />
        <Menu
          className='sider'
          // theme="dark"
          // mode="inline"
          // defaultSelectedKeys={['4']}
          //   items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
          //     (icon, index) => ({
          //       key: String(index + 1),
          //       icon: React.createElement(icon),
          //       label: `nav ${index + 1}`,
          //     }),
          //   )}
        >
          <div className='sider-logo-con'>
            <img className='sider-logo' src={scamTrustLogo} alt='' />
          </div>

          <div className='side-tab-wrapper'>
            <Link to='/vendordashboard'>
            
              <div className='side-tab-con'>
                <VscHome style={{ color: "#ffff" }} />
                <span className='side-tabs'>DASHBOARD</span>
              </div>
            </Link>

            <div className='side-tab-con'>
              <VscArrowSwap style={{ color: "#ffff" }} />
              <span className='side-tabs'>TRANSACTIONS</span>
            </div>

            <div className='side-tab-con'>
              <CiWallet style={{ color: "#ffff" }} />
              <span className='side-tabs'>WALLET</span>
            </div>

            <div className='side-tab-con'>
              <SlSettings style={{ color: "#ffff" }} />
              <span className='side-tabs'>SETTINGS</span>
            </div>
          </div>

          <div className='side-bottom-tab'>
            <div className='side-tab-con'>
              <BiSupport style={{ color: "#ffff" }} />
              <span className='side-tabs'>SUPPORT</span>
            </div>
            <div className='side-tab-con'>
              <IoLogOutOutline style={{ color: "#ffff" }} />
              <span className='side-tabs'>LOGOUT</span>
            </div>
          </div>
        </Menu>
      </Sider>
    </div>
  )
}
export default Sidebar
