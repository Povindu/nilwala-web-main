import React from 'react'
import  './FormDetails.css'


export default function FormDetails() {
  return (
    <div className='FDouter'>
      <div className='FDinner'>

        <div className="payment">
          <h1 className='ticketPrice'> Ticket Price:  LKR:2000</h1>
            <br/>
            <br/>
            <h1 className='paymentMethod'>Payment Methods</h1>
            
            
            • Account No:  101052733054
            <br/>
            • Holder's Name: N.A Abeygunawardena
            <br/>
            • Branch: Sampath Bank Matara Super Branch
            <br/>
            <br/>
        </div>

        <div className="contactInfo">
          For further clarifications please contact :
          <br/> Project Chairman
          <br/> Leo Ama Samarawikrama
          <br/> 071889940
        </div>
      </div>
    </div>
  )
}
