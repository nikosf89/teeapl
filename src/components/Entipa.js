import { useState } from "react";
import PDF from "../images/icon.png";
import Doc from "../images/icons8-word-32.png";

const Entypa = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = process.env.PUBLIC_URL + "/DOC1.doc"; // Replace with the actual file path
    downloadLink.download = "Αίτηση εγγραφής μέλους - Απογραφικό δελτίο.doc"; // Set the desired file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const handleDownload1 = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = process.env.PUBLIC_URL + "/DOC2.doc"; // Replace with the actual file path
    downloadLink.download = "Αίτηση μεταβολής ποσού μηνιαίας εισφοράς.doc"; // Set the desired file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleDownload2 = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = process.env.PUBLIC_URL + "/DOC3.doc"; // Replace with the actual file path
    downloadLink.download = "aitisi_epikairopoiisis_gia_eggrafi_sto_Portal.doc"; // Set the desired file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <section className="mt-10 mb-10 flex justify-center items-center min-h-screen bg-white-100">
        <table className="w-1/2 max-w-2xl mx-auto bg-white border-collapse border border-gray-300 mt-20 mb-4">
          <thead className="sticky top-16 z-10  text-xl font-bold p-4  leading-10  border-b-2 border-customBlue pb-2 bg-custom-new-blue text-white">
            <tr className="border-b">
              <th className="text-center py-2 pl-2" colSpan="2">
                ΕΝΤΥΠΑ ΑΙΤΗΣΕΩΝ
              </th>
            </tr>
          </thead>
          <tbody className="w-95 max-h-[calc(89%-0.8rem)] bg-white-50 m-2 rounded-lg overflow-auto border border-gray-300 py-2 px-4">
            <tr className="border-b hover:bg-customBlue hover:text-white">
              <td className="text-left ">
                <a
                  href="https://teaapl.gr/images/pdf/aitisi_eggrafis_melous_apografiko_deltio.pdf"
                  target="_blank"
                >
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/l0vjMqIboTRs/pdf"
                  ></a>
                  <img src={PDF} className="inline-block w-6 h-6"></img>
                  <a target="_blank" href="https://icons8.com"></a>
                </a>
                1).Αίτηση εγγραφής μέλους - Απογραφικό δελτίο.pdf (εναλλακτικά
                κατεβάστε το σε μορφή{" "}
                <button onClick={handleDownload}>
                  .doc
                  <a
                    target="_blank"
                    className=""
                    href="https://icons8.com/icon/117563/microsoft-word-2019"
                  ></a>{" "}
                  <img
                    src={Doc}
                    className="inline-block w-6 h-6 hover:bg-customBlue"
                  ></img>{" "}
                  <a target="_blank" href="https://icons8.com"></a>{" "}
                </button>
                )
              </td>
            </tr>
            <tr className="border-b hover:bg-customBlue hover:text-white">
              <td className="text-left ">
                <a
                  href="https://teaapl.gr/images/pdf/aitisi_metavolis_posou_miniaias_eisforas.pdf"
                  target="_blank"
                >
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/l0vjMqIboTRs/pdf"
                  ></a>
                  <img src={PDF} className="inline-block w-6 h-6"></img>
                  <a target="_blank" href="https://icons8.com"></a>
                </a>
                2).Αίτηση μεταβολής ποσού μηνιαίας εισφοράς.pdf (εναλλακτικά
                κατεβάστε το σε μορφή{" "}
                <button onClick={handleDownload1}>
                  .doc
                  <a
                    target="_blank"
                    className=""
                    href="https://icons8.com/icon/117563/microsoft-word-2019"
                  ></a>{" "}
                  <img
                    src={Doc}
                    className="inline-block w-6 h-6 hover:bg-customBlue"
                  ></img>{" "}
                  <a target="_blank" href="https://icons8.com"></a>
                </button>
                )
              </td>
            </tr>
            <tr className="border-b hover:bg-customBlue hover:text-white">
              <td className="text-left ">
                <a
                  href="https://teaapl.gr/images/pdf/aitisi_diagrafis.pdf"
                  target="_blank"
                >
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/l0vjMqIboTRs/pdf"
                  ></a>
                  <img src={PDF} className="inline-block w-6 h-6"></img>
                  <a target="_blank" href="https://icons8.com"></a>
                </a>
                3).Αίτηση διαγραφής Τ.Ε.Α.Α.Π.Λ.pdf
              </td>
            </tr>
            <tr className="border-b hover:bg-customBlue hover:text-white">
              <td className="text-left ">
                <a
                  href="https://teaapl.gr/images/pdf/aitisi_allagis_dikaiouxon.pdf"
                  target="_blank"
                >
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/l0vjMqIboTRs/pdf"
                  ></a>
                  <img src={PDF} className="inline-block w-6 h-6"></img>
                  <a target="_blank" href="https://icons8.com"></a>
                </a>
                4).Αίτηση αλλαγής δικαιούχων.pdf
                <span className="text-red-500 underline">
                  -Ηλεκτρονική Υποβολή
                </span>
              </td>
            </tr>
            <tr className="border-b hover:bg-customBlue hover:text-white">
              <td className="text-left ">
                <a
                  href="https://teaapl.gr/images/pdf/aitisi_epaneggrafis_melous_pou_exei_diagrafei.pdf"
                  target="_blank"
                >
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/l0vjMqIboTRs/pdf"
                  ></a>
                  <img src={PDF} className="inline-block w-6 h-6"></img>
                  <a target="_blank" href="https://icons8.com"></a>
                </a>
                5).Αίτηση επανεγγραφής μέλους που έχει διαγραφεί (χωρίς λήψη
                Ατομ. Μερίδας).pdf
                <span className="text-red-500 underline">
                  -Ηλεκτρονική Υποβολή
                </span>
              </td>
            </tr>
            <tr className="border-b hover:bg-customBlue hover:text-white">
              <td className="text-left ">
                <a
                  href="https://teaapl.gr/images/paroxes/aitisi_xrimatikis_enisxisis_melous_logo_nosilias.pdf"
                  target="_blank"
                >
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/l0vjMqIboTRs/pdf"
                  ></a>
                  <img src={PDF} className="inline-block w-6 h-6"></img>
                  <a target="_blank" href="https://icons8.com"></a>
                </a>
                6α).Αίτηση Χρηματικής ενίσχυσης μέλους (λόγω μακροχρόνιας
                νοσοκομειακής περίθαλψης).pdf
              </td>
            </tr>
            <tr className="border-b hover:bg-customBlue hover:text-white">
              <td className="text-left ">
                <a
                  href="https://teaapl.gr/images/paroxes/aitisi_xrimatikis_enisxisis_melous_logo_anapirias.pdf"
                  target="_blank"
                >
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/l0vjMqIboTRs/pdf"
                  ></a>
                  <img src={PDF} className="inline-block w-6 h-6"></img>
                  <a target="_blank" href="https://icons8.com"></a>
                </a>
                6β).Αίτηση Χρηματικής ενίσχυσης μέλους (λόγω αναπηρίας).pdf
              </td>
            </tr>
            <tr className="border-b hover:bg-customBlue hover:text-white">
              <td className="text-left ">
                <a
                  href="https://teaapl.gr/images/paroxes/Aitisi-xrimatikis-enisxisis-melous-logo-thanatou.pdf"
                  target="_blank"
                >
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/l0vjMqIboTRs/pdf"
                  ></a>
                  <img src={PDF} className="inline-block w-6 h-6"></img>
                  <a target="_blank" href="https://icons8.com"></a>
                </a>
                6γ).Αίτηση Χρηματικής ενίσχυσης μέλους (λόγω θανάτου).pdf
              </td>
            </tr>
            <tr className="border-b hover:bg-customBlue hover:text-white">
              <td className="text-left ">
                <a
                  href="https://teaapl.gr/images/pdf/aitisi_enimerosis_melous.pdf"
                  target="_blank"
                >
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/l0vjMqIboTRs/pdf"
                  ></a>
                  <img src={PDF} className="inline-block w-6 h-6"></img>
                  <a target="_blank" href="https://icons8.com"></a>
                </a>
                Αίτηση ενημέρωσης μέλους.pdf
                <span className="text-red-500 underline">
                  -Ηλεκτρονική Υποβολή
                </span>
              </td>
            </tr>
            <tr className="border-b hover:bg-customBlue hover:text-white">
              <td className="text-left ">
                <a
                  href="https://teaapl.gr/images/pdf/odigies_simplirosis_aitisewn.pdf"
                  target="_blank"
                >
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/l0vjMqIboTRs/pdf"
                  ></a>
                  <img src={PDF} className="inline-block w-6 h-6"></img>
                  <a target="_blank" href="https://icons8.com"></a>
                </a>
                Οδηγίες συμπλήρωσης αιτήσεων.pdf
              </td>
            </tr>
            <tr className="border-b hover:bg-customBlue hover:text-white">
              <td className="text-left ">
                <a
                  target="_blank"
                  className=""
                  href="https://icons8.com/icon/117563/microsoft-word-2019"
                ></a>{" "}
                <img
                  src={Doc}
                  className="inline-block w-6 h-6 hover:bg-customBlue"
                ></img>{" "}
                <a target="_blank" href="https://icons8.com"></a>
                <button className="inline-block " onClick={handleDownload2}>
                  Αίτηση επικαιροποίησης στοιχείων μέλους για την εγγραφή του
                  στο Portal
                </button>
                <span className="inline-block">
                  {" "}
                  <button className="inline-block" onClick={handleDownload2}>
                    Ασφαλισμένου .doc
                  </button>
                  (χρησιμοποιώντας το πλήκτρο "tab" μπορείτε να αλλάξετε στο
                  έντυπο το πεδίο εγγραφής)
                </span>
              </td>
            </tr>
            <tr className="border-b hover:bg-customBlue hover:text-white">
              <td className="text-left ">
                <a
                  href="https://teaapl.gr/images/pdf/aitisi_paramomis_sto_tameio.pdf"
                  target="_blank"
                >
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/l0vjMqIboTRs/pdf"
                  ></a>
                  <img src={PDF} className="inline-block w-6 h-6"></img>
                  <a target="_blank" href="https://icons8.com"></a>
                </a>
                Αίτηση παραμονής στο Ταμείο μετά την Συνταξιοδότηση.pdf
              </td>
            </tr>
            <tr className="border-b hover:bg-customBlue hover:text-white">
              <td className="text-left ">
                <a
                  href="https://teaapl.gr/images/pdf/apografiko_deltio_epikairopoiisi_stoixeion.pdf"
                  target="_blank"
                >
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/l0vjMqIboTRs/pdf"
                  ></a>
                  <img src={PDF} className="inline-block w-6 h-6"></img>
                  <a target="_blank" href="https://icons8.com"></a>
                </a>
                Απογραφικό Δελτίο - Επικαιροποίηση Στοιχείων Μέλους.pdf
                <span className="text-red-500 underline">
                  -Ηλεκτρονική Υποβολή
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Entypa;
