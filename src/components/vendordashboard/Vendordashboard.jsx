import React from "react"

import { Form, Layout, Menu, theme, Badge, Avatar } from "antd"
import { MdNotificationsNone } from "react-icons/md"
import search from "../../assets/images/search.png"


import './Vendordashboard.css'

import VendorDashboard from "../../pages/dashboards/VendorDasboardDetails/VendorDashboard"

const { Header, Content, Sider } = Layout
const Vendordashboard = () => {
  return <div>
 <Layout className='content-con'>
        <Header className='header'>
          <div className='header-div1'>
            <p className='header-dash'>Dashboard</p>
          </div>

        <div className='header-right-div'>
           
          

                  {/* NOTIFICATION */}
          <div className='header-div-3'>
              <Badge count={7} overflowCount={99}>
                    <div>
                     <MdNotificationsNone className='header-notification-icon' style={{ fill: '#232164' }} />
                    </div>
             </Badge>
          </div>

                     {/* INITIALS */}
           <div>
             <Avatar className='header-avatar'>
              <p className='header-initials'>CO</p>
             </Avatar>
          </div>        
       </div>
        </Header>

                     {/* INNER CONTENT */}
        <Content className='layout-content' style={{margin: '0px 16px', color: 'black'}}>
        <VendorDashboard />
        </Content>

        
      </Layout>
  </div>
}
export default Vendordashboard
