import React from 'react'
import Cancelled from '../cancelled/Cancelled'
import Completed from '../completed/Completed'
import Awaiting from '../outgoing/awaiting/Awaiting'
import Ongoing from '../outgoing/ongoing/Ongoing'

const AllTransaction = () => {
  return (
    <div>
      <Awaiting />
      <Completed />
      <Cancelled />
      <Ongoing />
    </div>
  )
}

export default AllTransaction