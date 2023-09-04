import React from "react";
import Navbar from "./pages/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BudgetsSection from "./components/budget";
import BalanceSheetTable from "./components/isologismoi";
import Faq from "./components/FAQs";
import Antiprosopoi from "./components/Antiprosopoi";
import Skopos from "./components/skopos";
import Tameio from "./components/istoriko";
import Dioikisoi from "./components/Dioikisi";
import Katastatiko from "./components/katastatiko";
import Nomothesia from "./components/Nomothesia";
import Enimerotika from "./components/Enimerotika";
import Diagrafh from "./components/Diagrafi";
import Pleonekthmata from "./components/pleonektimata";
import Eggrafh from "./components/eggrafi";
import Eisfores from "./components/Eisfores";
import Paroxes from "./components/paroxes";
import Anakoinwseis from "./components/anakoinoseis";
import Genikes from "./components/Genikes";
import Oikonomika from "./components/ependiseis";
import Ependytiki from "./components/ependitiki";
import Analogistikes from "./components/analogistikes";
import Ergo from "./components/ergo";
import Entypa from "./components/Entipa";

function App() {
  return (
    <Router>
      <div className="flex flex-col  ">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/teaapl/budget" element={<BudgetsSection />} />
            <Route path="/teaapl" element={<HomePage />} />
            <Route path="/teaapl/isologismoi" element={<BalanceSheetTable />} />
            <Route path="/teaapl/FAQs" element={<Faq />} />
            <Route path="/teaapl/Antiprosopoi" element={<Antiprosopoi />} />
            <Route path="/teaapl/skopos" element={<Skopos />} />
            <Route path="/teaapl/istoriko" element={<Tameio />} />
            <Route path="/teaapl/Dioikisi" element={<Dioikisoi />} />
            <Route path="/teaapl/katastatiko" element={<Katastatiko />} />
            <Route path="/teaapl/Nomothesia" element={<Nomothesia />} />
            <Route path="/teaapl/Enimerotika" element={<Enimerotika />} />
            <Route path="/teaapl/Diagrafi" element={<Diagrafh />} />
            <Route path="/teaapl/pleonektimata" element={<Pleonekthmata />} />
            <Route path="/teaapl/eggrafi" element={<Eggrafh />} />
            <Route path="/teaapl/Eisfores" element={<Eisfores />} />
            <Route path="/teaapl/paroxes" element={<Paroxes />} />
            <Route path="/teaapl/anakoinoseis" element={<Anakoinwseis />} />
            <Route path="/teaapl/Genikes" element={<Genikes />} />
            <Route path="/teaapl/ependiseis" element={<Oikonomika />} />
            <Route path="/teaapl/ependitiki" element={<Ependytiki />} />
            <Route path="/teaapl/analogistikes" element={<Analogistikes />} />
            <Route path="/teaapl/ergo" element={<Ergo />} />
            <Route path="/teaapl/Entipa" element={<Entypa />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import LocationIcon from "./components/Location";
// import PhoneIcon from "./components/PhoneIcon";
// import HoursIcon from "./components/HoursIcon";
// import Logo from "./components/logo";
// import SearchIcon from "./components/search";
// import FullScreenSlider from "./components/slider";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import red from "./images/redMark.jpg";
// import closed from "./images/closed.jpg";
// import AboutMe from "./components/aboutMe";
// import Timeline from "./components/Timeline";
// import Footer from "./components/Footer";
// import ContactForm from "./components/ContactForm";
// import log from "./images/log_in.png";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// // import { Link } from "react-router-dom";
// import FundFigures from "./components/Impo";
// import BudgetsSection from "./components/budget";

// function Navbar() {
//   useEffect(() => {
//     AOS.init({
//       duration: 2000,
//     });
//   }, []);

//   const handleLogoClick = () => {
//     window.location.hash = ""; // Clear the fragment identifier
//     window.location.reload();
//   };

//   const [showSubMenuTameio, setShowSubMenuTameio] = useState(false);
//   const [showSubMenuSymmetoxi, setShowSubMenuSymmetoxi] = useState(false);
//   const [showSubMenuOikonomika, setShowSubMenuOikonomika] = useState(false);
//   const [showSubMenuEnimerosi, setShowSubMenuEnimerosi] = useState(false);

//   const [showScrollButton, setShowScrollButton] = useState(false);

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const checkScrollTop = () => {
//       if (!showScrollButton && window.pageYOffset > 400) {
//         setShowScrollButton(true);
//       } else if (showScrollButton && window.pageYOffset <= 400) {
//         setShowScrollButton(false);
//       }
//     };

//     window.addEventListener("scroll", checkScrollTop);

//     return () => window.removeEventListener("scroll", checkScrollTop);
//   }, [showScrollButton]);

//   const scrollTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       {/* <Router> */}
//       <div className="bg-white min-h-screen overflow-x-hidden ">
//         <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
//           <div className="py-3 flex justify-between items-center">
//             <div className="flex justify-start">
//               <div className="flex justify-start items-center">
//                 {/*  desktop  */}
//                 <div
//                   className="md:block hidden cursor-pointer"
//                   onClick={handleLogoClick}
//                 >
//                   <Logo />
//                 </div>

//                 {/* mobile */}
//                 <div
//                   className="md:hidden block cursor-pointer"
//                   onClick={handleLogoClick}
//                 >
//                   <Logo />
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-end items-center">
//               <div className="md:hidden relative w-14 h-10 mt-[-24px] mb-2">
//                 <button
//                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                   className="focus:outline-none w-full h-full  rounded-lg  p-2 transition-transform duration-300 hover:scale-105 transform relative"
//                 >
//                   <span
//                     className={`block absolute w-10 h-1 bg-blue-800 transition-all transform duration-500 ease-in-out rounded-md ${
//                       isMobileMenuOpen
//                         ? "rotate-45 translate-y-1.5"
//                         : "translate-y-1"
//                     }`}
//                   ></span>
//                   <span
//                     className={`block absolute w-10 h-1 bg-blue-800 transition-opacity duration-500 ease-in-out rounded-md ${
//                       isMobileMenuOpen ? "opacity-0" : "translate-y-4"
//                     }`}
//                   ></span>
//                   <span
//                     className={`block absolute w-10 h-1 bg-blue-800 transition-all transform duration-500 ease-in-out rounded-md ${
//                       isMobileMenuOpen
//                         ? "-rotate-45 -translate-y-1.5"
//                         : "translate-y-7"
//                     }`}
//                   ></span>
//                 </button>
//               </div>

//               {isMobileMenuOpen ? (
//                 <div className="fixed top-0 right-0 w-64 h-full bg-custom-new-blue text-white z-20 transform translate-x-0 transition-transform duration-300 shadow-lg">
//                   <button
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="absolute top-4 left-4 text-5xl text-white"
//                   >
//                     &times;
//                   </button>
//                   <div className="pt-14 pr-6 pl-8 pb-4 space-y-2">
//                     <a
//                       href="/"
//                       className="block py-1 px-6 text-2xl font-semibold text-white hover:bg-opacity-50 hover:bg-gray-700"
//                     >
//                       ΑΡΧΙΚΗ
//                     </a>
//                     <a
//                       href="#"
//                       className="block py-1 px-6 text-2xl font-semibold text-white hover:bg-opacity-50 hover:bg-gray-700"
//                     >
//                       ΤΟ ΤΑΜΕΙΟ
//                     </a>
//                     <a
//                       href="#"
//                       className="block py-1 px-6 text-2xl font-semibold text-white hover:bg-opacity-50 hover:bg-gray-700"
//                     >
//                       ΣΥΜΜΕΤΟΧΗ
//                     </a>
//                     <a
//                       href="#"
//                       className="block py-1 px-6 text-2xl font-semibold text-white hover:bg-opacity-50 hover:bg-gray-700"
//                     >
//                       ΟΙΚΟΝΟΜΙΚΑ ΣΤΟΙΧΕΙΑ
//                     </a>
//                     <a
//                       href="#"
//                       className="block py-1 px-6 text-2xl font-semibold text-white hover:bg-opacity-50 hover:bg-gray-700"
//                     >
//                       ΕΝΗΜΕΡΩΣΗ
//                     </a>
//                     <a
//                       href="#communicationForm"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                       className="block py-1 px-6 text-2xl font-semibold text-white hover:bg-opacity-50 hover:bg-gray-700"
//                     >
//                       ΕΠΙΚΟΙΝΩΝΙΑ
//                     </a>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="fixed top-0 right-0 w-64 h-full bg-custom-new-blue text-white z-20 transform translate-x-full transition-transform duration-300 shadow-lg">
//                   {/* This empty div is just to hold the space when the menu is not visible */}
//                 </div>
//               )}
//               <div className="hidden md:flex items-center ml-4">
//                 <div className="hidden md:flex items-center ml-4">
//                   <a
//                     href="#"
//                     className="mx-3 py-2 text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
//                   >
//                     ΑΡΧΙΚΗ
//                   </a>
//                   {/* Start of Submenu */}
//                   <div
//                     onMouseEnter={() => setShowSubMenuTameio(true)}
//                     onMouseLeave={() => setShowSubMenuTameio(false)}
//                     className="relative group mx-3 py-2"
//                   >
//                     <a
//                       href="#"
//                       className="flex items-center text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
//                     >
//                       ΤΟ ΤΑΜΕΙΟ
//                       {/* SVG Arrow indicating submenu */}
//                       <svg
//                         width="12"
//                         height="12"
//                         viewBox="0 0 12 12"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className={`ml-2 transform transition-transform duration-300 ${
//                           showSubMenuTameio ? "rotate-180" : ""
//                         }`}
//                       >
//                         <path
//                           d="M2 4L6 8L10 4"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </a>
//                     {showSubMenuTameio && (
//                       <div className="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg z-10">
//                         {/* Submenu items */}
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΙΣΤΟΡΙΚΟ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΣΚΟΠΟΣ-ΚΛΑΔΟΙ ΑΣΦΑΛΙΣΗΣ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΔΙΟΙΚΗΣΗ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΚΑΤΑΣΤΑΤΙΚΟ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΕΣΩΤΕΡΙΚΟΣ ΚΑΝΟΝΙΣΜΟΣ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΕΝΗΜΕΡΩΤΙΚΑ ΦΥΛΛΑΔΙΑ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΝΟΜΟΘΕΣΙΑ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΑΝΤΙΠΡΟΣΩΠΟΙ ΑΝΑ ΝΟΜΟ
//                         </a>
//                       </div>
//                     )}
//                   </div>

//                   <div
//                     onMouseEnter={() => setShowSubMenuSymmetoxi(true)}
//                     onMouseLeave={() => setShowSubMenuSymmetoxi(false)}
//                     className="relative group mx-3 py-2"
//                   >
//                     <a
//                       href="#"
//                       className="flex items-center text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
//                     >
//                       ΣΥΜΜΕΤΟΧΗ
//                       {/* SVG Arrow indicating submenu */}
//                       <svg
//                         width="12"
//                         height="12"
//                         viewBox="0 0 12 12"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className={`ml-2 transform transition-transform duration-300 ${
//                           showSubMenuSymmetoxi ? "rotate-180" : ""
//                         }`}
//                       >
//                         <path
//                           d="M2 4L6 8L10 4"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </a>
//                     {showSubMenuSymmetoxi && (
//                       <div className="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg z-10">
//                         {/* Submenu items */}
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΠΛΕΟΝΕΚΤΗΜΑΤΑ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΕΓΓΡΑΦΗ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΕΙΣΦΟΡΕΣ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΠΑΡΟΧΕΣ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΔΙΑΓΡΑΦΗ
//                         </a>
//                       </div>
//                     )}
//                   </div>
//                   <div
//                     onMouseEnter={() => setShowSubMenuOikonomika(true)}
//                     onMouseLeave={() => setShowSubMenuOikonomika(false)}
//                     className="relative group mx-3 py-2"
//                   >
//                     <a
//                       href="#"
//                       className="flex items-center text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
//                     >
//                       ΟΙΚΟΝΟΜΙΚΑ ΣΤΟΙΧΕΙΑ
//                       {/* SVG Arrow indicating submenu */}
//                       <svg
//                         width="12"
//                         height="12"
//                         viewBox="0 0 12 12"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className={`ml-2 transform transition-transform duration-300 ${
//                           showSubMenuOikonomika ? "rotate-180" : ""
//                         }`}
//                       >
//                         <path
//                           d="M2 4L6 8L10 4"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </a>
//                     {showSubMenuOikonomika && (
//                       <div className="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg z-10">
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΕΠΕΝΔΥΣΕΙΣ
//                         </a>
//                         <a
//                           href="https://www.alphatrust.gr/funds/tea-astunomikon-purosveston-limenikon-mikto-institutional-share-class/"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           ΑΜΟΙΒΑΙΟ ΚΕΦΑΛΑΙΟ
//                         </a>
//                         <a
//                           href="https://www.teaapl.gr/images/pdf/%CE%95%CE%A0%CE%95%CE%9D%CE%94%CE%A5%CE%A4%CE%99%CE%9A%CE%9F%CE%A3%20%CE%9A%CE%91%CE%9D%CE%9F%CE%9D%CE%99%CE%A3%CE%9C%CE%9F%CE%A3.PDF"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           ΚΑΝΟΝΙΣΜΟΣ ΕΠΕΝΔΥΣΕΩΝ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΕΠΕΝΔΥΤΙΚΗ ΕΠΙΤΡΟΠΗ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΙΣΟΛΟΓΙΣΜΟΙ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΑΝΑΛΟΓΙΣΤΙΚΕΣ ΜΕΛΕΤΕΣ
//                         </a>
//                         <a
//                           href="/budget"
//                           className="block px-4 py-2 text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           ΠΡΟΥΠΟΛΟΓΙΣΜΟΙ
//                         </a>
//                       </div>
//                     )}
//                   </div>
//                   <div
//                     onMouseEnter={() => setShowSubMenuEnimerosi(true)}
//                     onMouseLeave={() => setShowSubMenuEnimerosi(false)}
//                     className="relative group mx-3 py-2"
//                   >
//                     <a
//                       href="#"
//                       className="flex items-center text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
//                     >
//                       ΕΝΗΜΕΡΩΣΗ
//                       {/* SVG Arrow indicating submenu */}
//                       <svg
//                         width="12"
//                         height="12"
//                         viewBox="0 0 12 12"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className={`ml-2 transform transition-transform duration-300 ${
//                           showSubMenuEnimerosi ? "rotate-180" : ""
//                         }`}
//                       >
//                         <path
//                           d="M2 4L6 8L10 4"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </a>
//                     {showSubMenuEnimerosi && (
//                       <div className="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg z-10">
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΑΝΑΚΟΙΝΩΣΕΙΣ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΓΕΝΙΚΕΣ ΣΥΝΕΛΕΥΣΕΙΣ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ
//                         </a>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
//                         >
//                           ΤΟ ΕΡΓΟ ΤΟΥ ΤΑΜΕΙΟΥ
//                         </a>
//                       </div>
//                     )}
//                   </div>
//                   <a
//                     href="#communicationForm"
//                     className="mx-3 py-2 text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
//                   >
//                     ΕΠΙΚΟΙΝΩΝΙΑ
//                   </a>
//                 </div>
//               </div>
//               <div className="hidden md:flex items-center ml-4">
//                 <a href="https://www.google.com/maps/dir//Veranzerou+30+Athina+104+32/@37.9858607,23.7270193,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x14a1bd2fd05feb4d:0x4c5c11c46295dfaa">
//                   {" "}
//                   <LocationIcon />{" "}
//                 </a>
//                 <a href="tel:210-5202638">
//                   <PhoneIcon />{" "}
//                 </a>
//                 <HoursIcon />
//                 <SearchIcon />
//               </div>
//             </div>
//           </div>
//         </nav>
//         <FullScreenSlider />

//         <div
//           className="py-4 sm:py-16 px-4 sm:px-8 flex flex-col items-center w-full"
//           style={{ backgroundColor: "#FFFFFF" }}
//           data-aos="fade-left"
//         >
//           <h1 className="text-center text-3xl sm:text-4xl font-bold w-full pb-4 text-custom-new-blue">
//             Τελευταίες Ανακοινώσεις
//           </h1>
//           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 w-full">
//             <div
//               className="w-full sm:w-5/12 p-4 sm:p-9"
//               style={{ backgroundColor: "#253F5B", color: "#4F728E" }}
//             >
//               <a href="#!">
//                 <img
//                   className="rounded-t-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out hover:filter hover:brightness-90"
//                   src={closed}
//                   alt=""
//                 />
//               </a>
//               <div className="p-6">
//                 <h5
//                   className="mb-2 text-xl font-medium leading-tight"
//                   style={{ color: "#ffffff" }} // Adjusted color for better visibility
//                 >
//                   ΑΝΑΚΟΙΝΩΣΗ ΛΕΙΤΟΥΡΓΙΑΣ ΓΡΑΦΕΙΩΝ ΤΕΑΑΠΛ ΓΙΑ ΤΟ ΜΗΝΑ ΑΥΓΟΥΣΤΟ
//                   2023
//                 </h5>
//                 <p className="text-sm" style={{ color: "#ffffff" }}>
//                   Σας γνωρίζουμε ότι το γραφείο του Ταμείου μας θα παραμείνει
//                   κλειστό...
//                 </p>
//                 <button
//                   type="button"
//                   className="inline-block rounded px-6 py-2.5 mt-4 text-xs font-medium uppercase leading-normal"
//                   style={{ backgroundColor: "#ffffff", color: "#000000" }}
//                 >
//                   Συνεχιστε την αναγνωση
//                 </button>
//               </div>
//             </div>
//             <div
//               className="w-full sm:w-5/12 p-4 sm:p-9"
//               style={{ backgroundColor: "#253F5B", color: "#4F728E" }}
//             >
//               <a href="#!">
//                 <img
//                   className="rounded-t-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out hover:filter hover:brightness-90"
//                   src={red}
//                   alt=""
//                 />
//               </a>
//               <div className="p-6">
//                 <h5
//                   className="mb-2 text-xl font-medium leading-tight"
//                   style={{ color: "#ffffff" }}
//                 >
//                   ΕΚΤΑΚΤΗ ΑΝΑΚΟΙΝΩΣΗ
//                 </h5>
//                 <p className="text-sm" style={{ color: "#ffffff" }}>
//                   {" "}
//                   Λόγω αναβάθμισης του συστήματος σας γνωρίζουμε ότι...
//                 </p>
//                 <button
//                   type="button"
//                   className="inline-block rounded px-6 py-2.5 mt-4 text-xs font-medium uppercase leading-normal"
//                   style={{ backgroundColor: "#ffffff", color: "#000000" }}
//                 >
//                   Συνεχιστε την αναγνωση
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="mt-4 ml-40 w-full">
//             <a
//               href="#"
//               className="announcement-btn inline-block text-center px-10 py-3 cursor-pointer align-middle no-underline rounded-full transition-all duration-200 ease-linear text-sm border-2 border-blue-700  hover:bg-custom-new-blue"
//             >
//               Ανακοινώσεις
//             </a>
//           </div>
//         </div>

//         <div
//           className="py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-8 w-full lg:ml-32 flex flex-col items-start"
//           data-aos="fade-right"
//         >
//           <div className="mt-8 lg:mt-16">
//             <AboutMe />
//           </div>
//           <div className="mt-4 lg:mt-8">
//             <Timeline />
//           </div>
//           <div data-aos="flip-up">
//             <FundFigures />
//           </div>
//           <div className="mt-16 sm:mt-16 md:-ml-16 w-full" data-aos="fade-down">
//             <ContactForm />
//           </div>
//         </div>
//         <Footer />
//       </div>

//       <div>
//         <a
//           href={process.env.PUBLIC_URL + "/LoginForm.html"}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button className="fixed bottom-10 left-10 z-50 bg-blue-500 w-12 h-12 rounded-full focus:outline-none hover:bg-blue-600 p-0 overflow-hidden">
//             <img
//               src={log}
//               alt="Connect"
//               className="w-full h-full object-cover"
//             />
//           </button>
//         </a>
//       </div>

//       {showScrollButton && (
//         <button
//           onClick={scrollTop}
//           className="fixed bottom-10 right-10 z-50 bg-blue-500 text-white w-12 h-12 rounded-full focus:outline-none hover:bg-blue-600 hidden sm:block"
//           title="Back to top"
//         >
//           ↑
//         </button>
//       )}
//     </>
//   );
// }

// export default Navbar;
