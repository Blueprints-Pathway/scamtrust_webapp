import React from 'react'
import './Faq.css'
import { Accordion, AccordionSummary, AccordionDetails} 
from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {vfaq} from '../../faqItem' 

const VendorFaq = () => {
  return (
    <div>
        <div className="faq-accordion">   
          {vfaq.map((item) => {
            return(
        <Accordion className='acc-con' key={item.id}>
                <AccordionSummary 
                sx={{ bgcolor: "#353935", color: "white" }}
                expandIcon={<ExpandMoreIcon className='acc-icon' style={{background: '#448feb', color: '#fff'}} />}>
                    <p className='typography'>
                      {item.question}
                    </p>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: "#353935", 
                     color: "white" }}>
                    <p className='acc-content'>
                    {item.answer}
                    </p>
                </AccordionDetails>
            </Accordion>
            )
          })}
        </div>
    </div>
  )
}

export default VendorFaq