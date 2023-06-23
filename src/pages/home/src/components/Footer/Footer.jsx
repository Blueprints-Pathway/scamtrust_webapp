import React, { useState } from 'react'
import './Footer.css'
import {HiArrowRight} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import {ImFacebook} from 'react-icons/im'
import {ImTwitter} from 'react-icons/im'
import {ImLinkedin2} from 'react-icons/im'
import {FaInstagram} from 'react-icons/fa'
import {TbMinusVertical} from 'react-icons/tb'
import DemoContainer from './DemoContainer'


const Footer = () => {
  // const [email, setEmail] = useState("")
  // const [option, setOption] = useState("")


  // const [radio, setRadio] = useState("")

//   const handleChange = (e) => {
//     setEmail(e.target.value);
// }

// const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email) {
//         fetch(`/api/memberAdd?email=${email}`)
//         .then(res => res.json())
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
//     }
  
// }

// const radioChange = (event) => {
//   setRadio(event.currentTarget);
// }



// const onOptionChange = e => {
//   setOption(e.target.value)
// }

// useEffect(() => {
//   if(status === "success") clearFields();
// }, [status])

// const clearFields = () => {
//   // setFirstName('');
//   setOption('');
//   setEmail('');
// }

// const handleSubmit = (e) => {
//   e.preventDefault();
//   email &&
//   // firstName &&
//   // lastName &&
//   email.indexOf("@") > -1 &&
//   onValidated({
//       EMAIL: email,
//       MERGE1: option,
//       // MERGE2: lastName,
//   });
// }

  const year = new Date().getFullYear()

  return (
   <div className='foo-wrapper'>
    <div className='foo-con'>

        <div className="foo-news">
          <p className='news-title'>Subsribe to our newsletter</p>
          <DemoContainer />
        </div>


        <div className="foo-links">
          <p className='links-title'>Company</p>
          <Link className='links-li' to="/about">About</Link>
          <Link className='links-li' to="/Faq">FAQs</Link>
          <a className='links-li' href="#">Blog</a>
        </div>
        <div className="foo-contact">
          <p className='contact-title'>Contact Us</p>
          <a 
          href='mailto:thescamtrust@gmail.com?subject="subject text"'
          className='contact-words'>
            thescamtrust@gmail.com
          </a>
        </div>
    </div>
    <hr />
    <div className="foo-bottom">
      <div className="foo-btm-left">
        <a className='foo-socials' href='#' target='_blank' rel="noreferrer"><ImFacebook /></a>
        <a className='foo-socials' href='https://twitter.com/scamtrust?s=21&t=6fCB-zrWemILkeAJuqUN-w' target='_blank' rel="noreferrer"><ImTwitter /></a>
        <a className='foo-socials' href='#' target='_blank' rel="noreferrer"><ImLinkedin2 /></a>
        <a className='foo-socials' href='https://www.instagram.com/scamtrust' target='_blank' rel="noreferrer"><FaInstagram /></a>
      </div>

      <div className="foo-btm-right">
        <p className='foo-btm-words'>{year}<span className='foo-blue'>
          Blueprints Pathway</span>
          <TbMinusVertical className='line-icon'/>All Rights Reserved</p>
      </div>

    </div>
   </div> 
  )
}

export default Footer