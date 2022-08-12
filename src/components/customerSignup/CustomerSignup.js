import React, { useState, useEffect } from 'react'
import './CustomerSignup.css'
import '../../index.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import scamTrustLogo from '../../images/Group114(1).png'
import ellipse2 from '../../images/Ellipse2.png'
import { Link } from 'react-router-dom';
//images/Ellipse2.png


function CustomerSignupPage() {
    const [values, setValues] = useState({
        phoneNumber: '',
        email: '',
        userName: '',
        location: ''
    });

    const [error, setError] = useState({
        phoneNumber: '',
        email: '',
        userName: '',
        location: '',
        All: ''
    });
    const [Errors, setErrors] = useState(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
        setSubmit(true);
    }
    const [submit, setSubmit] = useState(false);
    //g@g.com
    const validate = (values) => {
        const error = {};  

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regex2 = /^[0-9]{11}$/;

        if (!values.phoneNumber) {
            error.phoneNumber = 'Phone Number is required';
            error.All = true;
        }else if (!regex2.test(values.phoneNumber)) {
            error.phoneNumber = 'Invalid Phone Number';
            error.All = true;
        }
        if (!values.email) {
            error.email = 'Email is required';
        }  else if (!regex.test(values.email)) {
            error.email = 'Invalid email';
            error.All = true;
        }
        if (!values.userName) {
            error.userName = 'User Name is required';
            error.All = true;
        }
        if (!values.location) {
            error.location = 'Location is required';
            error.All = true;
        }
        
        return error;
    }

   
  
  

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const handleCheckbox = () => {
        setChecked(!checked);
        setError(validate(values));
    }
    const [checked, setChecked] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setError(validate(values));
        setErrors(
            error.All === true ? true : false
        );
    }

    useEffect(() => {
        if (Object.keys(error).length === 0 && submitted);  
    }, [error]);
    

    return (
        <main>
        <div className='signup-viewmain container' >
        
            <div className='signup-view'>
                <div className='signup-view-left'>
                    <div className='signup-view-left-top'>
                        
                            <img src={scamTrustLogo} alt="Scam Trust" />

                        
                    </div>
                    <div className='signup-view-left-bottom-text'>
                        Let’s get you started with your <bold className='green-text'>ScamTrust</bold> Customer account
                    </div>

                    <div className="form signup">
                     
                        <form>
                           
                            


                            <div className="input-field">
                                <label className='form-text'>Email address</label>
                                <input onChange={handleChange} value={values.email} className="inputBox" name='email' placeholder="" type="text"  autoComplete='off' />
                               
                            </div>

                            {submitted && error.email && <div className='error shift'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.email}</div>}

                            <div className="input-field">
                                <label className='form-text'>Phone Number</label>
                                <input 
                                onChange={handleChange} 
                                value={values.phoneNumber} 
                                className="inputBox" 
                                name='phoneNumber' 
                                placeholder=""
                                type="text"
                                autoComplete='off'
                                inputMode='numeric'
                                maxLength="11"  />

                                
                            </div>
                            {submitted && error.phoneNumber && <div className='error shift'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.phoneNumber}</div>}

                            <div className="input-field">
                                <label className='form-text'>Username</label>
                                <input onChange={handleChange} value={values.userName} className="inputBox" name='userName' type="text" placeholder=""  autoComplete='off' />
                                
                            </div>
                            {submitted && error.userName && <div className='error shift'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.userName}</div>}


                            <div className="input-field">
                                <label className='form-text'>Location</label>
                                <input onChange={handleChange} handleEmail value={values.loation} className="inputBox" name='location' type="text" placeholder=""  autoComplete='off' />
                                
                            </div>

                            {submitted && error.location && <div className='error shift'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.location}</div>}




                             <div className='radio-button-container'>
                                <label>
                                    <input className='radio-button' type="checkbox" onChange={handleCheckbox} />
                                </label>
                                <span className='radio-text'>I agree Scam Trust Terms of Service and Privacy Policy</span>
                            </div>

                                

                         
                                

                        
                            

                        </form>
                        {(!checked) ?
                                    (<button onClick={handleSubmit} className='signup-button no' disabled> Proceed to verify BVN </button>)
                                    : ((submit && !error.phoneNumber) && (submit && !error.email) && (submit && !error.userName) && (submit && !error.location))
                                        ? (<Link to='/customerbvn'><button type='submit' className='signup-button yes'> Proceed to verify BVN </button></Link>) : ((submit && error.phoneNumber) && (submit && error.email) && (submit && error.userName) && (submit && error.location))
                                            ? (<button onClick={handleSubmit} className='signup-button yes'> Proceed to verify BVN </button>)
                                            : (<button onClick={handleSubmit} className='signup-button yes'> <div null> Proceed to verify BVN </div> </button>)}
                                            <FontAwesomeIcon className='arrowIconSignup' icon={faCaretRight} />
                        
                    </div>
                    <div className='signup-view-left-bottom-link'>
                        Go back to Website
                    </div>
                </div>
            </div>
            <div className='signup-view-right'>
                <div className='text-top'>
                    "
                </div>
                <div className='text-bottom'>
                    As a customer I feel like I can never be scammed. ScamTrust make me feel really safe when transacting with instagram vendors.
                </div>

                <div className='signup-view-right-bottom-img'>
                    <img src={ellipse2} alt="Scam Trust" />
                </div>
                <div className='signup-view-right-bottom-name'>
                    Fadekemi Folalu
                </div>
                <div className='signup-view-right-bottom-nameUser'>
                    Student
                </div>

            </div>
        </div>
        </main>
    )
}

export default CustomerSignupPage