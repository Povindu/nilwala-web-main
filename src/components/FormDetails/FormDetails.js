import React from 'react'
import  './FormDetails.css'


export default function FormDetails() {
  return (
    <div className='FDouter'>
      <div className='FDinner'>

        <div className="payment">
        {/* &nbsp; */}
          <h1 className='ticketPrice'> TICKET PRICE <br/>  Rs.800 </h1>
            <br/>

            <h1 className='paymentMethod'>Registration Steps</h1>

            1. Make the payment to the following account.<br/>
            2. Fill the registration form and upload the payment slip.<br/>
            3. Submit the form<br/>
            <br/>
            <p className='detailP'>After verifying the payment, you will recieve a confirmation email within few hours.<br/></p>
            <br/>

            <br/>
            <h1 className='paymentMethod'>Payment Methods</h1>
            
            
            • Account No: 91081144

            <br/>
            • Holder's Name: Sunera Alahkoon
            <br/>
            • Bank: Bank Of Ceylon 7010
            <br/>
            • Branch: 678 Padukka

        </div>

        <div className="contactInfo">

          For Further Clarifications :
          <br/>
          <br/> Project Chairman
          <br/> Leo Povindu Samarasekara
          <br/> 070 303 1782
          <br/>
          <br/> Project Treasurer 
          <br/> Leo Sunera Alahkoon
          <br/> 077 636 7576
        </div>
      </div>
    </div>
  )
}
