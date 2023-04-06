
import React, { useState, useEffect } from 'react'
import toggle from './toggle.css';


function Toggle() {

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <label className="switch">
                <input onChange={handleToggle} type="checkbox" />
                <span className="slider" />
            </label>
            <span className="slider-state">{toggle ? 'ON' : 'OFF'}</span> 
        </div>
    );
}

export default Toggle;