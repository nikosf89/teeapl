import React from "react";
import { useState, useEffect } from "react";

function BudgetsSection() {
  const [isFired, setIsFired] = useState(false);

  /* useEffect(() => {
    if (isFired) {
      const fileContent = "..."; // Replace with your file content
      const blob = new Blob([fileContent], {
        type: "application/vnd.oasis.opendocument.spreadsheet",
      });

      // Create a URL for the blob
      const url = URL.createObjectURL(blob);

      // Create a link element and simulate a click event
      const link = document.createElement("a");
      link.href = url;
      link.download =
        "https://www.teaapl.gr/images/pdf/isologismoi/proypologismos%202017.pdf"; // Set the desired file name
      link.click();

      // Clean up the URL and link
      URL.revokeObjectURL(url);
      link.remove();
      setIsFired(false);
    }
  }, [isFired]); */

  const handleDownload = () => {
    
    const downloadLink = document.createElement('a');
    downloadLink.href = process.env.PUBLIC_URL + '/proipologismos.pdf';  
    downloadLink.download = 'ΠΡΟΥΠΟΛΟΓΙΣΜΟΣ'; 
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
  };

  return (
    <div className="h-screen flex items-center justify-center py-2 md:py-12 bg-gray-100">
      <div className="max-w-full md:max-w-2xl mx-auto bg-white p-4 md:p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300">
        {/* Title */}
        <h1 className=" text-center text-xl md:text-2xl font-extrabold mb-4 md:mb-6 text-custom-new-blue border-b pb-2 md:pb-4">
          ΠΡΟΥΠΟΛΟΓΙΣΜΟΙ
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 mb-4 md:mb-8 text-xs md:text-sm leading-relaxed">
          Εδώ μπορείτε να βρείτε τα τελευταία αρχεία του προϋπολογισμού μας για
          λήψη.
        </p>

        {/* PDF Section */}
        <div className="flex flex-col md:flex-row items-start mb-4">
          {/* PDF Icon */}
          <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
            <svg
              className="w-10 md:w-14 h-10 md:h-14 text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 7V4a2 2 0 0 1 2-2h5l2 2 5 .03L22 4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z"></path>
              <line x1="4" y1="7" x2="22" y2="7"></line>
              <line x1="2" y1="12" x2="6" y2="12"></line>
              <line x1="18" y1="12" x2="22" y2="12"></line>
              <line x1="2" y1="16" x2="6" y2="16"></line>
              <line x1="18" y1="16" x2="22" y2="16"></line>
            </svg>
          </div>

          {/* PDF Info & Download */}
          <div>
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
              Αναφορά προϋπολογισμών 2017
            </h2>
            <a
              onClick={() => {setIsFired(true); handleDownload()}}
              className="cursor-pointer inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs md:text-sm uppercase tracking-wider px-4 md:px-6 py-2 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:translate-y-1 hover:shadow-xl"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetsSection;