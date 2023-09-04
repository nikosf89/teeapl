import React, { useState } from "react";
import search from "../images/search.gif";

function SearchIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center px-4">
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
        <img src={search} alt="location" className="h-6 w-auto" />
      </button>

      {isOpen && (
        <input
          autoFocus
          className="border ml-2 rounded-md px-2"
          type="text"
          placeholder="Αναζήτηση..."
          onBlur={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default SearchIcon;
