import React, { useState } from 'react'
import App from './App'

const Loader = () => {
  
    const [isReady, setIsReady] = useState(false);

  return (
    <div>
        {!isReady ? <h1>App is loading</h1> : <App />}
    </div>
  )
}

export default Loader