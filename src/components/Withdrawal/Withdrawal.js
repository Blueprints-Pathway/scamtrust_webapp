import React, { Component, useState, useEffect, useRef } from 'react'
import './Withdrawal.css'
import scamTrustLogo from '../../images/Group114(1).png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import encrypted from '../../images/encrypted.png'
import shielgg from '../../images/shielgg.png'

function Withdrawal() {
    const [values, setValues] = useState({
        Destination: '',
        Amount: '',
        Transaction: '',
        Bank: '',
    });

    const [error, setError] = useState({
        Destination: '',
        Amount: '',
        Transaction: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }
    const handleBank = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
        setClosed4(!closed4);
    }

    const validate = (values) => {
        const error = {};

        if (!values.Destination) {
            error.Destination = 'Choose a destination account';
        }
        if (!values.Amount) {
            error.Amount = 'Enter an amount';

        }
        if (!values.Transaction) {
            error.Transaction = 'Enter your Transaction pin';

        }

        return error;
    }

    const handleOpen = () => {
        setOpen(!Open);
        setClosed4(false);
    }
    const [Open, setOpen] = useState(false);

    const handleOpen2 = () => {
        setOpen2(!Open2);
        setOpen3(false);
        setClosed1(false);
        setClosed2(false);
        
    }
    const [Open2, setOpen2] = useState(false);

    const handleOpen3 = () => {
        setOpen3(!Open3);
        setClosed5(false);
        
    }
    const [Open4, setOpen4] = useState(false);

    const handleOpen4 = () => {
        setOpen4(!Open4);
        setClosed3(false);
    }
    const [Open3, setOpen3] = useState(false);

    const handleClosed1 = () => {
        setClosed1(!closed1);
    }
    const [closed1, setClosed1] = useState(false);

    const handleClosed2 = () => {
        setClosed2(!closed2);
        setClosed1(true);
    }
    const [closed2, setClosed2] = useState(false);

    const handleClosed3 = () => {
        setClosed3(!closed3);
        setClosed1(true);
        setClosed2(true);
    }
    const [closed3, setClosed3] = useState(false);

    const handleClosed4 = () => {
        setClosed4(!closed4);
        setOpen(false);
    }
    const [closed4, setClosed4] = useState(false);

    const handleClosed5 = () => {
        setClosed5(!closed5);
    }
    const [closed5, setClosed5] = useState(false);

    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setError(validate(values));
    }

    useEffect(() => {
        if (Object.keys(error).length === 0 && submitted);
    }, [error]);

    return (
        <div className="SettingsVendor">
            <div className={closed1 ? "EditDone1 active" : "EditDone1"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Withdrawal
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed1}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>
                    <form>
                        <label className="Withdrawal-card-title2">
                            <h5>Amount</h5>
                        </label>
                        <div className="input-field-Withdrawal">



                            <input
                                onChange={handleChange}
                                value={values.Amount}
                                className="inputBox-Withdrawal"
                                name='Amount'
                                placeholder="Enter amount"
                                type="text"
                                inputMode='numeric'
                                autoComplete='off' />

                        </div>
                        {submitted && error.Amount && <div className='error editSetting6'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.Amount}</div>}

                        <label className="Withdrawal-card-title2">
                            <h5>Destination account</h5>
                        </label>
                        <div className="input-field-Withdrawal">
                            <input
                                onChange={handleChange}
                                value={values.Destination}
                                className="inputBox-Withdrawal"
                                name='Destination'
                                placeholder="Enter a destination account"
                                type="text"
                                disabled
                                autoComplete='off' />
                            <FontAwesomeIcon onClick={handleOpen} className='arrowIconWithdrawal' icon={faCaretDown} />
                        </div>
                        {submitted && error.Destination && <span className='error editSetting6'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.Destination}</span>}

                        <div className='Secured editSetting5'> Secured by
                            <img className='field-bottom-img' src={scamTrustLogo} alt="Scam Trust" />
                        </div>

                       
                        

                    </form>
                    {((submitted && !error.Amount) && (submitted && !error.Destination)) ? (<button type='submit' onClick={handleOpen3} className='confirm-button yes'> Confirm </button>) : ((submitted && error.Destination) && (submitted && error.Amount)) ? (<button onClick={handleSubmit} className='confirm-button yes'> confirm </button>) : (<button onClick={handleSubmit} className='confirm-button yes'> confirm </button>)}
                    
                </div>
            </div>
            <div className={ closed2 ? "EditDone1 active" : Open2 ? "EditDone1" : "EditDone1 active"}>
                <div className='EditDone-card'>
                 
                    <div className='EditDone-message'>
                        Transaction pin
                    </div>
                    <div className='EditDone-description'>
                        Please enter transaction pin to proceed.
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed2}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>
                    <form>
                        <label className="Withdrawal-card-Pintitle">
                            <h5>Transaction pin</h5>
                        </label>
                        <div className="input-field-Withdrawal2">



                            <input
                                onChange={handleChange}
                                value={values.Transaction}
                                className="inputBox-Withdrawal"
                                name='Transaction'
                                placeholder="Enter Transaction Pin"
                                type="text"
                                inputMode='numeric'
                                autoComplete='off'
                                maxLength={4} />

                        </div>
                        {submitted && error.Transaction && <div className='error editSetting6'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.Transaction}</div>}



                        <div className='Secured editSetting5'> Secured by
                            <img className='field-bottom-img' src={scamTrustLogo} alt="Scam Trust" />
                        </div>

                        

                    </form>
                    {(submitted && !error.Transaction) ? (<button onClick={handleOpen4} className='confirm-button yes'> Confirm </button>) : (submitted && error.Transaction) ? (<button onClick={handleSubmit} className='confirm-button yes'> confirm </button>) : (<button onClick={handleSubmit} className='confirm-button yes'> confirm </button>)}
                </div>
            </div>
            <div className={ closed3 ? "EditDone1 active" : Open4 ? "EditDone1" : "EditDone1 active"}>
                <div className='EditDone-card'>
                    <div className='EditDone-message'>
                        Withdrawal details
                    </div>
                    <div className='EditDone-card-close'>
                        <h1 onClick={handleClosed3}>Close X </h1>
                    </div>
                    <div className='EditDone-Line'></div>

                    
                    <div className='EditDone-description1'>
                        Hello Chukwudi 👋🏽
                    </div>
                    <div className='withdrawal'>
                    <div className='EditDone-status'>
                        Withdrawal Successful
                    </div>
                    <img className="DoneImage" src={encrypted} alt="Scam Trust" />
                        <center className='successWithdrawal3'>
                            <div className='num'>₦25,000
                            </div> <div className='numberAccounnt1'>has been successfuly sent to your Zenith Bank account</div>


                        </center>

                    </div>
                    <div className='Secured editSetting5'> Secured by
                        <img className='field-bottom-img' src={scamTrustLogo} alt="Scam Trust" />
                    </div>

                    <button onClick={handleClosed3} className='Next-button yes'> Done </button>

                </div>

            </div>
            <div className={ closed4 ? "EditDone1 active" : Open ? "EditDone1" : "EditDone1 active"}>

                <div className='Bank-card'>
                    <img className="AccountImg" src={shielgg} alt="Scam Trust" />
                    <div className='Bank-Account'>
                        <input type='radio' value='Zenith Bank' name='Destination' className="choose" onClick={handleBank}>

                        </input>
                        <label className="Bank-details">
                            <h5 className="Bank-name">Zenith Bank</h5>
                            <h5 className="Bank-number">0155678890</h5>
                        </label>
                    </div>

                    <div className='Bank-Account'>
                        <input type='radio' value='First City Monument Bank' name='Destination' className="choose" onClick={handleBank}>

                        </input>
                        <label className="Bank-details">
                            <h5 className="Bank-name">First City Monument Bank</h5>
                            <h5 className="Bank-number">4058090355</h5>
                        </label>
                    </div>

                </div>


            </div>
            <div className={ closed5 ? "EditDone1 active" : Open3 ? "EditDone1" : "EditDone1 active"}>

                <div className='Bank-card2'>

                    <h5 className="Bank-massage">Transfer of ₦25,000</h5>
                    <h5 className="Bank-description">You are about to transfer ₦200,000 to the selected bank account.</h5>
                    <h5 className="Bank-description2">A transaction fee of ₦200,000 applies.
                        Please confirm</h5>
                    <button onClick={handleOpen2} className='Okay-button yes'> Okay </button>
                    <button onClick={handleClosed5} className='Cancle-button yes'> Cancle </button>
                </div>


            </div>
        </div>
    )
}

export default Withdrawal;