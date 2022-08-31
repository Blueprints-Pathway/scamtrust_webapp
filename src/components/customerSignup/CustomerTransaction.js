import React, { useState, useEffect, useRef } from 'react'
// import './CustomerSignup.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import scamTrustLogo from '../../images/Group114(1).png'
function CustomerTransaction() {
    const [values, setValues] = useState({
        pin1: '',
        pin2: '',
        pin3: '',
        pin4: '',
        pinCheck1: '',
        pinCheck2: '',
        pinCheck3: '',
        pinCheck4: ''

    });

    const [error, setError] = useState({
        pinCheckError1: '',
        pinCheckError2: ''
    });
    const [pin1Ref, setPin1Ref] = useState(useRef(null));
    const [pin2Ref, setPin2Ref] = useState(useRef(null));
    const [pin3Ref, setPin3Ref] = useState(useRef(null));
    const [pin4Ref, setPin4Ref] = useState(useRef(null));
    const [pinCheck1Ref, setPinCheck1Ref] = useState(useRef(null));
    const [pinCheck2Ref, setPinCheck2Ref] = useState(useRef(null));
    const [pinCheck3Ref, setPinCheck3Ref] = useState(useRef(null));
    const [pinCheck4Ref, setPinCheck4Ref] = useState(useRef(null));
//securityquestion
    useEffect(() => {
        pin1Ref.current.focus();
    }, []);
    useEffect(() => {
        if (values.pin1.length === 1) {
            pin2Ref.current.focus();
        } 
        if (values.pin2.length === 1) {
            pin3Ref.current.focus();
        }
        if (values.pin3.length === 1) {
            pin4Ref.current.focus();
        }
        if (values.pin4.length === 1) {
            pinCheck1Ref.current.focus();
        }
        if (values.pinCheck1.length === 1) {
            pinCheck2Ref.current.focus();
        }
        if (values.pinCheck2.length === 1) {
            pinCheck3Ref.current.focus();
        }
        if (values.pinCheck3.length === 1) {
            pinCheck4Ref.current.focus();
        }
    })
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }


    const validate = (values) => {
        const error = {};
        if (!values.pin1 || !values.pin2 || !values.pin3 || !values.pin4) {
            error.pinCheckError1 = 'All field must be filled';
        } else if (values.pin1 !== values.pinCheck1 || values.pin2 !== values.pinCheck2 || values.pin3 !== values.pinCheck3 || values.pin4 !== values.pinCheck4) {
            error.pinCheckError2 = 'Pin must match';
        }

        if (!values.pinCheck1 || !values.pinCheck2 || !values.pinCheck3 || !values.pinCheck4) {
            error.pinCheckError2 = 'All field must be filled';
        } else if (values.pin1 !== values.pinCheck1 || values.pin2 !== values.pinCheck2 || values.pin3 !== values.pinCheck3 || values.pin4 !== values.pinCheck4) {
            error.pinCheckError2 = 'Pin must match';
        }

        return error;
    }
    const handleInput = () => {
        setInput(!Input);
    }
    const [Input, setInput] = useState(false);

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
        <div className='signup-view'>
            <div className='password-view-left'>
                <div className='signup-view-left-top'>
                    <Link to='/Home'>
                        <img src={scamTrustLogo} alt="Scam Trust" />

                    </Link>
                </div>
                <div className='cardContainerTransaction'>
                    <div className='Transaction-view-left-bottom-text'>
                        Let’s help you secure your <bold className='green-text'>ScamTrust</bold> Customer account. Kindly set your <bold className='green-text'>password</bold> and <bold className='green-text'>transaction pin</bold>.
                    </div>

                    <div className="form transaction">
                        <div className='field'>
                            <h4 className='form-textTransaction'>To set up your pin, input your 4-digit code and confirm it below.</h4>

                        </div>
               
                        <form autoComplete="off">
                            <div className="input-fieldPin">
                                <label className='form-textTranc'>Transaction pin</label>
                                <div className="input-fieldPinWrap">
                                    <input
                                        onChange={handleChange}
                                        value={values.pin1}
                                        className="fieldPin"
                                        name='pin1'
                                        placeholder=""
                                        type="text"
                                        minLength="1"
                                        maxLength="1"
                                        inputMode="numeric"
                                        ref={pin1Ref} />
                                    <input
                                        onChange={handleChange}
                                        value={values.pin2}
                                        className="fieldPin"
                                        name='pin2'
                                        placeholder=""
                                        type="text"
                                        minLength="1"
                                        maxLength="1"
                                        inputMode="numeric"
                                        ref={pin2Ref}
                                    />
                                    <input
                                        onChange={handleChange}
                                        value={values.pin3}
                                        className="fieldPin"
                                        name='pin3'
                                        placeholder=""
                                        type="text"
                                        minLength="1"
                                        maxLength="1"
                                        inputMode="numeric"
                                        ref={pin3Ref} />
                                    <input
                                        onChange={handleChange}
                                        value={values.pin4}
                                        className="fieldPin"
                                        name='pin4'
                                        placeholder=""
                                        type="text"
                                        minLength="1"
                                        maxLength="1"
                                        inputMode="numeric"
                                        ref={pin4Ref} />

                                </div>
                            </div>
                            {submitted && error.pinCheckError1 && <span className='error tranc'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.pinCheckError1}</span>}


                            <div className="input-fieldPin">
                                <label className='form-textTranc2'>Confirm Transaction pin</label>
                                <div className="input-fieldPinWrap2">
                                    <input
                                        onChange={handleChange}
                                        value={values.pinCheck1}
                                        className="fieldPin"
                                        name='pinCheck1'
                                        placeholder=""
                                        type="text"
                                        minLength="1"
                                        maxLength="1"
                                        inputMode="numeric"
                                        ref={pinCheck1Ref} />
                                    <input
                                        onChange={handleChange}
                                        value={values.pinCheck2}
                                        className="fieldPin"
                                        name='pinCheck2'
                                        placeholder=""
                                        type="text"
                                        minLength="1"
                                        maxLength="1"
                                        inputMode="numeric"
                                        ref={pinCheck2Ref} />
                                    <input
                                        onChange={handleChange}
                                        value={values.pinCheck3}
                                        className="fieldPin"
                                        name='pinCheck3'
                                        placeholder=""
                                        type="text"
                                        minLength="1"
                                        maxLength="1"
                                        inputMode="numeric"
                                        ref={pinCheck3Ref} />
                                    <input
                                        onInput={handleInput}
                                        onChange={handleChange}
                                        value={values.pinCheck4}
                                        className="fieldPin"
                                        name='pinCheck4'
                                        placeholder=""
                                        type="text"
                                        minLength="1"
                                        maxLength="1"
                                        inputMode="numeric"
                                        ref={pinCheck4Ref} />


                                </div>
                            </div>

                            {submitted && error.pinCheckError2 && <span className='error tranc2'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.pinCheckError2}</span>}


                    

                        </form>

                        {   ((submitted && !error.pinCheckError2) && (submitted && !error.pinCheckError1)) ? ( <Link to='/CustomerSecurityQuestion'> <button className='Transaction-button yes'> Set security question </button> </Link>) : (<button onClick={handleSubmit} className='Transaction-button yes'> Set security question </button>) }
                    </div>
                    <div className='field-bottom-transaction'> Secured by <img className='field-bottom-img' src={scamTrustLogo} alt="Scam Trust" /> </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerTransaction