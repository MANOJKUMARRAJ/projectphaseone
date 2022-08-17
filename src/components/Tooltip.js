import React from "react";
import "./styles.css";

import ReactTooltip from "react-tooltip";

export default function App() {
  return (
    <div className="App">
      <button data-tip data-for="registerTip">
        Sample Questions <br/>
           To chat
      </button>

      <ReactTooltip id="registerTip" place="bottom" effect="solid">
        
        Hi  Hello<br/>
        How many products in your website<br/>
        how many categories<br/>
        owner of this website<br/>
        Rival of your website<br/>
        Coupon code<br/>
        Suggestion/message to me<br/>-please enjoy 75th year of independence change your social profile dp with tricolour flag 
        can i sort products on my choice<br/>
        can i know clear product description<br/>
        Base location  of your website<br/>
        past orders &nbsp;/ &nbsp;orders&nbsp;/&nbsp;delivery data<br/>
        Are products genuine<br/>
        payment mode &nbsp;&nbsp;COD?<br/>
        categories detailes<br/>
        brands names <br/>
        Payment issue &nbsp; damage problem<br/>
        Revenue &nbsp; &nbsp;Profit of your website<br/>
        images are genuine<br/>
        Where is my product<br/>
        Delivery time<br/>
        Rating<br/>
        Stock<br/>
         is Discount available<br/>
        Revenue &nbsp;/&nbsp;Profit of your company<br/>
        Thankyou &nbsp;/&nbsp;Bye<br/>
        Customer care no<br/>
        please rate my service from 1-10






      </ReactTooltip>
    </div>
  );
}