import React from 'react'
import  './FormDetails.css'


export default function FormDetails() {
  return (
    <div className='FDouter'>
      <div className='FDinner'>

        <div className="payment">
        {/* &nbsp; */}
          <h1 className='ticketPrice'> Ticket Price <br/>  LKR 2000 </h1>
            <br/>

            <h1 className='paymentMethod'>Registration Steps</h1>

            1. Make the payment to the following account.<br/>
            2. Fill the registration form and upload the payment slip.<br/>
            3. Submit the the form<br/>
            <br/>
            <p className='detailP'>After verifying the payment, you will recieve a confirmation email within few hours.<br/></p>
            <br/>


            <h1 className='paymentMethod'>Payment Methods</h1>
            
            
            • Account No:  101052733054
            <br/>
            • Holder's Name: N.A Abeygunawardena
            <br/>
            • Branch: Sampath Bank Matara Super Branch

        </div>

        <div className="contactInfo">
          For further clarifications please contact :
          <br/> Project Chairman
          <br/> Leo Ama Samarawikrama
          <br/> 0718899400
        </div>
      </div>
    </div>
  )
}
