import React from "react";
import Tooltip from "./Toolip";
import clock from "../images/clock.gif";

function HoursIcon() {
  return (
    <Tooltip
      text={
        <div>
          <p className="font-bold">08:30-14:30</p>
          <p>Δευτέρα - Παρασκευή</p>
        </div>
      }
    >
      <div className="flex items-center px-4 cursor-pointer">
        <img
          src={clock}
          alt="location"
          className="h-6 w-auto filter multiply"
        />
      </div>
    </Tooltip>
  );
}

export default HoursIcon;
