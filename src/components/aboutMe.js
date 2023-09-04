import React from "react";

function AboutMe() {
  return (
    <div className="mobile-center font-poppins text-xs leading-6 font-normal text-customColor mx-4 sm:mx-auto max-w-[1300px]">
      <h2
        id="about-me"
        className="text-center sm:text-left pb-0 text-2xl sm:text-3xl leading-tight m-0 mb-4 pt-0 font-semibold text-custom-new-blue"
      >
        ΙΣΤΟΡΙΚΟ
      </h2>
      <p className="text-dark text-center sm:text-left sm:text-justify">
        Το Ταμείο Επαγγελματικής Ασφάλισης Αστυνομικών Πυροσβεστών Λιμενικών
        (Τ.Ε.Α.Α.Π.Λ.) είναι αυτοδιαχειριζόμενο, Νομικό Πρόσωπο Ιδιωτικού
        Δικαίου μη κερδοσκοπικού χαρακτήρα, που συστάθηκε τον Σεπτέμβριο του
        2009 (ΦΕΚ Αρ.Φ.1903τΒ/4.9.2009 όπως τροπ. με την Αρ.
        Φ.51020/7334/157/04.04.2013) για τους υπηρετούντες στα Σώματα Ασφαλείας,
        σύμφωνα με τις διατάξεις του Ν.3029/2002 και αποτελεί την μετεξέλιξη του
        Λογαριασμού Αλληλοβοήθειας μελών της Διεθνούς Ένωσης Αστυνομικών
        (Λ.Α.Μ.Δ.Ε.Α.) που ιδρύθηκε το 1994.
      </p>
      <br />

      <div className="mt-4 text-center sm:text-left">
        <a
          href="#"
          className="inline-block text-dark border-2 border-blue-700 text-center px-6 py-2 cursor-pointer align-middle no-underline rounded-full transition-all duration-200 ease-linear text-xs hover:bg-custom-new-blue"
        >
          Ιστορικό
        </a>
      </div>
      <h2
        id="about-me"
        className="text-center sm:text-left mt-8 sm:mt-16 pb-0 text-2xl sm:text-3xl leading-none m-0 mb-4 pt-0 text-custom-new-blue font-semibold"
      >
        ΣΚΟΠΟΣ
      </h2>
      <p className="text-dark text-center sm:text-left">
        Εποπτεύεται από το Υπουργείο Απασχόλησης και Κοινωνικής Προστασίας, την
        Εθνική Αναλογιστική Αρχή και την Επιτροπή Κεφαλαιαγοράς. Λειτουργεί
        συμπληρωματικά στην υποχρεωτική ασφάλιση και αποτελείται από δύο
        αυτοτελείς κλάδους: α) τον Κλάδο Εφάπαξ ο οποίος χορηγεί εφάπαξ
        βοηθήματα, είτε μετά τα 20 έτη ασφάλισης είτε με την συμπλήρωση του 50ου
        έτους της ηλικίας, με χρόνο ασφάλισης στο Ταμείο 10 έτη είτε με την
        συμπλήρωση του 55ου έτους της ηλικίας, με χρόνο ασφάλισης στο Ταμείο 5
        έτη είτε και σε περίπτωση αποστρατείας με 1 έτος ασφάλισης στο Ταμείο.
      </p>
      <br />

      <div className="mt-4 text-center sm:text-left">
        <a
          href="#"
          className="inline-block text-dark border-2 border-blue-700 text-center px-6 py-2 cursor-pointer align-middle no-underline rounded-full transition-all duration-200 ease-linear text-xs hover:bg-custom-new-blue"
        >
          Σκοπός
        </a>
      </div>
    </div>
  );
}
export default AboutMe;
