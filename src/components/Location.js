import React from "react";
import Tooltip from "./Toolip";
import earth from "../images/earth.gif";

function LocationIcon() {
  return (
    <Tooltip
      text={
        <div>
          <p className="font-bold">Βερανζέρου 30 (4ος οροφος)</p>
          <p>Αθήνα 10432</p>
        </div>
      }
    >
      <div className="flex items-center px-4 cursor-pointer">
        <img src={earth} alt="location" className="h-6 w-auto" />
      </div>
    </Tooltip>
  );
}
export default LocationIcon;
