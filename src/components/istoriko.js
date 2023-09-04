import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Tameio = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <article>
        <section className="bg-white-100 py-32 flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-2xl font-bold text-custom-new-blue  mb-6 -mt-8"
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              ΙΣΤΟΡΙΚΟ
            </h2>
            <p
              className="text-lg leading-7 text-gray-700"
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              Ξεκίνησε το 1994 ως μια απάντηση στην ανάγκη για αλληλεγγύη και
              κοινωνική δικαιοσύνη μεταξύ των μελών της Διεθνούς Ένωσης
              Αστυνομικών. Το ταμείο δημιουργήθηκε με σκοπό την κοινωνική
              ενίσχυση και την προστασία των εργαζομένων και των οικογενειών
              τους σε περιπτώσεις έκτακτης ανάγκης, όπως θάνατος, αναπηρία ή
              μακροχρόνια νοσηλεία.
            </p>
            <p
              className="text-lg leading-7 text-gray-700"
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              Από την αρχή, είχαμε την πίστη ότι οι εργαζόμενοι πρέπει να έχουν
              το δικαίωμα να εκφράζουν τις απόψεις τους και να συμμετέχουν
              ενεργά στη διαχείριση του ταμείου, προωθώντας έτσι την δημοκρατική
              συμμετοχή.
            </p>
            <p
              className="text-lg leading-7 text-gray-700"
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              Με την ενταξή του στο καθεστώς των επαγγελματικών ταμείων το 2009,
              το ταμείο αποκτά μια πιο οργανωμένη και δημοκρατική δομή,
              επιτρέποντας στα μέλη του να συμβάλλουν ακόμα περισσότερο στην
              κοινωνική δικαιοσύνη και την αλληλεγγύη.
            </p>
            <p
              className="text-lg leading-7 text-gray-700"
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              Στην πορεία του, το ταμείο έχει ανοίξει τις πόρτες του σε
              πυροσβέστες, Λιμενικούς, και πολιτικό προσωπικό, αναγνωρίζοντας
              ότι η αλληλεγγύη και η κοινωνική προστασία είναι δικαιώματα που
              πρέπει να επεκταθούν σε όλους τους εργαζόμενους.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Tameio;
