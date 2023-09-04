import React from "react";
import { FaSmile, FaLink } from "react-icons/fa";

const Footer = () => {
  const usefulLinks = [
    {
      title: "Διεθνής Ένωση Αστυνομικών",
      href: "https://www.ipa-gr.org/",
    },
    {
      title: "Υπουργείο Εργασίας και Κοινωνικής Αλληλεγγύης",
      href: "https://ypergasias.gov.gr/",
    },
    {
      title: "Γενική Γραμματεία Κοινωνικών Ασφαλίσεων",
      href: "http://ggka.citron.gr/intro.html",
    },
    {
      title: "Επαγγελματική Ασφάλιση",
      href: "about:blank",
    },
    {
      title: "EIOPA – Ευρωπαϊκή Αρχή Ασφαλίσεων",
      href: "https://www.eiopa.europa.eu/select-language?destination=/node/1",
    },
    { title: "Επιτροπή Κεφαλαιαγοράς", href: "http://www.hcmc.gr/" },
    {
      title: "Ένωση Ταμείων Επαγγελματικής Ασφάλισης",
      href: "https://eletea.com.gr/",
    },
    {
      title: "Ενημερωτικό Φυλλάδιο",
      href: "https://www.teaapl.gr/images/pdf/2022_Filladio_TEAAPL.pdf",
    },
  ];

  return (
    <div className="bg-[#071923] text-white py-6 font-poppins w-full">
      {/* Useful Links Section */}
      <div className="container mx-auto text-center sm:text-left lg:pl-16">
        <h2 className="text-lg mb-4 font-semibold">
          <FaLink className="inline-block mr-2" />
          Χρήσιμοι σύνδεσμοι
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
          {usefulLinks.map((link) => (
            <div key={link.title} className="flex justify-center items-center">
              {" "}
              {/* Container div */}
              <a
                href={link.href}
                className="hover:text-custom-new-blue transition-colors duration-300"
              >
                {link.title}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-base leading-7 font-normal border-t border-opacity-40 pt-4">
        © teaapl.gr 2023 | Developed by{" "}
        <a className="text-custom-new-blue" href="">
          SOFTBIZ
        </a>
        <FaSmile className="inline-block ml-2" />
      </div>
    </div>
  );
};

export default Footer;
