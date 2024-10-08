
import FormComp from "../../components/FormComp/FormComp.js";
import FormDetails from '../../components/FormDetails/FormDetails.js';
import Header from '../../components/Header/Header.js';

import '../TicketPortal/TicketPortal.css'

function TicketPortal() {
  return (
    <div className="App">
      <div className="outer">
        <div className="headerCN"><Header/></div>
        <div className="mainContainer">
          <div className="FormDetailsCN"> <FormDetails /></div>
          <div className="FormCompCN"> <FormComp /></div>
        </div>
        
        <div className="diya-doothak-div">
          <img className="diya-doothak-logo" src={require("../../assets/Diya_Dothak_Logo.png")} alt="Diyadoothak" draggable="false"/>
          <p className="diya-doothak-content">Funds raised from this project will be allocated towards "Diya Doothak" initiative which aims to provide water filtering system to Anuradhapura Thambiya Dharmapala Maha Vidyalaya. 
          <br/>
          <br/>
          Imagine the joy of children laughing, playing, and thriving with the gift of clean water where they dreams of a future free from the shadows of kidney diseases. 
          <br/>
          <br/>
          Together, we can make this vision a reality by building a lifeline for generations to come.  
          <br/>
          <br/>
          <img className="diya-doothak-img" src={require("../../assets/DiyaDoothakFlyer.jpg")} alt="Diya Doothak Flyer" draggable="false"/>
          
          <br/>
          <p className="donateText">You can now donate to this project via Karuna.lk </p>
          <br/>
          <a className="diya-link" href="https://app.karuna.lk/api/v1/program/diya-dothak-a2leos"> Donate Now!</a>
          <br/>
          <br/>
          </p>
        </div>

        <div className="footerPortal">
            Leo Naada Ticket Master Portal is a product of Leo District 306 A2. &nbsp; Made with ♡ by A2 Leos
        </div>
      </div>
    </div>
  );
}

export default TicketPortal;
