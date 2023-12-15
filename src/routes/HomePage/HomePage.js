import React from 'react';

import {Link} from "react-router-dom";


import './HomePage.css';


const HomePage = () => {
  return (
    <div className='HomePage'>
        <h1 className='header'>Nilwala NIGHT 23</h1>
        <h1 className='header2'>Nilwala Ticket Portal</h1>
        <div className='buttonContainer'>
            <Link to='/app' className='button'>Buy Tickets</Link>
        </div>
    </div>
  );
};

export default HomePage;