import React from "react"
import "./Withdrawbutton.css"
import { IconContext } from "react-icons/lib"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import footer from "../../../assets/images/footerLogo.png"
import success from "../../../assets/images/success.png"
import { AiOutlineClose } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
const Withdrawbutton = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [isWithdraw, setIsWithdraw] = React.useState(true)
  const [isSuccess, setIsSuccess] = React.useState(true)
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }

  return (
    <div className=''>
      <button onClick={handleOpen} className='withdraw-btn'>
        WITHDRAW
      </button>

      <div>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <div className='flex justify-center items-center  h-[100vh] '>
              <Typography
                id='transition-modal-title'
                variant='h6'
                component='h2'
              >
                <div className='w-[100%] xs:w-[480px] sm:w-[540px] lg:w-[560px]  h-[370px] lg:h-[420px] bg-white relative  rounded-[20px] '>
                  {isWithdraw ? (
                    <div className=" ">
                      <div className="flex flex-col pt-8 lg:py-10 px-8 lg:px-10 font-poppins ">

                     
                      <div className='flex justify-between items-center mb-5 lg:mb-10'>
                        <h3 className='text-sm md:text-[16px] lg:text-lg text-primary font-semibold '>
                          Withdrawal
                        </h3>
                        <button
                          onClick={handleClose}
                          className='text-primary font-karla font-extrabold text-sm flex justify-center items-center'
                        >
                          Close{" "}
                          <span>
                            <AiOutlineClose className='text-sm font-extrabold' />
                          </span>
                        </button>
                      </div>
                     <div className="w-[287px]">

                     </div>
                      <div className='inputbox text-[14px] sm:text-[16px] lg:text-[18px] '>
                        <input
                          required
                          type='text'
                          placeholder='Enter amount'
                        />
                        <label
                          className='text-[14px] sm:text-[16px] lg:text-[18px]'
                          for=''
                        >
                          Amount
                        </label>
                      </div>
                      <div className=' inputbox text-[14px] sm:text-[16px] lg:text-[18px] '>
                        <ion-icon name='caret-down-outline'></ion-icon>
                        <input
                          required
                          type='password'
                          placeholder='Choose destination account'
                        />
                        <label
                          className='text-[14px] sm:text-[16px] lg:text-[18px]'
                          for=''
                        >
                          Destination account
                        </label>
                      </div>
                      <div className='flex justify-between items-center  mt-5 '>
                        <div className='flex items-center '>
                          <h6 className='text-[#706E6E] text-[10px] lg:text-[12px] font-semibold font-Montserrat'>
                            Secured by
                          </h6>
                          <img
                            className='w-[50px]  lg:w-[70px]'
                            src={footer}
                            alt=''
                          />
                        </div>

                        <button
                          onClick={() => setIsWithdraw(false)}
                          className=' w-[90px] lg:w-[100px]  lg:h-[36px] h-[30px] lg:text-sm text-[10px] rounded-[6px] flex mx-4 sm:mx-0 justify-center items-center font-medium bg-[#232164]'
                        >
                          Continue
                        </button>
                      </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {isSuccess ? (
                        <div>
                          <div className='flex flex-col pt-8 lg:py-10 px-8 lg:px-10 font-poppins'>
                            <div className='flex justify-between items-center mb-5 lg:mb-10'>
                              <h3 className='text-sm md:text-[16px] lg:text-lg text-primary font-semibold '>
                                Withdrawal
                              </h3>
                              <button
                                onClick={handleClose}
                                className='text-primary font-karla font-extrabold text-sm flex justify-center items-center'
                              >
                                Close{" "}
                                <span>
                                  <AiOutlineClose className='text-sm font-extrabold' />
                                </span>
                              </button>
                            </div>

                            <p className='text-[#444445] text-sm  mb-10'>
                              Please enter transaction pin to proceed.
                            </p>
                            <div className='inputbox text-[16px] lg:text-[18px] '>
                              <input
                                required
                                type='password'
                                placeholder='Enter Transaction pin'
                              />
                              <label
                                className='text-[16px] lg:text-[18px]'
                                for=''
                              >
                                Transaction pin
                              </label>
                            </div>
                            <div className='flex justify-between items-center  mt-20 '>
                              <div className='flex items-center '>
                                <h6 className='text-[#706E6E] text-[10px] lg:text-[12px] font-semibold font-Montserrat'>
                                  Secured by
                                </h6>
                                <img
                                  className='w-[50px]  lg:w-[70px]'
                                  src={footer}
                                  alt=''
                                />
                              </div>

                              <button
                                onClick={() => setIsSuccess(false)}
                                className=' w-[90px] lg:w-[100px]  lg:h-[36px] h-[30px] lg:text-sm text-[10px] rounded-[6px] flex justify-center items-center font-medium bg-[#232164]'
                              >
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div>
                            <div className='flex flex-col pt-8 lg:py-10 px-8 lg:px-10 font-poppins'>
                              <div className='flex justify-between items-center mb-5 lg:mb-8'>
                                <h3 className='text-sm md:text-[16px] lg:text-lg text-primary font-semibold '>
                                  Withdrawal
                                </h3>
                                <button
                                  onClick={handleClose}
                                  className='text-primary font-karla font-extrabold text-sm flex justify-center items-center'
                                >
                                  Close{" "}
                                  <span>
                                    <AiOutlineClose className='text-sm font-extrabold' />
                                  </span>
                                </button>
                              </div>

                              <h4 className='text-sm md:text-[14px] lg:text-[16px]  text-primary font-semibold '>
                                Hello Chukwudi <span className="wave">👋</span>
                              </h4>
                              <div className='flex justify-center items-center mt-1 gap-2 flex-col'>
                                <h4 className='text-sm md:text-[14px] lg:text-[16px]   text-primary font-semibold '>
                                  Withdrawal Successful
                                </h4>
                                <div className="w-[287px]">

</div>
                                <img
                                  className='w-[50px]  lg:w-[70px]'
                                  src={success}
                                  alt=''
                                />
                                <h5 className='text-[#1C2E7A]'>₦25,0000</h5>
                                <p className='text-[#444445] text-[11px] sm:text-sm w-[220px] text-center'>
                                  has been successfuly sent to your Zenith Bank
                                  account
                                </p>
                              </div>
                              <div className='flex justify-between items-center  mt-10 '>
                                <div className='flex items-center '>
                                  <h6 className='text-[#706E6E] text-[10px] lg:text-[12px] font-semibold font-Montserrat'>
                                    Secured by
                                  </h6>
                                  <img
                                    className='w-[50px]  lg:w-[70px]'
                                    src={footer}
                                    alt=''
                                  />
                                </div>

                                <button
                                  onClick={() => setIsSuccess(false)}
                                  className=' w-[90px] lg:w-[100px]  lg:h-[36px] h-[30px] lg:text-sm text-[10px] rounded-[6px] flex justify-center items-center font-medium bg-[#232164]'
                                >
                                  Done
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Typography>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  )
}

export default Withdrawbutton
