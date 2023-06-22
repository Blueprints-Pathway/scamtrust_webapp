import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'
import img1 from '../../Assets/img-1.jpeg' 
import img2 from '../../Assets/img-2.jpeg' 
import img3 from '../../Assets/img-3.jpeg' 
import img4 from '../../Assets/img-4.jpeg' 
import img5 from '../../Assets/img-5.jpeg'
import img6 from '../../Assets/img-6.jpeg'
import img7 from '../../Assets/img-7.jpeg'
// import midImg from '../../Assets/faq-img.png'
import midImg from '../../Assets/scamtrust.png'
import aboutItems from '../../aboutItems'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='about-page'>
      <Navbar />
      <div className="about-con">

                    {/* T  O  P */}
        <div className="about-top">
          <div className="ab-top-left">
            <p className='ab-top-title'>
              Our Mission
            </p>
            <p className='ab-top-words'>
            At ScamTrust, we aim to solve the problem of customers doubting the credibility of businesses due to their past experiences with fraudulent or dubious vendors by offering a safe platform, assisting businesses in establishing credibility, and fostering transparent transactions between customers and authentic vendors.
            </p>
          </div>          
          
          <div className="ab-top-right">
            <div className="img-col-1">
              <img className='ab-tall-img ab-img-1' src={img1} alt="..." />
            </div>
            <div className="img-col-2">
              <img className='ab-small-img' src={img2} alt="..." />
              <img className='ab-tall-img ab-img-space' src={img3} alt="..." />
              <img className='ab-smaller-img ab-img-4' src={img4} alt="..." />
            </div>
            <div className="img-col-3">
              <img className='ab-tall-img ab-img-5' src={img5} alt="..." />
              <img className='ab-smaller-img ab-img-space ab-img-6' src={img6} alt="..." />
              <img className='ab-tall-img' src={img7} alt="..." />
            </div>
          </div>          
        </div>
                
                     {/* M  I  D */}

        <div className="about-mid">
          <div className="ab-mid-left">
            <img className='ab-mid-img' src={midImg} alt="..." />
          </div>
          <div className="ab-mid-right">
            <p className='ab-mid-title'>
              Our Story
            </p>
            <p className='ab-mid-words'>
            We are a close-knit team of individuals who strongly think that the world should be fraud-free. In order to assist you to manage your financial transactions without the usual inconveniences, we have designed the most sophisticated and reliable digital platform in the world. We see an opportunity in using technology to solve this problem.
            <br />
            <br />
            We think that every party to a transaction has the right to be involved in the payment process throughout the duration of the transaction. We have a responsibility to make sure that this right is used and that online payment is developed to the highest standard possible.
            </p>
          </div>
        </div>
              
                      {/* B O T T O M */}

        <div className="about-bottom">
          <div className="ab-bottom-top">
            <p className='ab-bottom-title'>
             Meet The Game Changers
            </p>
            <p className='ab-bottom-words'>
            We are strong believers in completely eradicating payment fraud, not just peer-to-peer fraud so that everyone and everywhere can interact with complete trust.
            </p>
          </div>
          <div className="ab-bottom-bottom">
             {aboutItems.map((item) => {
              return(
            <div className='ab-img-div' key={item.id}>
            <img className='ab-bottom-img' src={item.img} alt="..." />
            <p className='ab-name'>{item.name}</p>
            <p className='ab-position'>{item.position}</p>
            </div>
              )
             })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About