
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
      </div>
    </div>
  );
}

export default TicketPortal;
