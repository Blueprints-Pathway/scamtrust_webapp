import React, { useState, useEffect } from 'react'
import './CustomerSignup.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import scamTrustLogo from '../../images/Group114(1).png'

function CustomerBVN() {
    const [values, setValues] = useState({
        fullName: '',
        DOB: '',
        BVN: '',
        phoneNumber: ''
    });

    const [error, setError] = useState({
        fullName: '',
        DOB: '',
        BVN: '',
        phoneNumber: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }


    const validate = (values) => {
        const error = {};
        const regex2 = /^[0-9]{11}$/;
        const regex3 = /^[a-zA-Z]{3,}$/;
        const regex4 = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

        if (!values.fullName) {
            error.fullName = 'Full Name is required';
        } else if (!regex3.test(values.fullName)) {
            error.fullName = 'Invalid Full Name';
        }
        if (!values.DOB) {
            error.DOB = 'Date of Birth is required';
        }
        if (!values.BVN) {
            error.BVN = 'BVN is required';
        } else if (!regex2.test(values.BVN)) {
            error.BVN = 'Invalid BVN';
        }
        if (!values.phoneNumber) {
            error.phoneNumber = 'Phone Number is required';
        } else if (!regex2.test(values.phoneNumber)) {
            error.phoneNumber = 'Invalid Phone Number';
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
        <div className='signup-view'>
            <div className='password-view-left'>
                <div className='signup-view-left-top'>
                   
                        <img src={scamTrustLogo} alt="Scam Trust" />

                   
                </div>
                <div className='cardContainer-bvn'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-titleBVN'>Bank Details</h5>

                            <div className='field'>
                                <h4 className='form-textBVN'>We use your BVN to confirm rhat your personal information provided on ScamTrust are the same as it is in your BVN.</h4>

                            </div>
                            <div className="form bvn">
                                {/*   <pre>{
                            JSON.stringify(values, null, 2)
                            }</pre> */}
                                <form>
                                    <div className="input-field-bvn">
                                        <label className='form-text'>Full name</label>
                                        <input
                                            onChange={handleChange}
                                            value={values.fullName}
                                            className="inputBoxBVN"
                                            name='fullName'
                                            placeholder=""
                                            type="text"
                                            autoComplete='off'
                                             />


                                    </div>
                                    {submitted && error.fullName && <div className='error shift'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.fullName}</div>}



                                    <div className="input-field">
                                        <label className='form-text'>Date of birth</label>
                                        <input onChange={handleChange} value={values.DOB} className="inputBoxBVN" name='DOB' placeholder="" type="date" autoComplete='off' />

                                    </div>

                                    {submitted && error.DOB && <div className='error shift'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.DOB}</div>}
                                    
                                    <div className="input-field">
                                        <label className='form-text'>Phone number</label>
                                        <input onChange={handleChange} handleEmail value={values.loation} className="inputBoxBVN" name='phoneNumber' type="text" placeholder="" autoComplete='off' inputMode='numeric'
                                            maxLength="11" />

                                    </div>

                                    {submitted && error.phoneNumber && <div className='error shift'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.phoneNumber}</div>}

                                    <div className="input-field">
                                        <label className='form-text'>Enter your Bank Verification Number</label>
                                        <input onChange={handleChange} value={values.BVN} className="inputBoxBVN" name='BVN' type="text" placeholder="" autoComplete='off' inputMode='numeric'
                                            maxLength="11" />

                                    </div>
                                    {submitted && error.BVN && <div className='error shift'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.BVN}</div>}


                                  

                                

                                </form>
                                
                                {   ((submitted && !error.phoneNumber) && (submitted && !error.DOB) && (submitted && !error.BVN) && (submitted && !error.fullName)) ? ( <Link to='/CustomerSetPassword'> <button className='bvn-button yes' type='submit' > Verify </button> </Link>) : (<button onClick={handleSubmit} className='bvn-button yes'> Verify </button>) }

                                <div className='field-bottom-bvn'> Secured by <img className='field-bottom-img' src={scamTrustLogo} alt="Scam Trust" />  <Link to='/CustomerSetPassword'><div className='skip-link'>
                                    Skip
                                </div></Link> </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            
        </div>
    )
}

export default CustomerBVN