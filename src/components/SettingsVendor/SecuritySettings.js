import React, { useState, useEffect, useRef } from 'react'
import './settingsVendor.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCircleExclamation, faEyeSlash, faEye, faCircleQuestion} from "@fortawesome/free-solid-svg-icons";
import encrypted from '../../images/encrypted.png'

function SecuritySettings() {
    const [values, setValues] = useState({
      
        phoneNumber3: '',
        email3: '',
        password: '',
        passwordCheck: '',
        
    });

    const [error, setError] = useState({
        phoneNumber3: '',
        email3: '',
        password: '',
        passwordCheck: '',

    });


    const [Errors, setErrors] = useState(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
        setSubmit(true);
    }
    const [submit, setSubmit] = useState(false);

    const validate = (values) => {
        const error = {};

        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!values.password) {
            error.password = 'Password is required';
        } else if (!regexPassword.test(values.password)) {
            error.password = ' Must contain a Minimum 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character';
        }
        if (!values.passwordCheck) {
            error.passwordCheck = 'Confirm password is required';
        } else if (values.passwordCheck !== values.password) {
            error.passwordCheck = 'Password must match';
        }
        if (!values.phoneNumber3) {
            error.phoneNumber3 = 'Please enter a transaction pin';

        }
        if (!values.email3) {
            error.email3 = 'Please Answer security the question';
        }
        return error;
    }

    const handleClosed5 = () => {
        setClosed5(!closed5);
    }
    const [closed5, setClosed5] = useState(false);

    const handleClosed6 = () => {
        setClosed6(!closed6);
    }
    const [closed6, setClosed6] = useState(false);

    const handleClosed7 = () => {
        setClosed7(!closed7);
    }
    const [closed7, setClosed7] = useState(false);

    const handleClosed15 = () => {
        setClosed15(!closed15);
        setClosed6(true);
    }
    const [closed15, setClosed15] = useState(false);

    const handleClosed16 = () => {
        setClosed16(!closed16);
        setClosed7(true);
        setClosed5(true);
    }
    const [closed16, setClosed16] = useState(false);


    
    const handleEdit5 = () => {
        setEdit5(!Edit5);
        setClosed5(false);
    }
    const [Edit5, setEdit5] = useState(false);

    const handleEdit6 = () => {
        setEdit6(!Edit6);
        setClosed6(false);
    }
    const [Edit6, setEdit6] = useState(false);

    const handleEdit7 = () => {
        setEdit7(!Edit7);
        setClosed7(false);
    }
    const [Edit7, setEdit7] = useState(false);

   

    const handleEdit14 = () => {
        setEdit14(!Edit14);
        setClosed15(false);
    }
    const [Edit14, setEdit14] = useState(false);

    const handleEdit15 = () => {
        setEdit15(!Edit15);
        setClosed16(false);
    }
    const [Edit15, setEdit15] = useState(false);

  


    const [submitted, setSubmitted] = useState(false);
 



    const handleCheck2 = () => {
        setChecked2(!checked2);
    }
    const [checked2, setChecked2] = useState(false);

    const handleCheck3 = () => {
        setChecked3(!checked3);
    }
    const [checked3, setChecked3] = useState(false);

    const handleCheck4 = () => {
        setChecked4(!checked4);
    }
    const [checked4, setChecked4] = useState(false);



    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setError(validate(values));
        setErrors(
            error.All === true ? true : false
        );
    }

    const handleInput = () => {
        setInput(!Input);
    }
    const [Input, setInput] = useState(false);

    useEffect(() => {
        if (Object.keys(error).length === 0 && submitted);
    }, [error]);
    return (
        <div>
            <div className='password-Settings'>
                <label className='password-text'>Password</label>
                <label className='password-text-hash'>********</label>
                <button className='pass-button yes' onClick={handleEdit6}> Change password </button>
            </div>

            <div className='password-Settings'>
                <label className='password-text'>Transaction pin</label>
                <label className='password-text-hash'>********</label>
                <button className='pass-button yes' onClick={handleEdit5}> Change pin </button>
            </div>
            <div className={closed5 ? "EditDone active" : Edit5 ? "EditDone" : "EditDone active"}>
                        <div className='EditDone-card'>
                            <div className='EditDone-message'>
                                Edit transaction pin
                            </div>
                            <div className='EditDone-card-close'>
                                <h1 onClick={handleClosed5}>Close X </h1>
                            </div>
                            <div className='EditDone-Line'></div>
                            <form onSubmit={handleSubmit}>
                                <div className="EditDone-card-title2">
                                    <h5>When was your business established?</h5>
                                </div>
                                <div className="input-field-EditSettings">



                                    <input
                                        onChange={handleChange}
                                        value={values.email3}
                                        className="inputBox-EditSettings"
                                        name='email3'
                                        placeholder="Answer security question"
                                        type="text"
                                        autoComplete='off' />


                                </div>
                                {submitted && error.email3 && <div className='error editSetting'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.email3}</div>}

                                {((submitted && !error.email3)) ? (<button onClick={handleEdit7} className='Next-button yes'> Next </button>) : ((submitted && error.email3)) ? (<button className='Next-button yes'> Next </button>) : (<button className='Next-button yes'> Next </button>)}

                            </form>

                        </div>

                    </div>

                    <div className={closed6 ? "EditDone active" : Edit6 ? "EditDone" : "EditDone active"}>
                        <div className='EditDone-card'>
                            <div className='EditDone-message'>
                                Edit password
                            </div>
                            <div className='EditDone-card-close'>
                                <h1 onClick={handleClosed6}>Close X </h1>
                            </div>
                            <div className='EditDone-Line'></div>
                            <form onSubmit={handleSubmit}>
                                <div className="input-field">
                                    <label className='form-text EditPass'>Enter old password <FontAwesomeIcon className='questionIcon no' icon={faCircleQuestion} /></label>

                                    {checked2 ? <input
                                        onChange={handleChange}
                                        onInput={handleInput}
                                        value={values.password}
                                        className="inputBox-EditSettings2"
                                        name='password'
                                        placeholder=""
                                        type="text"
                                        autoComplete='off' /> : <input
                                        onChange={handleChange}
                                        onClick={handleInput}
                                        value={values.password}
                                        className="inputBox-EditSettings2"
                                        name='password'
                                        placeholder=""
                                        type="text"
                                        autoComplete='off' />}


                                   


                                </div>
                                {submitted && error.password && <span className='error passShift editSettingError'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.password}</span>}



                                <div className="input-field">
                                    <label className='form-text EditPass'>Enter new password</label>

                                    {checked3 ?
                                        <input
                                            onChange={handleChange}
                                            value={values.passwordCheck}
                                            className="inputBox-EditSettings2"
                                            name='passwordCheck'
                                            placeholder=""
                                            type="text"
                                            autoComplete='off' /> : <input
                                            onChange={handleChange}
                                            value={values.passwordCheck}
                                            className="inputBox-EditSettings2"
                                            name='passwordCheck'
                                            placeholder=""
                                            type="password"
                                            autoComplete='off' />}

                                    <div className="passwordSee passView" onClick={handleCheck3} >
                                        {checked3 ? <FontAwesomeIcon className='eyeIcon no' icon={faEye} /> : <FontAwesomeIcon className='eyeIcon yes' icon={faEyeSlash} />}
                                    </div>

                                </div>
                                {submitted && error.passwordCheck && <span className='error passShift3 editSettingError'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.passwordCheck}</span>}



                                {((submitted && !error.passwordCheck) && (submitted && !error.password)) ? (<button className='Next-button yes' type='submit' onClick={handleEdit14}> Next </button>) : (<button className='Next-button yes' type='submit' > Next </button>)}


                            </form>


                        </div>

                    </div>
                    <div className={closed7 ? "EditDone active" : Edit7 ? "EditDone" : "EditDone active"}>
                        <div className='EditDone-card'>
                            <div className='EditDone-message'>
                                Edit transaction pin
                            </div>
                            <div className='EditDone-card-close'>
                                <h1 onClick={handleClosed7}>Close X </h1>
                            </div>
                            <div className='EditDone-Line'></div>
                            <form onSubmit={handleSubmit}>
                                <div className="input-field">
                                    <label className='form-text EditPass'>Enter transaction pin <FontAwesomeIcon className='questionIcon no' icon={faCircleQuestion} /></label>

                                    {checked4 ? <input
                                        onChange={handleChange}
                                        onInput={handleInput}
                                        value={values.phoneNumber3}
                                        className="inputBox-EditSettings2"
                                        name='phoneNumber3'
                                        placeholder=""
                                        type="text"
                                        inputMode='numeric'
                                        maxLength="4"
                                        autoComplete='off' /> : <input
                                        onChange={handleChange}
                                        onClick={handleInput}
                                        value={values.phoneNumber3}
                                        className="inputBox-EditSettings2"
                                        name='phoneNumber3'
                                        placeholder=""
                                        type="password"
                                        inputMode='numeric'
                                        maxLength="4"
                                        autoComplete='off' />}


                                    <div className="passwordSee editSetting2" onClick={handleCheck4} >
                                        {checked4 ? <FontAwesomeIcon className='eyeIcon no' icon={faEye} /> : <FontAwesomeIcon className='eyeIcon yes' icon={faEyeSlash} />}
                                    </div>


                                </div>
                                {submitted && error.phoneNumber3 && <span className='error passShift editSettingError'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.phoneNumber3}</span>}


                                {((submitted && !error.phoneNumber3)) ? (<button className='Next-button yes' type='submit' onClick={handleEdit15}> Save </button>) : (<button className='Next-button yes' type='submit' > Save </button>)}


                            </form>


                        </div>

                    </div>

                    <div className={closed15 ? "EditDone active" : Edit14 ? "EditDone" : "EditDone active"}>
                        <div className='EditDone-card'>
                            <div className='EditDone-message'>
                                Hello Ridic
                            </div>
                            <div className='EditDone-card-close'>
                                <h1 onClick={handleClosed15}>Close X </h1>
                            </div>
                            <div className='EditDone-Line'></div>
                            <center> <img className="DoneImg" src={encrypted} alt="Scam Trust" /></center>
                            <center className='successEditSmall'>
                                Your ScamTrust password has been changed

                            </center>




                            <button onClick={handleClosed15} className='Next-button yes'> Done </button>

                        </div>

                    </div>

                    <div className={closed16 ? "EditDone active" : Edit15 ? "EditDone" : "EditDone active"}>
                        <div className='EditDone-card'>
                            <div className='EditDone-message'>
                                Hello Ridic
                            </div>
                            <div className='EditDone-card-close'>
                                <h1 onClick={handleClosed16}>Close X </h1>
                            </div>
                            <div className='EditDone-Line'></div>
                            <center>
                            <img className="DoneImg" src={encrypted} alt="Scam Trust" /></center>
                            <center className='successEditSmall'>
                                Your ScamTrust Transaction pin has been changed

                            </center>




                            <button onClick={handleClosed16} className='Next-button yes'> Done </button>

                        </div>

                    </div>
        </div>
    )
}

export default SecuritySettings