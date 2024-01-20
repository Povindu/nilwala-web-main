import React from 'react'
import  './FormDetails.css'


export default function FormDetails() {
  return (
    <div className='FDouter'>
      <div className='FDinner'>

        <div className="payment">
        {/* &nbsp; */}
          <h1 className='ticketPrice'> Ticket Price <br/>  Rs.800 </h1>
            <br/>

            <h1 className='paymentMethod'>Registration Steps</h1>

            1. Make the payment to the following account.<br/>
            2. Fill the registration form and upload the payment slip.<br/>
            3. Submit the form<br/>
            <br/>
            <p className='detailP'>After verifying the payment, you will recieve a confirmation email within few hours.<br/></p>
            <br/>


            <h1 className='paymentMethod'>Payment Methods</h1>
            
            
            • Account No:  
            <br/>
            • Holder's Name: 
            <br/>
            • Branch: 

        </div>

        <div className="contactInfo">
          For further clarifications please contact :
          <br/> Project Chairman
          <br/> Leo Povindu Samarasekara
          <br/> 070 3031782
        </div>
      </div>
    </div>
  )
}
