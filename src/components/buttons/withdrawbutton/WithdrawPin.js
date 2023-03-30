import { Form, Layout, Menu, theme, Badge, Avatar } from "antd"
import React from "react"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import "../../Layout/AppLayout.css"
import { VscArrowSwap } from "react-icons/vsc"
import { SlSettings } from "react-icons/sl"
import { CiWallet } from "react-icons/ci"
import { VscHome } from "react-icons/vsc"
import { BiSupport } from "react-icons/bi"
import { IoLogOutOutline } from "react-icons/io5"
import { MdNotificationsNone } from "react-icons/md"
import CustDashTransaction from "../../customerdashboard/CustDashTransaction/CustDashTransaction"
import CustomerProfileCard from "../../customerdashboard/CustomerProfileCard/CustomerProfileCard"
import FaqandChat from "../../customerdashboard/Faq&Chat/FaqandChat"
import FeeCalculator from "../../customerdashboard/FeeCalculator/FeeCalculator"
import scamTrustLogo from "../../../assets/images/scamTrustLogo.png"
import search from "../../../assets/images/search.png"
import FooterLogo from "../../FooterLogo/FooterLogo"
const { Header, Content, Sider } = Layout
function WithdrawPin() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }

  return (
    <div>
      <Layout className='wrapper'>
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
              <div className='side-tab-con'>
                <VscHome style={{ color: "#ffff" }} />
                <span className='side-tabs'>DASHBOARD</span>
              </div>

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

        <Layout className='content-con'>
          <Header className='header'>
            <div className='header-div1'>
              <p className='header-dash'>Dashboard</p>
            </div>

            <div className='header-right-div'>
              {/* SEARCH INPUT  */}
              <div className='header-div-2'>
                <div className='header-input-icon'>
                  {" "}
                  <img className='input-icon-img' src={search} alt='...' />{" "}
                </div>
                <input
                  className='header-input'
                  type='text'
                  placeholder='Search vendor’s name'
                />
              </div>

              {/* NOTIFICATION */}
              <div className='header-div-3'>
                <Badge count={7} overflowCount={99}>
                  <div>
                    <MdNotificationsNone
                      className='header-notification-icon'
                      style={{ fill: "#232164" }}
                    />
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
          <Content
            className='layout-content'
            style={{ margin: "0px 16px", color: "black" }}
          >
            <div className='cust-dash-wrapper'>
              <div className='cust-dash-left'>
                <CustomerProfileCard />
           
                <Modal
                  aria-labelledby='transition-modal-title'
                  aria-describedby='transition-modal-description'
                  slots={{ backdrop: Backdrop }}
                  slotProps={{
                    backdrop: {
                      timeout: 500,
                    },
                  }}
                >
                  <Fade>
                    <Box sx={style}>
                      <Typography
                        id='transition-modal-title'
                        variant='h6'
                        component='h2'
                      >
                        <div className=' w-[100%]   h-[310px] border border-[#5253E9] rounded-[20px] flex flex-col px-4 lg:py-6 py-5 mt-5'>
                          <div className=' '>
                            <div>
                              <h5 className='font-space text-[#838699] text-[14px]  font-normal '>
                                Address
                              </h5>
                              <h4 className='font-space font-bold text-[16px] text-dimWhite mt-2 border-b border-[#41434F] pb-1  overmee'>
                                ddd
                              </h4>
                            </div>
                            <div className='mt-1 mb-2'>
                              <h5 className='text-[#838699] text-[14px]  font-normal mb-2 '>
                                Username
                              </h5>
                              <div className='flex w-[100%] justify-start pl-2 rounded-[8px] items-center h-[36px] border-[1px] border-[#838699]'>
                                <input
                                  type='text'
                                  className='font-space bg-transparent pl-1 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D] text-[16px]'
                                  placeholder='Enter Coin Name / Address'
                                />
                              </div>
                            </div>
                            <div className='mt-1 mb-3'>
                              <h5 className='font-space text-[#838699] text-[14px]  font-normal mb-2 '>
                                Phone Number
                              </h5>
                              <div className='flex w-[100%]  justify-start pl-2 rounded-[8px] items-center h-[36px] border-[1px]  border-[#838699]'>
                                <input
                                  type='text'
                                  className='font-space bg-transparent pl-1 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D] text-[16px]'
                                  placeholder='Enter Coin Name / Address'
                                />
                              </div>
                            </div>

                            <button className='font-inter text-[14px] mt-5 font-bold text-white w-[77px] h-[33px]  sm:w-[107px] sm:h-[44px]  flex justify-center items-center bg-[#5253E9] rounded-[10px]'>
                              Save
                            </button>
                          </div>
                        </div>
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
                <FeeCalculator />
                <div className='cust-dash-bigScreen'>
                  <FaqandChat />
                  <FooterLogo />
                </div>
              </div>

              <div className='cust-dash-right'>
                <CustDashTransaction />
                <div className='cust-dash-smallScreen'>
                  <FaqandChat />
                  <FooterLogo />
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default WithdrawPin
