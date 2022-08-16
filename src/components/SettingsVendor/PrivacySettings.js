import React from 'react'
import './settingsVendor.css'

import Toggle from './toggle';



function PrivacySettings() {

    return (
        <div>
            <div className='security-Settings'>
                <label className='security-text'>Push notification</label>
                <label className='security-text-hash'>Control your notifications from here</label>

            </div>
            <div className='security-Line'></div>
            <div className='security-toggle down' > <Toggle /> </div>

            <div className='security-Settings'>
                <label className='security-text'>RC number</label>
                <label className='security-text2'>7654321</label>
                <label className='security-text-hash'>Control your notifications from here</label>

            </div>
            <div className='security-Line'></div>
            <div className='security-toggle up' > <Toggle /> </div>
        </div>
    )
}

export default PrivacySettings