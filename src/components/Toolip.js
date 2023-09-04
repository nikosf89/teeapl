import React from "react";

function Tooltip(props) {
  return (
    <div className="group relative cursor-pointer">
      <div className="absolute z-10 hidden group-hover:block w-auto px-2 py-1 mt-3 text-sm font-normal leading-tight text-white rounded-md shadow-xl bg-blue-700 -left-1/2 transform -translate-x-1/2 -bottom-12 whitespace-nowrap">
        {props.text}
      </div>
      {props.children}
    </div>
  );
}

export default Tooltip;
