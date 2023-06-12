import React, { useState } from 'react'
import './Intro.css'
import spiralDot from '../../Assets/spiral-dot.png'
import scamtrustVideo from '../../Assets/scamtrustVideo.mp4'
import { FaRegPlayCircle } from 'react-icons/fa'
import videoImg from '../../Assets/video.jpg'
import cover from '../../Assets/img-2.jpeg'
import { Link } from 'react-router-dom';

const Intro = () => {

    const [play, setPlay] = useState(true);

    const handlePlay = () => {
        setPlay(false);
    }

  return (
    <div className='intro-con'>
        <div className='intro-top'>
            <p className='intro-title'>How it works</p>
            <div className='img-div'>
            <img className='spiral-img' src={spiralDot } alt="..." />
            </div>
            
            <div className="point-div">

                <div className='point'>
                    <p className='figure'>1</p>
                    <div>
                        <p className='point-title'>
                            Initiate a Transaction
                        </p>
                        <p className='point-words'>
                        Agree on a price and the vendor accepts the transaction.
                        </p>
                        <Link className='point-link' to="/know-more">Learn more</Link>
                    </div>
                </div>
                
                <div className='point point2'>
                    <p className='figure'>2</p>
                    <div>
                        <p className='point-title'>
                             Make payments 
                        </p>
                        <p className='point-words'>
                        Secure your payment with the Scamtrust wallet and Deliver the product
                        </p>
                        <Link className='point-link' to="/know-more">Learn more</Link>
                    </div>
                </div>

                <div className='point point3'>
                    <p className='figure'>3</p>
                    <div>
                        <p className='point-title'>
                           Deliver & Complete transaction
                        </p>
                        <p className='point-words'>
                        Pay after inspecting your purchase and completing the transaction.
                        </p>
                        <Link className='point-link' to="/know-more">Learn more</Link>
                    </div>
                </div>
            </div>
        </div>

                        {/* BOTTOM */}
        <div className='intro-bottom'>
            <div className="left">
                <p className='btm-title'>
                    <span style={{color: '#f6d645'}}>Do not </span>
                    pay to <br /> online vendor <br /> without
                    <span style={{color: '#5597fa'}}> ScamTrust</span>
                </p>
                <p className='btm-words'>
                We are here to bridge the gap between financial transactions. Your Financial security is our priority. Enjoy safe, free and verified transactions.
                </p>
                <Link className='point-link' to="/know-more">Learn more</Link>
            </div>
            <div className="right">
                {
                    play ?
                <div className='img-action'>
                <img  className='video-img' src={videoImg} alt="..." />
                <div className='play-con'>
                  <FaRegPlayCircle  onClick={handlePlay}
                  className="play-icon" />
                  <p className='play-words'>Play This video</p>
                </div>
                </div> :
                <video 
                className='video-img'
                // poster={cover}
                loop 
                controls 
                autoPlay={true} 
                 >
                  <source src={scamtrustVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                } 
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Intro