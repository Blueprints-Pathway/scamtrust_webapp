import { Layout, Menu, Avatar, Spin} from 'antd';
import React, { useEffect } from 'react';
import './AppLayout.css'
import { VscArrowSwap } from 'react-icons/vsc'
import { SlSettings } from 'react-icons/sl'
import { CiWallet } from 'react-icons/ci'
import { VscHome} from 'react-icons/vsc'
import { BiSupport} from 'react-icons/bi'
import { IoLogOutOutline } from 'react-icons/io5'
import search from '../../assets/images/search.png'
import scamTrustLogo from '../../assets/images/scamTrustLogo.png'
import { getLoggedInUserDetails } from '../../actions/userActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { useNavigate } from 'react-router-dom';
import { getCustomerCancelledTransactions, getCustomerCompletedTransactions, getCustomerOngoingTransactions, getCustomerTransactions } from '../../actions/customerTransactionActions';
import Notifications from './notification/Notifications';
import { listNotifications } from '../../actions/notificationActions';
import { vendorSearch } from '../../actions/miscActions';
import { Link } from 'react-router-dom';
import { getWalletTransactionsDetails } from '../../actions/walletActions';
const { Header, Content, Sider } = Layout;


const AppLayout = ({children}) => {

  const {loading, error, data} = useSelector(state => state.user);
  const notification = useSelector(state => state.notification);
  let detail = localStorage.getItem('USER_DETAILS')
  let usertype =JSON.parse(detail).data.usertype;

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log('get user details' + loading + data + error + auth.isAuthenticated) 
  useEffect(()=>{
    if(!auth.isAuthenticated){
      navigate('/sign-in')
      return;
    }
    dispatch(getLoggedInUserDetails());
    dispatch(getCustomerTransactions());
    dispatch(getCustomerOngoingTransactions());
    dispatch(getWalletTransactionsDetails())
    dispatch(getCustomerCancelledTransactions());
    dispatch(getCustomerCompletedTransactions());
    dispatch(listNotifications());
    
  },[dispatch, auth.isAuthenticated])
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  console.log(data);
  const nameOf = loading ? 'hi' : data?.data?.name || data?.data?.username;
	const first = nameOf?.at(0);
	const last = nameOf?.match(/\b(\w)/g).at(1);

  const logoutUserHandler = () => {
    dispatch(logoutUser());
    console.log('logout from app layout')
    navigate('/sign-in')
  }
  console.log(notification.unreadNotifications)

  const searchInputChangeHandler = (e) => {
    console.log(e.target.value)
    dispatch(vendorSearch({
      search: e.target.value
    }))
  }
  return (
    <Layout  className='wrapper'>
      { loading ? 
      <Spin
       spinning
       style={{margin:'auto'}}
       size='large'

      />:
        <React.Fragment>

      <Sider
      style={{backgroundColor: "#232164", zIndex: '30'}}
      breakpoint="lg"
        collapsedWidth="0"
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
        >
          <div className='sider-logo-con'>
            <img className='sider-logo' src={scamTrustLogo} alt='' />
          </div>

          <div className='side-tab-wrapper'>
               <div className='side-tab-con'>
                <VscHome style={{color: '#ffff'}} /><span onClick={usertype === 'VENDOR'? () => navigate('/vendor-dashboard') : ()=>navigate('/customer-dashboard')}
                className='side-tabs'>DASHBOARD</span>
               </div>
     
               <div className='side-tab-con'>
                <VscArrowSwap style={{color: '#ffff'}} /><span onClick={()=>navigate('/transactions')}
                className='side-tabs'>TRANSACTIONS</span>
               </div>

               <div className='side-tab-con'>
               <CiWallet style={{color: '#ffff'}} /><span className='side-tabs' onClick={()=>navigate('/wallet')}
               >WALLET</span>
               </div>

               <Link to={"/settings"} className='side-tab-con'>
                <SlSettings style={{color: '#ffff'}} /><span className='side-tabs'>SETTINGS</span>
               </Link>
          </div>

          <div className='side-bottom-tab'>
            <div className='side-tab-con'>
              <BiSupport style={{ color: "#ffff" }} />
              <span className='side-tabs'>SUPPORT</span>
            </div>
            <div className='side-tab-con' onClick={logoutUserHandler}>
              <IoLogOutOutline  style={{color: '#ffff'}} /><span className='side-tabs'>LOGOUT</span>
            </div>
          </div>
        </Menu>
      </Sider>

      <Layout className='content-con'>
        <Header className='header'>
          <div className='header-div1'>
            <p className='header-dash'>Dashboard</p>
          </div>

        <div className='header-right-div'>
              {/* SEARCH INPUT  */}
          <div className='header-div-2'>
            <div className='header-input-icon'> <img className='input-icon-img' src={search} alt="..." /> </div>
            <input onChange={searchInputChangeHandler} className='header-input' type="text" placeholder='Search vendor’s name' />
          </div>

                  {/* NOTIFICATION */}
          <div className='header-div-3'>
             <Notifications />
          </div>

                     {/* INITIALS */}
           <div>
             <Avatar className='header-avatar'>
              <p className='header-initials'>{first} {last}</p>
             </Avatar>
          </div>        
       </div>
        </Header>

                     {/* INNER CONTENT */}
        <Content className='layout-content' style={{margin: '0px 16px', color: 'black'}}>
              {children}
        </Content>
      </Layout>
            </React.Fragment>}
    </Layout>
  )
}
export default AppLayout
