import { useEffect, useState } from "react";
import axios from "axios";

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [expandAll, setExpandAll] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/syxnes-erotiseis");
      setData(response.data.data);
      console.log(response);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const handleToggleAll = () => {
    if (expandAll) {
      setExpandAll(false);
      setExpandedIndex(null);
    } else {
      setExpandAll(true);
      setExpandedIndex(null);
    }
  };

  return (
    <div className="p-2 sm:p-4 md:p-8 bg-white mt-[-20] flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-custom-new-blue pt-16">
        Συχνές Ερωτήσεις
      </h1>
      <button
        onClick={handleToggleAll}
        className="flex items-center inline-block text-dark border-2 border-blue-700 text-center px-4 sm:px-6 py-2 cursor-pointer align-middle no-underline rounded-full transition-all duration-200 ease-linear text-xs hover:bg-custom-new-blue mb-4"
      >
        {expandAll ? "Collapse All" : "Expand All"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`ml-2 w-4 sm:w-5 h-4 sm:h-5 transform transition-transform duration-200 ${
            expandAll ? "rotate-180" : ""
          }`}
        >
          <path d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>

      <div className="w-full max-w-xl">
        {data.map((item, index) => (
          <div className="border-2 border-gray-300 rounded-lg mb-4" key={index}>
            <button
              className="w-full text-left cursor-pointer px-4 py-3 flex justify-between items-center border-b-2 border-gray-300"
              onClick={() => handleToggle(index)}
              aria-expanded={expandedIndex === index}
            >
              <div className="font-semibold text-blue-500">{item.attributes.Question}</div>
            </button>
            {(expandedIndex === index || expandAll) && (
              <div className="px-4 py-2 bg-gray-200 border-t-2 border-gray-300">
                {item.attributes.Answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
