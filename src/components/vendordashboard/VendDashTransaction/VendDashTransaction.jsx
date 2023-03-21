import React from "react"
import "./VendDashTransaction.css"
import { Tabs } from "antd"

import { data } from "../../../data/data"
import { Table } from "antd"

const VendDashTransaction = () => {
  const TabPanel = Tabs

  return (
    <div className='vendor-dash-tab-wrapper'>
      {/* TRANSACTION */}
      <h2 className="vendor-transcation">Transcation</h2>
      <div className='vendor-dash-transaction-tab'>
        
            <table style={{ width: "", }}>
              <tr style={{ borderBottom: "1px solid #3C3E4D" }}>
                <td style={{ width: "160px",fontSize:"16px",paddingTop: "12px",
                  paddingBottom: "12px",color:"#023A81" }}  className="thead" >All</td>
                <td style={{ width: "150px",fontSize:"16px" }}  className="thead">Outgoing</td>
                <td style={{ width: "120px",fontSize:"16px" }} className="thead">Completed</td>
                <td style={{fontSize:"16px"}} className="thead">Cancelled</td>
              </tr>
              <tr>
                <td style={{ width: "160px", }}  className="thead" >Transaction</td>
                <td style={{ width: "150px", }}  className="thead">Vendorname</td>
                <td style={{ width: "120px", }} className="thead">Amount</td>
                <td  className="thead">Date</td>
              </tr>
              {data.map((item,key)=>{
                return(
                  <tr key={item.id} style={{marginBottom:"50px"}}>
                  <td style={{ paddingTop: "12px",
                  paddingBottom: "12px"}}>
                    <div className="transcation">
                      <img src={item.imgUrl} alt="" />
                     <div>
                     <h5 className="transaction-details">{item.phone}</h5>
                      <h5 className="transaction-status">{item.status}</h5>
                     </div>
                    </div>
                  </td>
                  <td   className="transaction-details">{item.name}</td>
                  <td style={{}}  className="transaction-details">{item.amount}</td>
                  <td style={{}}  className="transaction-details">{item.date}</td>
                </tr>
                )
              })}
              
            </table>
         
      </div>
    </div>
  )
}

export default VendDashTransaction
