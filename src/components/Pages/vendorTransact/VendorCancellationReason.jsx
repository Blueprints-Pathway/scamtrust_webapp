import React, { useState,useEffect } from 'react'
import Layout from '../../Layout/Layout'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal';
import swal from 'sweetalert';
import axios from 'axios';
const VendorCancellationReason = ({ showOngoingHandler }) => {
  const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
   const [reason, setReason] = useState("")
   const onGoing = localStorage?.getItem("idOngoing");
   const [radioBtn, setRadioBtn] = useState(false)
   const [details, setDetails] = useState({});
   const [modalIsOpen, setModalIsOpen] = useState(false);

   function openModal() {
       setModalIsOpen(true);
     }

     function closeModal() {
       setModalIsOpen(false);
       navigate('/pending-cancelled')
     }

   const customStyles = {
       content: {
         top: '50%',
         left: '56%',
         right: 'auto',
         bottom: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)',
         backgroundColor: '#ffff',
         color: '#0000',
         borderRadius: '20px',
       },
     };

   const handleChange = (event) => {
    setReason(event.target.value);
    setRadioBtn(true)
   }

    const navigate = useNavigate();
    const cancelled = async () => {
      try {
        const API_URL = `https://scamtrust.herokuapp.com/api/v1/transaction/vendor/cancel/${onGoing}`;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user_details?.data?.access_token}`,
          },
        };
  
        const data = await axios.get(API_URL, config);
        swal({
          icon: "success",
          text: "Transaction succesfully cancelled."
    
        });
        navigate("/vendor-transaction");
        console.log(data, "trans dones");
       
        // console.log(values, "values");
        // return response;
      } catch (error) {
        
        swal({
          icon: "error",
          text: error.response?.data?.message
    
        });
      }
    };
    
    useEffect(() => {
			
      (async () => {
        try {
          const API_URL = `https://scamtrust.herokuapp.com/api/v1/user/getdetails`;
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user_details?.data?.access_token}`,
            },
          };
  
          const data = await axios.get(API_URL, config);
  
          console.log(data?.data.data, "user datas");
          setDetails(data?.data?.data);
          // console.log(values, "values");
          // return response;
        } catch (error) {
          console.log(error, "error");
        }
      })();
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <div>
        <Layout>
            <div className='border-[1px] bg-white rounded-xl lg:rounded-3xl mt-40 ml-4 pt-5 lg:pt-12 pb-7 lg:pb-20 px-8 lg:mx-12 lg:px-28'>
                <p onClick={() => navigate(-1)}
                className='flex items-center justify-start text-[#002257] text-sm lg:text-xl font-semibold'>
                    <BsArrowLeft className='text-xl lg:text-2xl mr-1'/>Back
                    </p>
                <h1 className='text-xl lg:text-4xl lg:font-bold font-semibold mt-5 lg:mt-8'>Choose your cancellation reasons</h1>

                <form action="submit" className='mt-8 lg:mt-16'>

                    <div className='flex items-center justify-start text-center border-[1px] border-[#002257] py-3 pl-7 lg:pl-16'>
                           <input
                            type="radio"
                            id='cancelReason1'
                            value="Product misrepresentation"
                            checked={reason === "Product misrepresentation"}
                            onChange={handleChange}
                             />
                           <label for="cancelReason1" className='text-lg text-[#002257] lg:text-3xl pl-2 lg:pl-5 lg:py-2'>
                            Product misrepresentation
                           </label>
                    </div>

                    <div className='flex items-center justify-start text-center border-[1px] border-[#002257] py-3 pl-7 mt-8 lg:mt-12 lg:pl-16'>
                           <input 
                           type="radio" 
                           id='cancelReason2' 
                           value="Defaulted due date"
                           checked={reason === "Defaulted due date"}
                           onChange={handleChange}
                           />
                           <label for="cancelReason2" className='text-lg text-[#002257] lg:text-3xl pl-2 lg:pl-5 lg:py-2'>
                            Defaulted due date 
                           </label>
                    </div>

                    <div className='flex items-center justify-start text-center border-[1px] border-[#002257] py-3 pl-7 mt-8 lg:mt-12 lg:pl-16'>
                           <input 
                           type="radio" 
                           id='cancelReason3' 
                           value="Product not needed anymore "
                           checked={reason === "Product not needed anymore "}
                           onChange={handleChange}
                           />
                           <label for="cancelReason3" className='text-lg text-[#002257] lg:text-3xl pl-2 lg:pl-5 lg:py-2'>
                             Product not needed anymore 
                           </label>
                    </div>

                </form>

                <div className='flex items-center justify-center mt-8 lg:mt-16'>
                    {radioBtn ?
                       <button onClick={openModal}
                       className='text-[#ffff] bg-[#014498] text-base lg:text-2xl py-4 lg:py-6 lg:px-16 px-7 rounded lg:rounded-md'>
                         Confirm Cancellation
                       </button>  
                            :
                       <button className='text-[#ffff] bg-[#014498] text-base lg:text-2xl py-4 lg:py-6 lg:px-16 px-7 rounded lg:rounded-md'>
                          Go back to dashboard
                       </button>
                    }
                </div>


                         {/* CONFIRM CANCELLATION MODAL */}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    >
                        <div className='flex-column items-center justify-center py-10 px-10 md:px-16 lg:py-32 lg:px-48'> 
                           <div>
                            <h1 className='text-[#002257] text-center text-xl lg:text-4xl font-semibold mb-4 lg:mb-8'>
                                Hello {details?.name || details?.username}👋🏽
                            </h1>
                           </div>
                           <div>
                            <h1 className='text-[#002257] text-center text-xl lg:text-3xl font-light w-60 lg:w-96 leading-6 mb-6 lg:mb-8'>
                                TR - {onGoing} <span className='text-[#95999D]'>was cancelled. Reason being, {reason}</span>
                             </h1>
                           </div>
                           <div className='flex items-center justify-center'>
                            <button	onClick={() => {
										cancelled();
										closeModal();
									}}
                            className='bg-[#002257] text-[#ffff] text-base lg:text-2xl lg:py-5 lg:px-32 py-3 px-20 rounded-md'>
                                Continue
                            </button>
                           </div>
                        </div>
                    </Modal>

            </div>
        </Layout>
    </div>
  )
}

export default VendorCancellationReason