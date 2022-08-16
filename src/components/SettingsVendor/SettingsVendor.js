import React, { useState } from 'react'
import './settingsVendor.css'

import shielgg from '../../images/shielgg.png'
import Frame318 from '../../images/Frame318.png'
import SideBar from '../SideBar/SideBar';
import PrivacySettings from './PrivacySettings';
import SecuritySettings from './SecuritySettings';
import GeneralSettings from './GeneralSettings';



function SettingsVendor() {

    const handleSelect = () => {
        setSelect(!select);
        setSelect2(false);
        setSelect3(false);
    }

    const [select, setSelect] = useState(true);

    const handleSelect2 = () => {
        setSelect2(!select2);
        setSelect(false);
        setSelect3(false);
    }
    const [select2, setSelect2] = useState(false);

    const handleSelect3 = () => {
        setSelect3(!select3);
        setSelect(false);
        setSelect2(false);
    }
    const [select3, setSelect3] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    }
    const [checked, setChecked] = useState(false);

    return (
        <>
            <div className='containerSettings' >
                <div className='containerSettings2' >
                    <div className={checked ? 'Center active' : 'Center'}>

                        <img className="CenterTopImg" src={shielgg} alt="Scam Trust" />

                    </div>

                    <div className={checked ? "CenterBottom active" : "CenterBottom"}>
                        <div className="vendorNameSettings">
                            <h1>Ridic Business Ventures</h1>
                        </div>

                        <div className="CenterImg1">
                            <div className="CenterImg2">
                                <div className="CenterImg3">
                                    <img className="CenterImage1" src={Frame318} alt="Scam Trust" />
                                </div>
                            </div>
                        </div>
                        <div className="CenterGeneralSettings">
                            <div className="GeneralSettings">



                                <div className="category">
                                    {select ? (<h6 className="Selection active" onClick={handleSelect}>General Settings</h6>
                                    ) : <h6 className="Selection" onClick={handleSelect}>General Settings</h6>}
                                    {select2 ? <h6 className="Selection active" onClick={handleSelect2}>Security Settings</h6> : <h6 className="Selection" onClick={handleSelect2}>Security Settings</h6>}
                                    {select3 ? <h6 className="Selection active" onClick={handleSelect3}>Privacy Settings</h6> : <h6 className="Selection" onClick={handleSelect3}>Privacy Settings</h6>}

                                </div>

                                <div className={select ? "form-GeneralSettings white-bg" : 'hide'} >
                                    
                                    <GeneralSettings />


                                </div>
                                <div className={select2 ? "password-GeneralSettings white-bg" : 'hide'} >
                                    
                                    <SecuritySettings />

                                </div>

                                <div className={select3 ? "security-GeneralSettings" : 'hide'} >
                                <PrivacySettings />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                <SideBar /> 
            </div>
        </>
    )
}

export default SettingsVendor