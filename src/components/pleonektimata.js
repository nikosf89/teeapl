import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pleonekthmata = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-12 main-container mt-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-4/5">
        <h1 className="text-center text-3xl font-semibold  text-custom-new-blue mb-6">
          ΠΛΕΟΝΕΚΤΗΜΑΤΑ
        </h1>
        <p className="text-lg text-gray-700 mb-5 pl-6 border-l-4 border-blue-500">
          Δημιουργήθηκε και λειτουργεί αυτοδιαχειριζόμενο Ταμείο Επαγγελματικής
          Ασφάλισης ως ΝΠΙΔ (ΦΕΚ Αρ.Φ.1903τΒ/4.9.2009 όπως τροπ. με την Αρ.
          Φ.51020/7334/157/04.04.2013) για τους υπηρετούντες στα Σώματα
          Ασφαλείας, σύμφωνα με τις διατάξεις του Ν.3029/2002 και εποπτεύεται
          από το Υπουργείο Απασχόλησης και Κοινωνικής Προστασίας, λειτουργώντας
          συμπληρωματικά στην υποχρεωτική ασφάλιση, εξασφαλίζοντας:
        </p>

        <div className="grid gap-10 md:grid-cols-2 mb-10 ">
          <BenefitCard title="Μέσω του κλάδου αλληλεγγύης">
            <Benefit>
              Την ασφάλεια ότι σε περίπτωση ατυχήματος που θα μου προκαλέσει
              μόνιμη ολική ανικανότητα θα λάβω βοήθημα ύψους 10.000€ και σε
              περίπτωση θανάτου η οικογένειά μου θα λάβει βοήθημα ύψους 15.000€.{" "}
            </Benefit>
            <Benefit>
              Ότι εάν νοσηλευθώ σε νοσοκομείο ή κλινική για διάστημα άνω των 9
              ημερών θα λάβω βοήθημα 20€ για κάθε επόμενη μέρα.{" "}
            </Benefit>
            <Benefit>
              Την ανάπτυξη σχέσης αλληλεγγύης και αλληλοβοήθειας, μεταξύ των
              συναδέλφων μου.
            </Benefit>
          </BenefitCard>

          <BenefitCard title="Μέσω του κλάδου εφ’ άπαξ">
            <Benefit>
              Αποταμίευση καθώς ενώ δυσκολεύομαι να αποταμιεύσω μόνος μου, μέσω
              του Ταμείου, επιλέγοντας ο ίδιος το ποσό της μηνιαίας εισφοράς
              μου, που παρακρατείται από το μισθό μου, μπορώ να επιτύχω την
              δημιουργία σημαντικού κεφαλαίου.
            </Benefit>
            <Benefit>
              Τη δυνατότητα να μπορώ λάβω εφ' άπαξ είτε μετά τα 20 έτη ασφάλισης
              είτε με την συμπλήρωση του 50ου έτους της ηλικίας μου με χρόνο
              ασφάλισης στο Ταμείο 10 έτη είτε με την συμπλήρωση του 55ου έτους
              της ηλικίας μου με χρόνο ασφάλισης στο Ταμείο 5 έτη είτε και σε
              περίπτωση αποστρατείας με 1 έτος ασφάλισης στο Ταμείο.
            </Benefit>
            <Benefit>
              Με τη θεσμική λειτουργία του Ταμείου, την ακεραιότητα της
              διαχείρισης, καθώς το κεφάλαιό μου επενδύεται από επαγγελματίες
              στο μικτό αμοιβαίο κεφάλαιο που δημιούργησε το ίδιο το Ταμείο,
              θωρακίζοντας τις αποταμιεύσεις μου.
            </Benefit>
            <Benefit>
              Μείωση του φόρου που καταβάλλω διότι οι ετήσιες εισφορές μου
              εκπίπτουν του φορολογητέου εισοδήματός μου.
            </Benefit>
            <Benefit>Αφορολόγητες παροχές εφ’ άπαξ.</Benefit>
            <Benefit>
              Δυνατότητα επιπλέον ασφαλιστικής κάλυψης, μέσα στην αβεβαιότητα
              και στην αναμόρφωση του ασφαλιστικού συστήματος.
            </Benefit>
            <Benefit>
              Δωρεάν παροχές και προνόμια υγείας σε ιδιωτικές κλινικές και
              ιδιώτες ιατρούς.
            </Benefit>
          </BenefitCard>
        </div>

        <p
          className="text-lg text-center text-black  px-6 py-4 rounded-lg mb-5 transition-transform transform hover:scale-105"
          data-aos="zoom-in"
        >
          Μπορώ να συμμετάσχω στην διοίκηση του Ταμείου καθώς κάθε μέλος έχει το
          δικαίωμα του εκλέγειν και του εκλέγεσθαι.
        </p>
      </div>
    </div>
  );
};

const BenefitCard = ({ title, children }) => (
  <div className="bg-gradient-to-t from-gray-100 to-white p-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-medium text-custom-new-blue mb-6">{title}</h2>
    <ul className="space-y-4">{children}</ul>
  </div>
);

const Benefit = ({ children }) => (
  <li className="flex items-start space-x-4">
    <span className="material-icons text-blue-500">check_circle</span>
    <p className="flex-1">{children}</p>
  </li>
);

export default Pleonekthmata;
