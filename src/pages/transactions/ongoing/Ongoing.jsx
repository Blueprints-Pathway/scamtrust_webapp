import React from 'react'
import classes from './Ongoing.module.css'
import AppLayout from '../../../components/Layout/AppLayout'
import { Card } from 'antd';
import { Steps } from 'antd';
import { HiArrowNarrowLeft } from 'react-icons/hi'
import FooterLogo from '../../../components/FooterLogo/FooterLogo';
import { useNavigate } from 'react-router-dom';


const items = [
    {
        title: (<p className={classes['steps']}>Awaiting</p>),
    },
    {
      title: (<p className={classes['steps']}>On-going</p>),
    },
    {
      title: (<p className={classes['steps']}>Completed</p>),
    },
  ];

const Ongoing = () => {

    const navigate = useNavigate(); 

  return (
    <AppLayout>
    <div className={classes['wrapper']}>
        <Card className={classes['card-wrapper']}>
         <div onClick={()=>navigate(-1)}
         className={classes['button-con']}>
             <HiArrowNarrowLeft className={classes['arrow']} />
             <button className={classes['card-btn']}>
                Back
             </button>
         </div>
          <div className={classes['top']}>
                     {/* TOP LEFT */}
             <div className={classes['top-left']}>
                 <div className={classes['left-1']}>
                    <p className={classes['top-left-id']}>ID - 6057702</p>
                    <p className={classes['top-left-vendor']}>Ridic  Ventures </p>
                 </div>
                              {/* TOP MIDDLE */}
                 <div className={classes['top-middle']}>
                     <p className={classes['top-middle-status']}>
                         <b>Status:</b> 
                         <span className={classes['top-middle-span']}>On-going</span>
                     </p>
                     <p className={classes['top-middle-date']}>Today, 8:48 AM</p>
                 </div>
             </div>
                           {/* TOP RIGHT */}
             <div className={classes['top-right']}>
                <Steps className={classes['steps-con']} disabled current={1} labelPlacement="vertical" items={items} />
                <br />
             </div>
             
          </div>

                                 {/* BOTTOM */}
          <div className={classes['bottom']}>
             <div className={classes['bottom-con']}>
                 <div className={classes['title-div']}>
                     <p className={classes['title']}>
                        Transaction details
                     </p>
                 </div>
                 <div className={classes['content-con']}>
                     <div className={classes['content']}>
                         <p className={classes['content-left']}>Product name</p>
                         <i className={classes['content-right']}>iPhone</i>
                     </div>
                     <div className={classes['content']}>
                         <p className={classes['content-left']}>Product amount</p>
                         <i className={classes['content-right']}>₦15.00</i>
                     </div>
                     <div className={classes['content']}>
                         <p className={classes['content-left']}>Quantity</p>
                         <i className={classes['content-right']}>2</i>
                     </div>
                     <div className={classes['content']}>
                         <p className={classes['content-left']}>Due date</p>
                         <i className={classes['content-right']}>25 - 5 -2022</i>
                     </div>
                     <div className={classes['content']}>
                         <p className={classes['content-left']}>Description</p>
                         <i className={classes['content-right']}>
                         One pair of black female corporate heel shoes and one pair of white unbranded sneakers
                         </i>
                     </div>
                 </div>
             </div>


          </div>

                      {/* BUTTONS */}
               <div className={classes['btn-con']}>
                <button onClick={()=>navigate('/cancel-reason')}
                className={classes['bottom-btn1']}>Cancel</button>
                <button onClick={()=>navigate('/completed-transaction')}
                className={classes['bottom-btn2']}> Complete</button>
               </div>

          <div className={classes['footer']}>
            <FooterLogo />
          </div>

        </Card>

    </div>
 </AppLayout>
  )
}

export default Ongoing