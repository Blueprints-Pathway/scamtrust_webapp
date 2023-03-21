import React, { useState } from 'react'
import classes from './SignupModal.module.css'
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      background: 'rgba(36, 123, 160, 0.7)',
    },
  };

const SignupModal = () => {

    // let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    // function afterOpenModal() {
    //   // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    // }
  
    function closeModal() {
      setIsOpen(false);
    }

  return (
    <div className={classes['modal-wrapper']}>
         <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlay= "customOverlay"
        modal= "customModal"
      >
        <div className={classes['modal-div']}>
            <div className={classes['modal-div1']}>
              <h2>Hello</h2>
              <button onClick={closeModal}>close</button>
            </div>
            <div className={classes['modal-div2']}>
              <h2>Hello</h2>
              <button onClick={closeModal}>close</button>
            </div>
        </div>
        
      </Modal>
    </div>
  )
}

export default SignupModal