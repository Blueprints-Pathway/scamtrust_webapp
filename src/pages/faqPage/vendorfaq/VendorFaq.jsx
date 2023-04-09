import React from 'react'
import classes from './VendorFaq.module.css'
import item from './VendorFaqList'

const VendorFaq = () => {
  return (
    <div className={classes['wrapper']}>

        <div className={classes['title-con']}>
            <p className={classes['title']}>SCAMTRUST VENDOR FAQ</p>
        </div>
        
        <div className={classes['content-wrapper']}>

            {item.map((faq)=>{
                return(
              <div className={classes['content-con']}>
                  <p className={classes['content-title']}>{faq.title}</p>
                  <p className={classes['content-words']}>{faq.words}</p>
                      <p className={classes['list']}>{faq.list1}</p>
                      <p className={classes['list']}>{faq.list2}</p>
                      <p className={classes['list']}>{faq.list3}</p>
                      <p className={classes['list']}>{faq.list4}</p>
              </div>
            )})}

        </div>

    </div>
  )
}

export default VendorFaq