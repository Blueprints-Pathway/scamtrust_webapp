import { Button, Card, Form, Modal, Radio } from 'antd'
import React, { useState } from 'react'
import AppLayout from '../../../components/Layout/AppLayout'
import classes from './CancelReason.module.css'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { vendorTransactionActions } from '../../../reducers/vendorTransactionReducer'
import swal from 'sweetalert'
import { vendorCancelTransaction } from '../../../actions/vendorTransactionActions'


const CancelReason = () => {
  let detail = localStorage.getItem('USER_DETAILS')
  let usertype =JSON.parse(detail).data.usertype;

  const vendorTransactions = useSelector(state => state.vendorTransaction)
  const {loading, error, data} = useSelector(state => state.user);

  const dispatch = useDispatch();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

      const navigate = useNavigate();
      const param = useParams();
      let transaction; 
    //   if(usertype === 'VENDOR'){
    //     transaction = vendorTransactions.allTransactions.find(transaction => transaction.id == param.id);

    // }
      const [isModalOpen1, setIsModalOpen1] = useState(false);
      const [isModalOpen2, setIsModalOpen2] = useState(false);

      const showModal1 = () => {
        setIsModalOpen1(true);
      };

      const showModal2 = () => {
        dispatch(vendorCancelTransaction(param.id))
       
      };

      const handleCancel1 = () => {
        setIsModalOpen1(false);
      };

      const handleCancel2 = () => {
        setIsModalOpen2(false);
        navigate('/transactions')
      };
    

   


 


  if(vendorTransactions.isCancelTransactionSuccessful){
    console.log();
swal({
    icon: 'success',
    text: vendorTransactions.data,

    
})
dispatch(vendorTransactionActions.resetCancelTransactionStatus())
setIsModalOpen2(true);
setIsModalOpen1(false);
// navigate('/transactions')

}
      
  if(vendorTransactions.error){
      console.log();
  swal({
      icon: 'error',
      text: vendorTransactions.error,

      
  })
  dispatch(vendorTransactionActions.resetCancelTransactionStatus())

}
  




  return (
    <AppLayout>
        <Card className={classes['card-wrapper']}>

            <div onClick={() => navigate(-1)}
            className={classes['back-btn-con']}>
                  <HiArrowNarrowLeft className={classes['back-btn-icon']}/>
                <button className={classes['back-btn']}>
                  Back
                </button>
            </div>


            <div className={classes['content-con']}>
                <Form onFinish={onFinish}>
                   <p className={classes['title']}>
                       Choose your cancellation reason
                   </p>

                   <Form.Item 
                   name="radio-group"
                   rules={[
                     {
                       required: true,
                       message: 'Please choose a reason for cancelation',
                     },
                   ]}
                   >
                      <Radio.Group className={classes['radio-con']}>
                        <Radio className={classes['radio-item']} value="a">
                            Product misrepresentation
                        </Radio>
                        <Radio className={classes['radio-item']} value="b">
                             Defaulted due date 
                        </Radio>
                        <Radio className={classes['radio-item']} value="c">
                             Product not needed anymore
                        </Radio>
                      </Radio.Group>
                   </Form.Item>


                   <Form.Item className={classes['submit-con']}>
                       <Button onClick={showModal1}
                       className={classes['submit-btn']} htmlType="submit">
                              Confirm Cancellation
                       </Button>
                   </Form.Item>
                </Form>
            </div>
        </Card>

                     {/* COFIRMATION MODAL */}
            <div className={classes['modal-wrapper']}>
                <Modal className={classes['confirm-modal-con']}
                 onCancel={handleCancel1}
                 centered open={isModalOpen1}
                 okButtonProps={{ style: { display: 'none' } }}
                 cancelButtonProps={{style: { display: 'none' }}}
                 onCancelprops={{style:{display: 'none'}}}
                 bodyStyle={{
                    margin: '-35px',
                    borderRadius: '25px',
                    backgroundColor: '#002257'
                }}
                 >
                    <div className={classes['modal-div']}>
                       <p className={classes['modal-title']}>
                          Are you sure you want to cancel this transaction?
                       </p> 
                       <div className={classes['modal-btn-con']}>
                        <Button onClick={showModal2} loading = {vendorTransactions.loading}
                        className={classes['confirm-btn1']}>Yes</Button>
                        <button onClick={handleCancel1}
                        className={classes['confirm-btn2']}>No</button>
                       </div>
                    </div>
                </Modal>

                          {/* FINAL CANCEL MESSAGE */}
                <div>
                  <Modal
                  onCancel={handleCancel2}
                  centered open={isModalOpen2}
                  okButtonProps={{ style: { display: 'none' } }}
                  cancelButtonProps={{style: { display: 'none' }}}
                  onCancelprops={{style:{display: 'none'}}}
                  bodyStyle={{
                    borderRadius: '25px',
                  }}
                  >
                    <div className={classes['modal-2-con']}>
                      <p className={classes['modal-2-name']}>Hello {data.data.name}👋🏽</p>
                      <p className={classes['modal-2-message']}>
                        <span className={classes['trans-id']}>TR - {data.data.id}</span> was cancelled. Reason being, product misrepresentation
                      </p>
                      <button onClick={handleCancel2 }
                      className={classes['modal-2-btn']}>Continue</button>
                    </div>
                  </Modal>
                </div>

         </div>

    </AppLayout>
  )
}

export default CancelReason