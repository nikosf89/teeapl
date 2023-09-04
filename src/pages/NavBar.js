import React, { useEffect, useState } from "react";
import LocationIcon from "../components/Location";
import PhoneIcon from "../components/PhoneIcon";
import HoursIcon from "../components/HoursIcon";
import Logo from "../components/logo";
import SearchIcon from "../components/search";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const handleLogoClick = () => {
    window.location.hash = ""; // Clear the fragment identifier
    window.location.reload();
  };

  const [isSubMenuTameioOpen, setIsSubMenuTameioOpen] = useState(false);
  const [isSubMenuSymmetoxiOpen, setIsSubMenuSymmetoxiOpen] = useState(false);

  const [showSubMenuTameio, setShowSubMenuTameio] = useState(false);
  const [showSubMenuSymmetoxi, setShowSubMenuSymmetoxi] = useState(false);
  const [showSubMenuOikonomika, setShowSubMenuOikonomika] = useState(false);
  const [showSubMenuEnimerosi, setShowSubMenuEnimerosi] = useState(false);
  const [isSubMenuEnimerosiOpen, setIsSubMenuEnimerosiOpen] = useState(false);
  const [isSubMenuOikonomikaOpen, setIsSubMenuOikonomikaOpen] = useState(false);

  const [showScrollButton, setShowScrollButton] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollButton && window.pageYOffset > 400) {
        setShowScrollButton(true);
      } else if (showScrollButton && window.pageYOffset <= 400) {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollButton]);

  return (
    <>
      {/* <Router> */}
      <div className="bg-white overflow-x-hidden">
        <nav className="bg-white shadow fixed  top-0 left-0 w-full z-50">
          <div className="py-3 flex justify-between items-center">
            <div className="flex justify-start items-center">
              <div className="cursor-pointer" onClick={handleLogoClick}>
                <Logo />
              </div>
            </div>
            <div className="flex justify-end items-center">
              <div className="md:hidden relative w-14 h-10 mt-[-24px] mb-2">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="focus:outline-none w-full h-full rounded-lg p-2 transition-transform duration-300 hover:scale-105 transform relative"
                >
                  {/* Updated Hamburger Animation */}
                  <span
                    className={`block absolute w-10 h-1 bg-blue-800 transition-transform transform duration-500 ease-in-out rounded-md ${
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-1.5"
                        : "translate-y-1"
                    }`}
                  ></span>
                  <span
                    className={`block absolute w-10 h-1 bg-blue-800 transition-opacity duration-500 ease-in-out rounded-md ${
                      isMobileMenuOpen ? "opacity-0" : "translate-y-4"
                    }`}
                  ></span>
                  <span
                    className={`block absolute w-10 h-1 bg-blue-800 transition-transform transform duration-500 ease-in-out rounded-md ${
                      isMobileMenuOpen
                        ? "-rotate-45 -translate-y-1.5"
                        : "translate-y-7"
                    }`}
                  ></span>
                </button>
              </div>

              {isMobileMenuOpen ? (
                <div className="fixed top-0 right-0 w-64 h-full bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white z-20 transform translate-x-0 transition-transform duration-300 ease-in-out shadow-2xl overflow-y-auto">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-4 left-4 text-4xl text-white transition duration-300 ease-in-out hover:text-gray-400"
                  >
                    &times;
                  </button>
                  <div className="pt-16 pr-6 pl-10 pb-4 space-y-3 text-lg font-semibold">
                    <a
                      href="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-6 hover:bg-blue-500 rounded-lg"
                    >
                      ΑΡΧΙΚΗ
                    </a>
                    <div className="relative">
                      <button
                        onClick={() =>
                          setIsSubMenuTameioOpen(!isSubMenuTameioOpen)
                        }
                        className="flex items-center justify-between w-full py-2 px-6 rounded-lg hover:bg-blue-500"
                      >
                        ΤΟ ΤΑΜΕΙΟ
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`ml-2 transform transition-transform duration-300 ${
                            isSubMenuTameioOpen ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M2 4L6 8L10 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      {isSubMenuTameioOpen && (
                        <div className="pl-4 space-y-2">
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΙΣΤΟΡΙΚΟ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΣΚΟΠΟΣ-ΚΛΑΔΟΙ ΑΣΦΑΛΙΣΗΣ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΔΙΟΙΚΗΣΗ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΚΑΤΑΣΤΑΤΙΚΟ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΕΣΩΤΕΡΙΚΟΣ ΚΑΝΟΝΙΣΜΟΣ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΕΝΗΜΕΡΩΤΙΚΑ ΦΥΛΛΑΔΙΑ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΝΟΜΟΘΕΣΙΑ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΑΝΤΙΠΡΟΣΩΠΟΙ ΑΝΑ ΝΟΜΟ
                          </a>
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <button
                        onClick={() =>
                          setIsSubMenuSymmetoxiOpen(!isSubMenuSymmetoxiOpen)
                        }
                        className="flex items-center justify-between w-full py-2 px-6 rounded-lg hover:bg-blue-500"
                      >
                        ΣΥΜΜΕΤΟΧΗ
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`ml-2 transform transition-transform duration-300 ${
                            isSubMenuSymmetoxiOpen ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M2 4L6 8L10 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      {isSubMenuSymmetoxiOpen && (
                        <div className="pl-4 space-y-2">
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΠΛΕΟΝΕΚΤΗΜΑΤΑ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΕΓΓΡΑΦΗ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΕΙΣΦΟΡΕΣ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΠΑΡΟΧΕΣ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΔΙΑΓΡΑΦΗ
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <button
                        onClick={() =>
                          setIsSubMenuOikonomikaOpen(!isSubMenuOikonomikaOpen)
                        }
                        className="flex items-center justify-between w-full py-2 px-6 rounded-lg hover:bg-blue-500"
                      >
                        ΟΙΚΟΝΟΜΙΚΑ ΣΤΟΙΧΕΙΑ
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`ml-2 transform transition-transform duration-300 ${
                            isSubMenuOikonomikaOpen ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M2 4L6 8L10 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      {isSubMenuOikonomikaOpen && (
                        <div className="pl-4 space-y-2">
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΕΠΕΝΔΥΣΕΙΣ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΑΜΟΙΒΑΙΟ ΚΕΦΑΛΑΙΟ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΚΑΝΟΝΙΣΜΟΣ ΕΠΕΝΔΥΣΕΩΝ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΕΠΕΝΔΥΤΙΚΗ ΕΠΙΤΡΟΠΗ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΙΣΟΛΟΓΙΣΜΟΙ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΑΝΑΛΟΓΙΣΤΙΚΕΣ ΜΕΛΕΤΕΣ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΠΡΟΥΠΟΛΟΓΙΣΜΟΙ
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <button
                        onClick={() =>
                          setIsSubMenuEnimerosiOpen(!isSubMenuEnimerosiOpen)
                        }
                        className="flex items-center justify-between w-full py-2 px-6 rounded-lg hover:bg-blue-500"
                      >
                        ΕΝΗΜΕΡΩΣΗ
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`ml-2 transform transition-transform duration-300 ${
                            isSubMenuEnimerosiOpen ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M2 4L6 8L10 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      {isSubMenuEnimerosiOpen && (
                        <div className="pl-4 space-y-2">
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΑΝΑΚΟΙΝΩΣΕΙΣ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΓΕΝΙΚΕΣ ΣΥΝΕΛΕΥΣΕΙΣ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-6 rounded-lg hover:bg-blue-500"
                          >
                            ΤΟ ΕΡΓΟ ΤΟΥ ΤΑΜΕΙΟΥ
                          </a>
                        </div>
                      )}
                    </div>

                    <a
                      href="#communicationForm"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-6 hover:bg-blue-500 rounded-lg"
                    >
                      ΕΠΙΚΟΙΝΩΝΙΑ
                    </a>
                  </div>
                </div>
              ) : (
                <div className="fixed top-0 right-0 w-64 h-full bg-blue-800 text-white z-20 transform translate-x-full transition-transform duration-300 shadow-2xl">
                  {/* This empty div is just to hold the space when the menu is not visible */}
                </div>
              )}
              <div className="hidden md:flex items-center ml-4">
                <div className="hidden md:flex items-center ml-4">
                  <Link
                    to="/teaapl"
                    className="mx-3 py-2 text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
                  >
                    ΑΡΧΙΚΗ
                  </Link>
                  {/* Start of Submenu */}
                  <div
                    onMouseEnter={() => setShowSubMenuTameio(true)}
                    onMouseLeave={() => setShowSubMenuTameio(false)}
                    className="relative group mx-3 py-2"
                  >
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
                    >
                      ΤΟ ΤΑΜΕΙΟ
                      {/* SVG Arrow indicating submenu */}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ml-2 transform transition-transform duration-300 ${
                          showSubMenuTameio ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M2 4L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    {showSubMenuTameio && (
                      <div className="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg z-10">
                        {/* Submenu items */}
                        <Link
                          to="/teaapl/istoriko"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΙΣΤΟΡΙΚΟ
                        </Link>
                        <Link
                          to="/teaapl/skopos"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΣΚΟΠΟΣ-ΚΛΑΔΟΙ ΑΣΦΑΛΙΣΗΣ
                        </Link>
                        <Link
                          to="/teaapl/Dioikisi"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΔΙΟΙΚΗΣΗ
                        </Link>
                        <Link
                          to="/teaapl/katastatiko"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΚΑΤΑΣΤΑΤΙΚΟ
                        </Link>
                        <a
                          href="https://www.teaapl.gr/images/pdf/%CE%95%CE%A3%CE%A9%CE%A4%CE%95%CE%A1%CE%99%CE%9A%CE%9F%CE%A3%20%CE%9A%CE%91%CE%9D%CE%9F%CE%9D%CE%99%CE%A3%CE%9C%CE%9F%CE%A3.PDF"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΕΣΩΤΕΡΙΚΟΣ ΚΑΝΟΝΙΣΜΟΣ
                        </a>
                        <Link
                          to="/teaapl/Enimerotika"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΕΝΗΜΕΡΩΤΙΚΑ ΦΥΛΛΑΔΙΑ
                        </Link>
                        <Link
                          to="/teaapl/Nomothesia"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΝΟΜΟΘΕΣΙΑ
                        </Link>
                        <Link
                          to="/teaapl/Antiprosopoi"
                          className="block px-4 py-2 text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΑΝΤΙΠΡΟΣΩΠΟΙ ΑΝΑ ΝΟΜΟ
                        </Link>
                      </div>
                    )}
                  </div>

                  <div
                    onMouseEnter={() => setShowSubMenuSymmetoxi(true)}
                    onMouseLeave={() => setShowSubMenuSymmetoxi(false)}
                    className="relative group mx-3 py-2"
                  >
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
                    >
                      ΣΥΜΜΕΤΟΧΗ
                      {/* SVG Arrow indicating submenu */}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ml-2 transform transition-transform duration-300 ${
                          showSubMenuSymmetoxi ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M2 4L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    {showSubMenuSymmetoxi && (
                      <div className="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg z-10">
                        {/* Submenu items */}
                        <Link
                          to="/teaapl/pleonektimata"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΠΛΕΟΝΕΚΤΗΜΑΤΑ
                        </Link>
                        <Link
                          to="/teaapl/eggrafi"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΕΓΓΡΑΦΗ
                        </Link>
                        <Link
                          to="/teaapl/Eisfores"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΕΙΣΦΟΡΕΣ
                        </Link>
                        <Link
                          to="/teaapl/paroxes"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΠΑΡΟΧΕΣ
                        </Link>
                        <Link
                          to="/teaapl/Diagrafi"
                          className="block px-4 py-2 text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΔΙΑΓΡΑΦΗ
                        </Link>
                      </div>
                    )}
                  </div>
                  <div
                    onMouseEnter={() => setShowSubMenuOikonomika(true)}
                    onMouseLeave={() => setShowSubMenuOikonomika(false)}
                    className="relative group mx-3 py-2"
                  >
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
                    >
                      ΟΙΚΟΝΟΜΙΚΑ ΣΤΟΙΧΕΙΑ
                      {/* SVG Arrow indicating submenu */}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ml-2 transform transition-transform duration-300 ${
                          showSubMenuOikonomika ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M2 4L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    {showSubMenuOikonomika && (
                      <div className="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg z-10">
                        <Link
                          to="/teaapl/ependiseis"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΕΠΕΝΔΥΣΕΙΣ
                        </Link>
                        <a
                          href="https://www.alphatrust.gr/funds/tea-astunomikon-purosveston-limenikon-mikto-institutional-share-class/"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΑΜΟΙΒΑΙΟ ΚΕΦΑΛΑΙΟ
                        </a>
                        <a
                          href="https://www.teaapl.gr/images/pdf/%CE%95%CE%A0%CE%95%CE%9D%CE%94%CE%A5%CE%A4%CE%99%CE%9A%CE%9F%CE%A3%20%CE%9A%CE%91%CE%9D%CE%9F%CE%9D%CE%99%CE%A3%CE%9C%CE%9F%CE%A3.PDF"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΚΑΝΟΝΙΣΜΟΣ ΕΠΕΝΔΥΣΕΩΝ
                        </a>
                        <Link
                          to="/teaapl/ependitiki"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΕΠΕΝΔΥΤΙΚΗ ΕΠΙΤΡΟΠΗ
                        </Link>
                        <Link
                          to="/teaapl/isologismoi"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΙΣΟΛΟΓΙΣΜΟΙ
                        </Link>
                        <Link
                          to="/teaapl/analogistikes"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΑΝΑΛΟΓΙΣΤΙΚΕΣ ΜΕΛΕΤΕΣ
                        </Link>
                        <Link
                          to="/teaapl/budget"
                          className="block px-4 py-2 text-xs font-light
                          text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΠΡΟΥΠΟΛΟΓΙΣΜΟΙ
                        </Link>
                      </div>
                    )}
                  </div>
                  <div
                    onMouseEnter={() => setShowSubMenuEnimerosi(true)}
                    onMouseLeave={() => setShowSubMenuEnimerosi(false)}
                    className="relative group mx-3 py-2"
                  >
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
                    >
                      ΕΝΗΜΕΡΩΣΗ
                      {/* SVG Arrow indicating submenu */}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ml-2 transform transition-transform duration-300 ${
                          showSubMenuEnimerosi ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M2 4L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    {showSubMenuEnimerosi && (
                      <div className="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg z-10">
                        <Link
                          to="/teaapl/anakoinoseis"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΑΝΑΚΟΙΝΩΣΕΙΣ
                        </Link>
                        <Link
                          to="/teaapl/Genikes"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΓΕΝΙΚΕΣ ΣΥΝΕΛΕΥΣΕΙΣ
                        </Link>
                        <Link
                          to="/teaapl/FAQs"
                          className="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ
                        </Link>
                        <Link
                          to="/teaapl/ergo"
                          className="block px-4 py-2 text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                        >
                          ΤΟ ΕΡΓΟ ΤΟΥ ΤΑΜΕΙΟΥ
                        </Link>
                      </div>
                    )}
                  </div>
                  <a
                    href="#communicationForm"
                    className="mx-3 py-2 text-sm font-medium text-gray-700 uppercase hover:text-blue-500"
                  >
                    ΕΠΙΚΟΙΝΩΝΙΑ
                  </a>
                </div>
              </div>
              <div className="hidden md:flex items-center ml-4">
                <a href="https://www.google.com/maps/dir//Veranzerou+30+Athina+104+32/@37.9858607,23.7270193,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x14a1bd2fd05feb4d:0x4c5c11c46295dfaa">
                  {" "}
                  <LocationIcon />{" "}
                </a>
                <a href="tel:210-5202638">
                  <PhoneIcon />{" "}
                </a>
                <HoursIcon />
                <SearchIcon />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
