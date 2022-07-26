import React from 'react'
import './center.css'
import sideBar from '../generalSettings/sideBar'

function Center() {
    return (
        <>
            <div className="Center">
                <div className="CenterTop">
                    <img src="/images/shielgg.png" alt="Scam Trust" />
                </div>
            </div>
            
            <div className="CenterBottom">
                <div className="vendorName">
                <h1>Ridic Business Ventures</h1>
                </div>
                <div className="vendorAction">
                <p>Edit</p>
                </div>
            <div className="CenterImg1">
                <div className="CenterImg2">
                    <div className="CenterImg">
                    <img src="/images/gallery-1.jpg" alt="Scam Trust" className="CenterImage" />
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Center