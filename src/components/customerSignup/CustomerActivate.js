import React, { useState, useEffect } from 'react'
import './CustomerSignup.css'
import { Link } from 'react-router-dom';
import scamTrustLogo from '../../images/Group114(1).png'
import ellipse2 from '../../images/Ellipse2.png'
import Tick1 from '../../images/tick1.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function CustomerActivate() {
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
        location: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }
     
    
    const validate = (values) => {
        const error = {};   
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.phoneNumber) {
            error.phoneNumber = 'Phone Number is required';
        }
        if (!values.email) {
            error.email = 'Email is required';
        } else if (!regex.test(values.email)) {
            error.email = 'Invalid email';
        }
        if (!values.userName) {
            error.userName = 'User Name is required';
        }
        if (!values.location) {
            error.location = 'Location is required';
        }
        
        return error;
    }
    

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const handleCheckbox = () => {
        setChecked(!checked);
    }
    const [checked, setChecked] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setError(validate(values));
    }

    useEffect(() => {
        if (Object.keys(error).length === 0 && submitted);  
    }, [error]);

    return (
        <>
            <div className='signup-view'>
                <div className='signup-view-left'>
                    <div className='signup-view-left-top'>
                        <Link to='/Home'>
                            <img src={scamTrustLogo} alt="Scam Trust" />

                        </Link>
                    </div>
                    <img className="Activate-view-left-bottom-img" src={Tick1} alt="Scam Trust" />
                    <div className='Activate-view-left-bottom-text'>Congrats! Your <bold className='green-text'>ScamTrust</bold> password & transaction pin have been created successfully 
                    </div>
                    <Link to='/'> <button className='Activate-button yes'> Check mail </button></Link>
                    
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
        </>
    )
}

export default CustomerActivate