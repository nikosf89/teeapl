import React from "react";
import Tooltip from "./Toolip";
import phone from "../images/phone.gif";

function PhoneIcon() {
  return (
    <Tooltip
      text={
        <div>
          <p className="font-bold">2105202638</p>
          <p>info@teaapl.gr</p>
        </div>
      }
    >
      <div className="flex items-center px-4 cursor-pointer">
        <img src={phone} alt="location" className="h-6 w-auto" />
      </div>
    </Tooltip>
  );
}
export default PhoneIcon;
