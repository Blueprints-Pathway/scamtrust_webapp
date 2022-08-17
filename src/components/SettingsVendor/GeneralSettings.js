import React, { useState, useEffect, useRef } from 'react'
import './settingsVendor.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCircleExclamation, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import shielgg from '../../images/shielgg.png'
import scamTrustLogo from '../../images/Group114(1).png'
import bank123 from '../../images/123.png'
import bank from '../../images/bank.png'
import encrypted from '../../images/encrypted.png'
import otp from '../../images/otp.png'

function GeneralSettings() {
    const [values, setValues] = useState({
        businessName: 'Ridic Business Ventures',
        phoneNumber: '08156711115',
        phoneNumber2: '',
        phoneNumber3: '',
        phoneNumber4: '',
        email: 'Ridicventures@gmail.com',
        email2: '',
        email3: '',
        email4: '',
        office: 'Store 9, Linexx Mall, Lekki Phase 1, Lagos, Nigeria',
        office2: '',
        account: 'Nill',
        account2: '',
        password: '',
        passwordCheck: '',
        bank: '',
        bankNumber: '',
        bankName: '',
        bank2: '',
        bankNumber2: '',
        bankName2: '',
        pin1: '',
        pin2: '',
        pin3: '',
        pin4: '',
        pin5: '',
        pin6: '',
        pin7: '',
        pin8: '',
        pin9: '',
        pin10: '',
        pin11: '',
        pin12: '',
        pinCheck1: '',
        pinCheck2: '',
        pinCheck3: '',
        pinCheck4: '',
        pinCheck5: '',
        pinCheck6: '',
        pinCheck7: '',
        pinCheck8: '',
        pinCheck9: '',
        pinCheck10: '',
        pinCheck11: '',
        pinCheck12: '',
    });

    const [error, setError] = useState({
        businessName: '',
        phoneNumber: '',
        phoneNumber2: '',
        phoneNumber3: '',
        phoneNumber4: '',
        email: '',
        email2: '',
        email3: '',
        email4: '',
        office: '',
        office2: '',
        account: '',
        account2: '',
        password: '',
        passwordCheck: '',
        bank: '',
        bankNumber: '',
        bankName: '',
        bank2: '',
        bankNumber2: '',
        bankName2: '',
        pinCheckError1: '',
        pinCheckError2: ''

    });

    const [pin1Ref, setPin1Ref] = useState(useRef(null));
    const [pin2Ref, setPin2Ref] = useState(useRef(null));
    const [pin3Ref, setPin3Ref] = useState(useRef(null));
    const [pin4Ref, setPin4Ref] = useState(useRef(null));
    const [pin5Ref, setPin5Ref] = useState(useRef(null));
    const [pin6Ref, setPin6Ref] = useState(useRef(null));

    const [pin7Ref, setPin7Ref] = useState(useRef(null));
    const [pin8Ref, setPin8Ref] = useState(useRef(null));
    const [pin9Ref, setPin9Ref] = useState(useRef(null));
    const [pin10Ref, setPin10Ref] = useState(useRef(null));
    const [pin11Ref, setPin11Ref] = useState(useRef(null));
    const [pin12Ref, setPin12Ref] = useState(useRef(null));

    const [pinCheck1Ref, setPinCheck1Ref] = useState(useRef(null));
    const [pinCheck2Ref, setPinCheck2Ref] = useState(useRef(null));
    const [pinCheck3Ref, setPinCheck3Ref] = useState(useRef(null));
    const [pinCheck4Ref, setPinCheck4Ref] = useState(useRef(null));
    const [pinCheck5Ref, setPinCheck5Ref] = useState(useRef(null));
    const [pinCheck6Ref, setPinCheck6Ref] = useState(useRef(null));

    const [pinCheck7Ref, setPinCheck7Ref] = useState(useRef(null));
    const [pinCheck8Ref, setPinCheck8Ref] = useState(useRef(null));
    const [pinCheck9Ref, setPinCheck9Ref] = useState(useRef(null));
    const [pinCheck10Ref, setPinCheck10Ref] = useState(useRef(null));
    const [pinCheck11Ref, setPinCheck11Ref] = useState(useRef(null));
    const [pinCheck12Ref, setPinCheck12Ref] = useState(useRef(null));

    const [Errors, setErrors] = useState(true);

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
            pin5Ref.current.focus();
        }
        if (values.pin5.length === 1) {
            pin6Ref.current.focus();
        }
        if (values.pin6.length === 1) {
            pin1Ref.current.focus();
        }


        if (values.pin7.length === 1) {
            pin8Ref.current.focus();
        }
        if (values.pin8.length === 1) {
            pin9Ref.current.focus();
        }
        if (values.pin9.length === 1) {
            pin10Ref.current.focus();
        }
        if (values.pin10.length === 1) {
            pin11Ref.current.focus();
        }
        if (values.pin11.length === 1) {
            pin12Ref.current.focus();
        }
        if (values.pin12.length === 1) {
            pin7Ref.current.focus();
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
        if (values.pinCheck4.length === 1) {
            pinCheck5Ref.current.focus();
        }
        if (values.pinCheck5.length === 1) {
            pinCheck6Ref.current.focus();
        }

        if (values.pinCheck7.length === 1) {
            pinCheck8Ref.current.focus();
        }
        if (values.pinCheck8.length === 1) {
            pinCheck9Ref.current.focus();
        }
        if (values.pinCheck9.length === 1) {
            pinCheck10Ref.current.focus();
        }
        if (values.pinCheck10.length === 1) {
            pinCheck11Ref.current.focus();
        }
        if (values.pinCheck11.length === 1) {
            pinCheck12Ref.current.focus();
        }
    })


    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
        setSubmit(true);
    }
    const [submit, setSubmit] = useState(false);

    const validate = (values) => {
        const error = {};

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regex2 = /^[0-9]{11}$/;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!values.password) {
            error.password = 'Password is required';
        } else if (!regexPassword.test(values.password)) {
            error.password = ' Must contain 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character';
        }
        if (!values.passwordCheck) {
            error.passwordCheck = 'Confirm password is required';
        } else if (values.passwordCheck !== values.password) {
            error.passwordCheck = 'Password must match';
        }

        if (!values.phoneNumber) {
            error.phoneNumber = 'Phone Number is required';

        } else if (!regex2.test(values.phoneNumber)) {
            error.phoneNumber = 'Invalid Phone Number';

        }
        if (!values.phoneNumber2) {
            error.phoneNumber2 = 'Please Answer security the question';

        }
        if (!values.phoneNumber3) {
            error.phoneNumber3 = 'Please enter a transaction pin';

        }
        if (!values.phoneNumber4) {
            error.phoneNumber4 = 'Please enter new phone number';

        }
        else if (!regex2.test(values.phoneNumber4)) {
            error.phoneNumber4 = 'Invalid Phone Number';

        }
        if (!values.email) {
            error.email = 'Email is required';
        } else if (!regex.test(values.email)) {
            error.email = 'Invalid email';

        }
        if (!values.email2) {
            error.email2 = 'Please Answer security the question';
        }
        if (!values.email3) {
            error.email3 = 'Please Answer security the question';
        }
        if (!values.email4) {
            error.email4 = 'Please enter new email';
        } else if (!regex.test(values.email4)) {
            error.email4 = 'Invalid email';

        }
        if (!values.office) {
            error.office = 'office address is required';

        }
        if (!values.office2) {
            error.office2 = 'Please Answer security the question';

        }
        if (!values.account) {
            error.account = 'Active cashout account is required';

        }
        if (!values.account2) {
            error.account2 = 'Active cashout account is required';

        }
        if (!values.businessName) {
            error.businessName = 'Business name is required';

        }
        if (!values.businessName2) {
            error.businessName2 = 'Please Answer security the question';

        }
        if (!values.bank) {
            error.bank = 'Bank is required';

        }
        if (!values.bankNumber) {
            error.bankNumber = 'Bank number is required';

        }
        if (!values.bankName) {
            error.bankName = 'Bank name is required';

        }
        if (!values.bank2) {
            error.bank2 = 'Bank is required';

        }
        if (!values.bankNumber2) {
            error.bankNumber2 = 'Bank number is required';

        }
        if (!values.bankName2) {
            error.bankName2 = 'Bank name is required';

        }
        if (!values.pin1 || !values.pin2 || !values.pin3 || !values.pin4 || !values.pin5 || !values.pin6) {
            error.pinCheckError1 = 'All field must be filled';
        }
        if (!values.pin7 || !values.pin8 || !values.pin9 || !values.pin10 || !values.pin11 || !values.pin12) {
            error.pinCheckError2 = 'All field must be filled';
        }


        return error;
    }


    const handleEdit = () => {
        setEdit(!Edit);
    }
    const [Edit, setEdit] = useState(false);

    
  

    const handleClosed1 = () => {
        setClosed1(!closed1);
    }
    const [closed1, setClosed1] = useState(false);

    const handleClosed2 = () => {
        setClosed2(!closed2);
    }
    const [closed2, setClosed2] = useState(false);

    const handleClosed3 = () => {
        setClosed3(!closed3);
    }
    const [closed3, setClosed3] = useState(false);

    const handleClosed4 = () => {
        setClosed4(!closed4);
    }
    const [closed4, setClosed4] = useState(false);

   
    const handleClosed11 = () => {
        setClosed11(!closed11);
    }
    const [closed11, setClosed11] = useState(false);

    const handleClosed12 = () => {
        setClosed12(!closed12);
        setClosed11(true);
        setClosed22(true);
    }
    const [closed12, setClosed12] = useState(false);

    const handleClosed13 = () => {
        setClosed13(!closed13);
        setClosed11(true);
    }
    const [closed13, setClosed13] = useState(false);

    const handleClosed14 = () => {
        setClosed14(!closed14);
        setClosed21(true);
        setClosed18(true);
        setClosed2(true);
    }
    const [closed14, setClosed14] = useState(false);

   

    const handleClosed17 = () => {
        setClosed17(!closed17);
        setClosed20(true);
        setClosed19(true);
        setClosed3(true);
    }
    const [closed17, setClosed17] = useState(false);

    const handleClosed18 = () => {
        setClosed18(!closed18);
        setClosed2(true);
    }
    const [closed18, setClosed18] = useState(false);

    const handleClosed19 = () => {
        setClosed19(!closed19);
        setClosed3(true);
    }
    const [closed19, setClosed19] = useState(false);

    const handleClosed20 = () => {
        setClosed20(!closed20);
        setClosed19(true);
        setClosed3(true);
    }
    const [closed20, setClosed20] = useState(false);

    const handleClosed21 = () => {
        setClosed21(!closed21);
        setClosed18(true);
        setClosed2(true);
    }
    const [closed21, setClosed21] = useState(false);

    const handleClosed22 = () => {
        setClosed22(!closed22);
        setClosed11(true);
    }
    const [closed22, setClosed22] = useState(false);

    const handleClosed23 = () => {
        setClosed23(!closed23);
        setClosed13(true);
        setClosed11(true);
    }
    const [closed23, setClosed23] = useState(false);

    const handleClosed24 = () => {
        setClosed24(!closed24);
        setClosed22(true);
        setClosed12(true);
        setClosed11(true);
    }
    const [closed24, setClosed24] = useState(false);

    const handleClosed25 = () => {
        setClosed25(!closed25);
        setClosed23(true);
        setClosed13(true);
        setClosed11(true);
    }
    const [closed25, setClosed25] = useState(false);

   
    const handleEdit1 = () => {
        setEdit1(!Edit1);
        setClosed1(false);
    }
    const [Edit1, setEdit1] = useState(false);

    const handleEdit2 = () => {
        setEdit2(!Edit2);
        setClosed2(false);
    }
    const [Edit2, setEdit2] = useState(false);

    const handleEdit3 = () => {
        setEdit3(!Edit3);
        setClosed3(false);
    }
    const [Edit3, setEdit3] = useState(false);

    const handleEdit4 = () => {
        setEdit4(!Edit4);
        setClosed4(false);
    }
    const [Edit4, setEdit4] = useState(false);

    const handleEdit10 = () => {
        setEdit10(!Edit10);
        setClosed12(false);
    }
    const [Edit10, setEdit10] = useState(false);

    const handleEdit11 = () => {
        setEdit11(!Edit11);
        setClosed11(false);
    }
    const [Edit11, setEdit11] = useState(false);

    const handleEdit12 = () => {
        setEdit12(!Edit12);
        setClosed13(false);
    }
    const [Edit12, setEdit12] = useState(false);

    const handleEdit13 = () => {
        setEdit13(!Edit13);
        setClosed14(false);
    }
    const [Edit13, setEdit13] = useState(false);

    const handleEdit16 = () => {
        setEdit16(!Edit16);
        setClosed17(false);
    }
    const [Edit16, setEdit16] = useState(false);

    const handleEdit17 = () => {
        setEdit17(!Edit17);
        setClosed18(false);
    }
    const [Edit17, setEdit17] = useState(false);

    const handleEdit18 = () => {
        setEdit18(!Edit18);
        setClosed19(false);
    }
    const [Edit18, setEdit18] = useState(false);

    const handleEdit19 = () => {
        setEdit19(!Edit19);
        setClosed20(false);
    }
    const [Edit19, setEdit19] = useState(false);

    const handleEdit20 = () => {
        setEdit20(!Edit20);
        setClosed21(false);
    }
    const [Edit20, setEdit20] = useState(false);

    const handleEdit21 = () => {
        setEdit21(!Edit21);
        setClosed22(false);
    }
    const [Edit21, setEdit21] = useState(false);

    const handleEdit22 = () => {
        setEdit22(!Edit22);
        setClosed23(false);
    }
    const [Edit22, setEdit22] = useState(false);

    const handleEdit23 = () => {
        setEdit23(!Edit23);
        setClosed24(false);
    }
    const [Edit23, setEdit23] = useState(false);

    const handleEdit24 = () => {
        setEdit24(!Edit24);
        setClosed25(false);
    }
    const [Edit24, setEdit24] = useState(false);

    const [submitted, setSubmitted] = useState(false);
  


    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setError(validate(values));
        setErrors(
            error.All === true ? true : false
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="vendorAction" onClick={handleEdit}>
                    {Edit ? '' : <p>Edit <FontAwesomeIcon icon={faPen} className="pen" /></p>}

                </div>
                <div className="input-field-GeneralSettings">
                    <label className='form-text-GeneralSettings'>Business name</label>
                    {Edit ? <p onClick={handleEdit1} className="edit1">Edit</p> : ''}

                    {Edit ? <input onChange={handleChange} value={values.businessName} className="inputBox-GeneralSettings" name='businessName' type="text" placeholder="" autoComplete='off' disabled /> : <input onChange={handleChange} value={values.businessName} className="inputBox-GeneralSettings" name='businessName' type="text" placeholder="" autoComplete='off' disabled />}


                </div>
                {submitted && error.businessName && <div className='error editSetting'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.businessName}</div>}
                <div className="input-field-GeneralSettings">
                    <label className='form-text-GeneralSettings'>Phone Number</label>
                    {Edit ? <p className="edit2" onClick={handleEdit2}>Edit</p> : ''}

                    {Edit ? <input
                        onChange={handleChange}
                        value={values.phoneNumber}
                        className="inputBox-GeneralSettings"
                        name='phoneNumber'
                        placeholder=""
                        type="text"
                        autoComplete='off'
                        inputMode='numeric'
                        maxLength="11" disabled /> : <input
                        onChange={handleChange}
                        value={values.phoneNumber}
                        className="inputBox-GeneralSettings"
                        name='phoneNumber'
                        placeholder=""
                        type="text"
                        autoComplete='off'
                        inputMode='numeric'
                        maxLength="11" disabled />}



                </div>
                {submitted && error.phoneNumber && <div className='error editSetting'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.phoneNumber}</div>}



                <div className="input-field-GeneralSettings">
                    <label className='form-text-GeneralSettings'>Email address</label>
                    {Edit ? <p className="edit3" onClick={handleEdit3}>Edit</p> : ''}

                    {Edit ? <input onChange={handleChange} value={values.email} className="inputBox-GeneralSettings" name='email' placeholder="" type="text" autoComplete='off' disabled /> : <input onChange={handleChange} value={values.email} className="inputBox-GeneralSettings" name='email' placeholder="" type="text" autoComplete='off' disabled />}


                </div>

                {submitted && error.email && <div className='error editSetting'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.email}</div>}

                <div className="input-field-GeneralSettings">
                    <label className='form-text-GeneralSettings'>Office address</label>
                    {Edit ? <p className="edit4" onClick={handleEdit4}>Edit</p> : ''}

                    {Edit ? <input onChange={handleChange} value={values.office} className="inputBox-GeneralSettings" name='userName' type="text" placeholder="" autoComplete='off' disabled /> : <input onChange={handleChange} value={values.office} className="inputBox-GeneralSettings" name='userName' type="text" placeholder="" autoComplete='off' disabled />}


                </div>
                {submitted && error.office && <div className='error editSetting'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.office}</div>}


                <div className="input-field-GeneralSettings">
                    <label className='form-text-GeneralSettings'>Active cashout account</label>
                    {Edit ? <p className="edit5" onClick={handleEdit11}>Add</p> : ''}

                    {Edit ? <input onChange={handleChange} handleEmail value={values.account} className="inputBox-GeneralSettings" name='account' type="text" placeholder="" autoComplete='off' disabled /> : <input onChange={handleChange} handleEmail value={values.account} className="inputBox-GeneralSettings" name='account' type="text" placeholder="" autoComplete='off' disabled />}


                </div>

                {submitted && error.account && <div className='error editSetting'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.account}</div>}
            </form>
            <div className={closed1 ? "EditDone active" : Edit1 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Edit Business name
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed1}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>

                    <div className="EditDone-card-title">
                        <h5>Hello Ridic, we see that you are trying to change your business name. Please reach out to our Admin on 0700-8000-5000 or send an email to ScamTrustadmin@gmail.com</h5>
                    </div>

                    <button onClick={handleClosed1} className='Edit-button yes'> Okay </button>
                </div>

            </div>
            <div className={closed2 ? "EditDone active" : Edit2 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Edit Phone number
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed2}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>
                    <form onSubmit={handleSubmit}>
                        <div className="EditDone-card-title2">
                            <h5>When was your business established?</h5>
                        </div>
                        <div className="input-field-EditSettings">

                            <input
                                onChange={handleChange}
                                value={values.phoneNumber2}
                                className="inputBox-EditSettings"
                                name='phoneNumber2'
                                placeholder="Answer security question"
                                type="text"
                                autoComplete='off' />


                        </div>
                        {submitted && error.phoneNumber2 && <div className='error editSetting'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.phoneNumber2}</div>}

                        {((submitted && !error.phoneNumber2)) ? (<button onClick={handleEdit17} className='Next-button yes'> Next </button>) : ((submitted && error.phoneNumber2)) ? (<button className='Next-button yes'> Next </button>) : (<button className='Next-button yes'> Next </button>)}

                    </form>
                </div>

            </div>

            <div className={closed3 ? "EditDone active" : Edit3 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Edit Email Address
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed3}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>
                    <form onSubmit={handleSubmit}>
                        <div className="EditDone-card-title2">
                            <h5>When was your business established?</h5>
                        </div>
                        <div className="input-field-EditSettings">


                            <input
                                onChange={handleChange}
                                value={values.email2}
                                className="inputBox-EditSettings"
                                name='email2'
                                placeholder="Answer security question"
                                type="text"
                                autoComplete='off' />


                        </div>
                        {submitted && error.email2 && <div className='error editSetting'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.email2}</div>}

                        {((submitted && !error.email2)) ? (<button onClick={handleEdit18} className='Next-button yes'> Next </button>) : ((submitted && error.email2)) ? (<button className='Next-button yes'> Next </button>) : (<button className='Next-button yes'> Next </button>)}

                    </form>
                </div>

            </div>

            <div className={closed4 ? "EditDone active" : Edit4 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Edit office address
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed4}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>

                    <div className="EditDone-card-title">
                        <h5>Hello Ridic, we see that you are trying to change your office address. Please reach out to our Admin on 0700-8000-5000 or send an email to ScamTrustadmin@gmail.com</h5>
                    </div>

                    <button onClick={handleClosed4} className='Edit-button yes'> Okay </button>
                </div>

            </div>





            <div className={closed11 ? "EditDone active" : Edit11 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Add Cashout Account
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed11}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>
                    <form onSubmit={handleSubmit}>

                        <div className="input-field-EditSettings">

                            <div className='account-card'>
                                <div className='account-card-title' onClick={handleEdit10}>
                                    <FontAwesomeIcon className='plus' icon={faPlus} />
                                </div> <h5 className='addAccount'>Add Bank Account</h5>
                            </div>

                            <div className='account-card'>
                                <div className='account-card-title' onClick={handleEdit12}>
                                    <FontAwesomeIcon className='plus' icon={faPlus} />
                                </div> <h5 className='addAccount'>Add Bank Account</h5>
                            </div>

                            <div className='Wallet-card-left-bottom-left'>
                                <div className='Secured editSetting2 addBottom'> Secured by <img className='field-bottom-img' src={scamTrustLogo} alt="Scam Trust" /> </div>
                            </div>

                        </div>



                    </form>
                </div>

            </div>

            <div className={closed12 ? "EditDone active" : Edit10 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Add Cashout Account
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed12}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>
                    <form className='AccountForm' onSubmit={handleSubmit}>

                        <div className="input-field-EditSettings">

                            <div className="input-field-addAccount">
                                <label className='form-text-addAccount'>Bank</label>
                                <img className="bankImg" src={bank} alt="Scam Trust" />
                                <input
                                    onChange={handleChange}
                                    value={values.bank}
                                    className="inputBox-addAccount"
                                    name='bank'
                                    placeholder="Choose your bank"
                                    type="text"
                                    autoComplete='off' />


                            </div>
                            {submitted && error.bank && <div className='error shift editSetting3'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.bank}</div>}



                            <div className="input-field-addAccount">
                                <label className='form-text-addAccount2'>Account number</label>
                                <img className="bankNumImg" src={bank123} alt="Scam Trust" />
                                <input onChange={handleChange} value={values.bankNumber} className="inputBox-addAccount2" name='bankNumber' placeholder="Enter your business account number" type="text" autoComplete='off' />

                            </div>

                            {submitted && error.bankNumber && <div className='error shift editSetting31'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.bankNumber}</div>}

                            <div className="input-field-addAccount">
                                <label className='form-text-addAccount3'>Account name</label>
                                <input onChange={handleChange} value={values.bankName} className="inputBox-addAccount3" name='bankName' type="text" placeholder="" autoComplete='off' />

                            </div>
                            {submitted && error.bankName && <div className='error shift editSetting32'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.bankName}</div>}


                        </div>


                        {((submitted && !error.bankName) && (submitted && !error.bankNumber) && (submitted && !error.bank)) ? (<button onClick={handleEdit21} className='passAccount-button yes' type='submit' > Add account </button>) : (<button className='passAccount-button yes' type='submit' > Add account </button>)}

                    </form>
                    <div className='Wallet-card-left-bottom-left'>
                        <div className='Secured editSetting21 addSecure'> Secured by <img className='field-bottom-img' src={scamTrustLogo} alt="Scam Trust" /> </div>
                    </div>
                </div>

            </div>

            <div className={closed22 ? "EditDone active" : Edit21 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Add Cashout Account
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed22}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>
                    <FontAwesomeIcon onClick={handleClosed22} className='trash' icon={faTrashCan} />
                    <form onSubmit={handleSubmit}>

                        <div className="input-field-EditSettings">



                            <div className='account-card-add'>
                                <h4 className='added-Account-title'>
                                    Ridic Business Ventures</h4>

                                <h5 className='added-Account-name'>FIRST CITY MONUMENT BANK</h5>

                                <h6 className='added-Account-number'><img className="shielgImg" src={shielgg} alt="Scam Trust" />4058090355</h6>
                            </div>
                            <div className='account-card'>
                                <div className='account-card-title' onClick={handleEdit12}>
                                    <FontAwesomeIcon className='plus' icon={faPlus} />
                                </div> <h5 className='addAccount'>Add Bank Account</h5>
                            </div>



                            <div className='Wallet-card-left-bottom-left'>
                                <div className='Secured editSetting2'> Secured by <img className='field-bottom-img' src={scamTrustLogo} alt="Scam Trust" /> </div>
                            </div>
                            <button onClick={handleEdit23} className='Next-button yes'> Done </button>
                        </div>



                    </form>
                </div>

            </div>

            <div className={closed24 ? "EditDone active" : Edit23 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Hello Ridic
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed24}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>

                    <center>
                        <img className="DoneImg" src={encrypted} alt="Scam Trust" /></center>
                    <center>
                        <div className='successEdit'>
                            You just added <div className='num'>0155678890, FIRST CITY MONUMENT BANK</div> <div className='numberAccounnt1'>as a new cashout account</div>


                        </div>
                    </center>



                    <button onClick={handleClosed24} className='Next-button yes'> Done </button>

                </div>

            </div>


            <div className={closed13 ? "EditDone active" : Edit12 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Add Cashout Account
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed13}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>
                    <form className='AccountForm' onSubmit={handleSubmit}>

                        <div className="input-field-EditSettings">

                            <div className="input-field-addAccount">
                                <label className='form-text-addAccount'>Bank</label>
                                <img className="bankImg" src={bank} alt="Scam Trust" />
                                <input
                                    onChange={handleChange}
                                    value={values.bank2}
                                    className="inputBox-addAccount"
                                    name='bank2'
                                    placeholder="Choose your bank"
                                    type="text"
                                    autoComplete='off' />


                            </div>
                            {submitted && error.bank2 && <div className='error shift editSetting3'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.bank2}</div>}



                            <div className="input-field-addAccount">
                                <label className='form-text-addAccount2'>Account number</label>
                                <img className="bankNumImg" src={bank123} alt="Scam Trust" />
                                <input onChange={handleChange} value={values.bankNumber2} className="inputBox-addAccount2" name='bankNumber2' placeholder="Enter your business account number" type="text" autoComplete='off' />

                            </div>

                            {submitted && error.bankNumber2 && <div className='error shift editSetting31'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.bankNumber2}</div>}

                            <div className="input-field-addAccount">
                                <label className='form-text-addAccount3'>Account name</label>
                                <input onChange={handleChange} value={values.bankName2} className="inputBox-addAccount3" name='bankName2' type="text" placeholder="" autoComplete='off' />

                            </div>
                            {submitted && error.bankName2 && <div className='error shift editSetting32'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.bankName2}</div>}


                        </div>


                        {((submitted && !error.bankName2) && (submitted && !error.bankNumber2) && (submitted && !error.bank2)) ? (<button onClick={handleEdit22} className='passAccount-button yes' type='submit' > Add account </button>) : (<button className='passAccount-button yes' type='submit' > Add account </button>)}

                    </form>
                    <div className='Wallet-card-left-bottom-left'>
                        <div className='Secured editSetting2'> Secured by <img className='field-bottom-img' src={scamTrustLogo} alt="Scam Trust" /> </div>
                    </div>
                </div>

            </div>

            <div className={closed23 ? "EditDone active" : Edit22 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Add Cashout Account
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed23}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>

                    <form onSubmit={handleSubmit}>

                        <div className="input-field-EditSettings">

                            <div className='account-card-add'>
                                <h4 className='added-Account-title'>
                                    Ridic Business Ventures</h4>

                                <h5 className='added-Account-name'>FIRST CITY MONUMENT BANK</h5>

                                <h6 className='added-Account-number'><img className="shielgImg" src={shielgg} alt="Scam Trust" />4058090355</h6>
                            </div>
                            <div className='account-card-add2'>
                                <h4 className='added-Account-title'>
                                    Ridic Business Ventures</h4>

                                <h5 className='added-Account-name'>Zenith BANK</h5>

                                <h6 className='added-Account-number'><img className="shielgImg" src={shielgg} alt="Scam Trust" />4058090355</h6>
                            </div>



                            <div className='Wallet-card-left-bottom-left'>
                                <div className='Secured editSetting2'> Secured by <img className='field-bottom-img' src={scamTrustLogo} alt="Scam Trust" /> </div>
                            </div>
                            <button onClick={handleEdit24} className='Next-button yes'> Done </button>
                        </div>



                    </form>
                </div>

            </div>

            <div className={closed25 ? "EditDone active" : Edit24 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Hello Ridic
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed25}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>
                    <center>
                        <img className="DoneImg" src={encrypted} alt="Scam Trust" /></center>
                    <center>
                        <div className='successEdit'>
                            You just added <div className='num'>0155678890, Zenith Bank</div> <div className='numberAccounnt1'>as a new cashout account</div>


                        </div>
                    </center>



                    <button onClick={handleClosed25} className='Next-button yes'> Done </button>

                </div>
            </div>





            <div className={closed19 ? "EditDone active" : Edit18 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Edit Email Address
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed19}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>
                    <form onSubmit={handleSubmit}>
                        <div className="EditDone-card-title2">
                            <h5>Enter new email adress</h5>
                        </div>
                        <div className="input-field-EditSettings">

                            <input
                                onChange={handleChange}
                                value={values.email4}
                                className="inputBox-EditSettings"
                                name='email4'
                                placeholder="Enter new email adress"
                                type="text"
                                autoComplete='off' />


                        </div>
                        {submitted && error.email4 && <div className='error editSetting'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.email4}</div>}

                        {((submitted && !error.email4)) ? (<button onClick={handleEdit19} className='Next-button yes'> Next </button>) : ((submitted && error.email4)) ? (<button className='Next-button yes'> Next </button>) : (<button className='Next-button yes'> Next </button>)}

                    </form>
                </div>

            </div>

            <div className={closed20 ? "EditDone active" : Edit19 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Edit email address
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed20}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>
                    <div className='EditDone-OTP'>
                        <img className="otpImg" src={otp} alt="Scam Trust" />
                        <div className='EditDone-OTPForm'>
                            <form autoComplete="off" onSubmit={handleSubmit} >
                                <div className="input-fieldPinEditOTP">
                                    <label className='form-fieldPinEditOTP'>Enter OTP sent to your new email address</label>
                                    <div className="input-fieldPinWrapEdit">
                                        <input
                                            onChange={handleChange}
                                            value={values.pin1}
                                            className="editPin"
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
                                            className="editPin"
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
                                            className="editPin"
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
                                            className="editPin"
                                            name='pin4'
                                            placeholder=""
                                            type="text"
                                            minLength="1"
                                            maxLength="1"
                                            inputMode="numeric"
                                            ref={pin4Ref} />

                                        <input
                                            onChange={handleChange}
                                            value={values.pin5}
                                            className="editPin"
                                            name='pin5'
                                            placeholder=""
                                            type="text"
                                            minLength="1"
                                            maxLength="1"
                                            inputMode="numeric"
                                            ref={pin5Ref} />

                                        <input
                                            onChange={handleChange}
                                            value={values.pin6}
                                            className="editPin"
                                            name='pin6'
                                            placeholder=""
                                            type="text"
                                            minLength="1"
                                            maxLength="1"
                                            inputMode="numeric"
                                            ref={pin6Ref} />

                                    </div>
                                </div>
                                {submitted && error.pinCheckError1 && <span className='error editSettingOTP'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.pinCheckError1}</span>}


                                {(submitted && !error.pinCheckError1) ? (<button onClick={handleEdit16} className='Next-button button-OTP yes'> Next </button>) : (<button className='Next-button button-OTP yes'> Next </button>)}
                            </form>

                            <div className='successEditLong-otp'>
                                <div className='otpMessage'>Didn’t receive OTP?</div>
                                <div className='otpResend'>Resend OTP</div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={closed17 ? "EditDone active" : Edit16 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Hello Ridic
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed17}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>
                    <center>
                        <img className="DoneImg" src={encrypted} alt="Scam Trust" /> </center>
                    <div className='successEdit'>
                        <center>
                            <div className='messageDone1'>  Your email address has been changed from</div>
                            <div className='email1'> <div className='num'>Ridicventures@gmail.com</div> to <div className='num'>Ridicbusiness.ventures@gmail.com</div></div>
                        </center>
                    </div>




                    <button onClick={handleClosed17} className='Next-button yes'> Done </button>

                </div>

            </div>

            <div className={closed18 ? "EditDone active" : Edit17 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Edit Phone number
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed18}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>
                    <form onSubmit={handleSubmit}>
                        <div className="EditDone-card-title2">
                            <h5>Enter new phone number</h5>
                        </div>
                        <div className="input-field-EditSettings">

                            <input
                                onChange={handleChange}
                                value={values.phoneNumber4}
                                className="inputBox-EditSettings"
                                name='phoneNumber4'
                                placeholder="Enter new phone number"
                                type="text"
                                inputMode='numeric'
                                maxLength='11'
                                autoComplete='off' />

                        </div>
                        {submitted && error.phoneNumber4 && <div className='error editSetting'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.phoneNumber4}</div>}

                        {((submitted && !error.phoneNumber4)) ? (<button onClick={handleEdit20} className='Next-button yes'> Next </button>) : ((submitted && error.phoneNumber4)) ? (<button className='Next-button yes'> Next </button>) : (<button className='Next-button yes'> Next </button>)}

                    </form>
                </div>

            </div>

            <div className={closed21 ? "EditDone active" : Edit20 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Edit phone number
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed21}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>
                    <div className='EditDone-OTP'>
                        <img className="otpImg" src={otp} alt="Scam Trust" />
                        <div className='EditDone-OTPForm'>
                            <form autoComplete="off" onSubmit={handleSubmit} >
                                <div className="input-fieldPinEditOTP">
                                    <label className='form-fieldPinEditOTP'>Enter OTP sent to your new phone number</label>
                                    <div className="input-fieldPinWrapEdit">
                                        <input
                                            onChange={handleChange}
                                            value={values.pin7}
                                            className="editPin"
                                            name='pin7'
                                            placeholder=""
                                            type="text"
                                            minLength="1"
                                            maxLength="1"
                                            inputMode="numeric"
                                            ref={pin7Ref} />
                                        <input
                                            onChange={handleChange}
                                            value={values.pin8}
                                            className="editPin"
                                            name='pin8'
                                            placeholder=""
                                            type="text"
                                            minLength="1"
                                            maxLength="1"
                                            inputMode="numeric"
                                            ref={pin8Ref}
                                        />
                                        <input
                                            onChange={handleChange}
                                            value={values.pin9}
                                            className="editPin"
                                            name='pin9'
                                            placeholder=""
                                            type="text"
                                            minLength="1"
                                            maxLength="1"
                                            inputMode="numeric"
                                            ref={pin9Ref} />
                                        <input
                                            onChange={handleChange}
                                            value={values.pin10}
                                            className="editPin"
                                            name='pin10'
                                            placeholder=""
                                            type="text"
                                            minLength="1"
                                            maxLength="1"
                                            inputMode="numeric"
                                            ref={pin10Ref} />

                                        <input
                                            onChange={handleChange}
                                            value={values.pin11}
                                            className="editPin"
                                            name='pin11'
                                            placeholder=""
                                            type="text"
                                            minLength="1"
                                            maxLength="1"
                                            inputMode="numeric"
                                            ref={pin11Ref} />

                                        <input
                                            onChange={handleChange}
                                            value={values.pin12}
                                            className="editPin"
                                            name='pin12'
                                            placeholder=""
                                            type="text"
                                            minLength="1"
                                            maxLength="1"
                                            inputMode="numeric"
                                            ref={pin12Ref} />

                                    </div>
                                </div>
                                {submitted && error.pinCheckError2 && <span className='error editSettingOTP'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.pinCheckError2}</span>}


                                {(submitted && !error.pinCheckError2) ? (<button onClick={handleEdit13} className='Next-button button-OTP yes'> Done </button>) : (<button className='Next-button button-OTP yes'> Done </button>)}

                            </form>
                            <div className='successEditLong-otp'>
                                <div className='otpMessage'>Didn’t receive OTP?</div>
                                <div className='otpResend'>Resend OTP</div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className={closed14 ? "EditDone active" : Edit13 ? "EditDone" : "EditDone active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Hello Ridic
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed14}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>
                    <center >
                        <img className="DoneImg" src={encrypted} alt="Scam Trust" /></center>
                    <center className='successEdit'>

                        Your phone number has been changed from <div className='number1'> <div className='num'>09024875068</div> to <div className='num'>09024875068</div></div>

                    </center>




                    <button onClick={handleClosed14} className='Next-button yes'> Done </button>

                </div>

            </div>
        </div>
    )
}

export default GeneralSettings