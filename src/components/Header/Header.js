import React from 'react';
import './HeaderStyle.css';
import logo from '../../assets/NaadaLogo4.png';
const Header = () => {
  return (
    <div>
        {/* <h1 className='header'>Leo Naada 2024</h1> */}
         <div className="NaadaLogoDiv"><img src={logo} alt='logo' className='Naadalogo'/></div>
         
        {/* <h1 className='header2'>Leo Naada 2024 - Ticket Portal</h1> */}
    </div>
  );
};

export default Header;
