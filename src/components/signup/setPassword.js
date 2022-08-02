import React, { useState, useEffect } from 'react'
import './signup.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye, faCaretRight, faCircleQuestion, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import scamTrustLogo from '../../images/Group114(1).png'
function SetPassword() {
    const [values, setValues] = useState({
        password: '',
        passwordCheck: ''
    });

    const [error, setError] = useState({
        password: '',
        passwordCheck: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });

    }


    const validate = (values) => {
        const error = {};
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!values.password) {
            error.password = 'Password is required';
        } else if (!regexPassword.test(values.password)) {
            error.password = ' Must contain 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character';
        }
        if (!values.passwordCheck) {
            error.passwordCheck = 'Confirm is required';
        } else if (values.passwordCheck !== values.password) {
            error.passwordCheck = 'Password must match';
        }

        return error;
    }

    const handleInput = () => {
        setInput(!Input);
    }
    const [Input, setInput] = useState(false);

    const [submitted, setSubmitted] = useState(false);


    const handleCheck = () => {
        setChecked(!checked);
    }
    const [checked, setChecked] = useState(false);

    const handleCheck2 = () => {
        setChecked2(!checked2);
    }
    const [checked2, setChecked2] = useState(false);

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
                <div className='cardContainerPassword'>
                    <div className='password-view-left-bottom-text'>
                        Let’s help you secure your <bold className='green-text'>ScamTrust</bold> Customer account. Kindly set your <bold className='green-text'>password</bold> and <bold className='green-text'>transaction pin</bold>.
                    </div>

                    <div className="form password">
                        {/*   <pre>{
                            JSON.stringify(values, null, 2)
                            }</pre> */}
                        <form onSubmit={handleSubmit}>
                            <div className="input-field">
                                <label className='form-text'>Set password <FontAwesomeIcon className='questionIcon no' icon={faCircleQuestion} /></label>

                                {checked2 ? <input
                                    onChange={handleChange}
                                    onInput={handleInput}
                                    value={values.password}
                                    className="inputBoxBVN"
                                    name='password'
                                    placeholder=""
                                    type="text"
                                    autoComplete='off' /> : <input
                                    onChange={handleChange}
                                    onClick={handleInput}
                                    value={values.password}
                                    className="inputBoxBVN"
                                    name='password'
                                    placeholder=""
                                    type="password"
                                    autoComplete='off' />}


                                <div className="passwordSee" onClick={handleCheck2} >
                                    {checked2 ? <FontAwesomeIcon className='eyeIcon no' icon={faEye} /> : <FontAwesomeIcon className='eyeIcon yes' icon={faEyeSlash} />}
                                </div>


                            </div>
                            {submitted && error.password && <span className='error passShift'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.password}</span>}



                            <div className="input-field">
                                <label className='form-text'>Confirm password</label>

                                {checked ?
                                    <input
                                        onChange={handleChange}
                                        value={values.passwordCheck}
                                        className="inputBoxBVN"
                                        name='passwordCheck'
                                        placeholder=""
                                        type="text"
                                        autoComplete='off' /> : <input
                                        onChange={handleChange}
                                        value={values.passwordCheck}
                                        className="inputBoxBVN"
                                        name='passwordCheck'
                                        placeholder=""
                                        type="password"
                                        autoComplete='off' />}

                                <div className="passwordSee" onClick={handleCheck} >
                                    {checked ? <FontAwesomeIcon className='eyeIcon no' icon={faEye} /> : <FontAwesomeIcon className='eyeIcon yes' icon={faEyeSlash} />}
                                </div>

                            </div>
                            {submitted && error.passwordCheck && <span className='error passShift2'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.passwordCheck}</span>}



                            {   ((submitted && !error.passwordCheck) && (submitted && !error.password)) ? ( <Link to='/transaction'> <button className='password-button yes' type='submit' > Proceed to transaction pin </button></Link>) : (<button className='password-button yes' type='submit' > Proceed to transaction pin </button>) }
                           {/*  {submitted ? <Link to='/transaction'> <button className='password-button yes' type='submit' > Proceed to transaction pin </button></Link> : <Link to='/transaction'><button className='password-button no' type='submit' disabled> Proceed to transaction pin </button></Link>}
                            <FontAwesomeIcon className='arrowIcon' icon={faCaretRight} /> */}

                        </form>
                    </div>
                    <div className='field-bottom-password'> Secured by <img className='field-bottom-img' src={scamTrustLogo} alt="Scam Trust" /> </div>
                </div>
            </div>
        </div>
    )
}

export default SetPassword