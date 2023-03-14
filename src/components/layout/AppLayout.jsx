import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
import './AppLayout.css'
// import { HomeOutlined, SettingOutlined, WalletOutlined } from '@ant-design/icons'
// import { GrTransaction } from 'react-icons/gr'
// import { IoLogOutOutline } from 'react-icons/io5'
import scamTrustLogo from '../../assets/images/scamTrustLogo.png'
import support from '../../assets/images/support.png'
import dashboard from '../../assets/images/home.png'
import transactions from '../../assets/images/transfer.png'
import wallet from '../../assets/images/Wallet.png'
import settings from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'


const { Header, Content, Footer, Sider } = Layout;

const AppLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className='wrapper'>
      <Sider
      style={{backgroundColor: "red"}}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
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
            <img className='sider-logo' src={scamTrustLogo} alt="" />
          </div>

          <div className='side-tab-wrapper'>
               <div className='side-tab-con'>
                <img src={dashboard} alt="" /><span className='side-tabs'>DASHBOARD</span>
               </div>
     
               <div className='side-tab-con'>
                <img src={transactions} alt="" /><span className='side-tabs'>TRANSACTIONS</span>
               </div>

               <div className='side-tab-con'>
               <img src={wallet} alt="" /><span className='side-tabs'>WALLET</span>
               </div>

               <div className='side-tab-con'>
                <img src={settings} alt="" /><span className='side-tabs'>SETTINGS</span>
               </div>
          </div>

          <div className='side-bottom-tab'>
            <div className='side-tab-con'>
              <img src={support} alt="" /><span className='side-tabs'>SUPPORT</span>
            </div>
            <div className='side-tab-con'>
              <img src={logout} alt="" /><span className='side-tabs'>LOGOUT</span>
            </div>
          </div>

          </Menu>
      </Sider>

      <Layout className='content-con'>
        <Header className='header' />
        <Content
          style={{
            margin: '20px 16px 0'
          }}
        >
          <div className='content'>
            content
          </div>
        </Content>

        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default AppLayout;