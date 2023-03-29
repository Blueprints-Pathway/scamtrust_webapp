import React from 'react'
import Awaiting from './awaiting/Awaiting'
import Ongoing from './ongoing/Ongoing'

const Outgoing = () => {

  return (
    <div style={{marginTop: '0px'}}>
          <Ongoing />
          <Awaiting />
    </div>
  )
}

export default Outgoing