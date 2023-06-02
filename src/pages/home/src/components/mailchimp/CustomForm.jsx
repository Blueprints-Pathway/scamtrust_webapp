import React from 'react'
import { useState } from 'react'

const CustomForm = () => {
    const [email, setEmail] = useState("")
    const [option, setOption] = useState("")
    const [radio, setRadio] = useState("")

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            fetch(`/api/memberAdd?email=${email}`)
            .then(res => res.json())
            .then(res => //console.log(res))
            .catch(err => //console.log(err))
        }
      
    }

    const radioChange = (event) => {
      setRadio(event.currentTarget);
    }


  return (
    <form onSubmit={handleSubmit}>
        <input
        name='email'
         type="email"
         placeholder='Enter your email'
         value={email} 
         onChange={handleChange}
         />

         <div onClick={() => {setOption("Vendor")}}>
          <input
           type="radio"
           name='option'
          //  value="vendor"
           value={radio}
           onChange={radioChange}
           checked={option === "Vendor"}
            /> Vendor
         </div>

         <div onClick={() => {setOption("Customer")}}>
          <input
           type="radio"
           name='option'
           value={radio}
           onChange={radioChange}
           checked={option === "Customer"}
            /> Customer
         </div>

         <button  type="submit">
            sbscribe
         </button>
    </form>
  )
}

export default CustomForm