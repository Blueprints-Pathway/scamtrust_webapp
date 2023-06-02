import React, { useState } from 'react'
import './Footer.css'
import { HiArrowRight } from 'react-icons/hi'

const NewsForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState("")
    const [option, setOption] = useState("")

    const onOptionChange = e => {
        setOption(e.target.value)
      }
      
    //   useEffect(() => {
    //     if(status === "success") clearFields();
    //   }, [status])
      
      const clearFields = () => {
        // setFirstName('');
        setOption('');
        setEmail('');
      }
      
      const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        // firstName &&
        // lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: option,
            // MERGE2: lastName,
        });
        clearFields();
      }
  return (
    <div>
         <form onSubmit={(e) => handleSubmit(e)}
          className="input-div">
          <div className="foo-form-top">
             <input 
             className='news-input' 
             onChange={(e) => setEmail(e.target.value)}
             type="email" 
             name='email'
             value={email} 
             placeholder='Email Address' 
             required
             />
             <button 
             type="submit"
             formvalues={[email, option]}
             className='news-btn'>
                <HiArrowRight className='foo-news-ico' />
             </button>
          </div>
          {status === "sending" && (
          <div className="mt-3 text-[#448FEB] text-[10px] ml-[-20px] w-72 xl:ml-0 xl:text-[12px] xl:w-96">
            sending...
          </div>
        )}
         {status === "error" && (
          <div 
            className="mt-3 text-red-600 text-[10px] ml-[-20px] w-72 xl:ml-0 xl:text-[12px] xl:w-96"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="mt-3 text-[#3AA458] text-[10px] ml-[-20px] w-72 xl:ml-0 xl:text-[12px] xl:w-96"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

            {/* R A D I O */}
          <div className='foo-radio'>
            <div className='foo-radio-item'>
            <div onClick={() => {setOption("Vendor")}}>
            <input
            className='foo-radio-item'
             type="radio"
             name="Vendor"
             value="Vendor"
             id="vendor"
             onChange={onOptionChange}
             checked={option === "Vendor"}
              /> Vendor
           </div>
           </div>

             <div className='foo-radio-item'>
            <div onClick={() => {setOption("Customer")}}>
             <input
               className='foo-radio-item'
              type="radio"
              name="Customer"
              value="Customer"
              id="customer"
              onChange={onOptionChange}
              checked={option === "Customer"}
               /> Customer
            </div>
            </div>
          </div>
          </form>
    </div>
  )
}

export default NewsForm