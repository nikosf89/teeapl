import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skopos = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <article className="flex justify-center items-center min-h-screen py-5">
        <section className="bg-white-100 py-32 flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-2xl font-bold text-custom-new-blue mb-6 -mt-16"
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              ΣΚΟΠΟΣ - ΚΛΑΔΟΙ ΑΣΦΑΛΙΣΗΣ
            </h1>
            <p
              className="text-lg leading-7 text-gray-700"
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              Το Ταμείο οργανώνεται γύρω από την αρχή της αλληλεγγύης και της
              κοινωνικής δικαιοσύνης, προσφέροντας δύο κύριους κλάδους
              επαγγελματικής ασφάλισης:
            </p>
            <p
              className="text-lg leading-10 text-gray-700"
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              <span>
                <strong>Κλάδος Εφάπαξ</strong>
              </span>
            </p>
            <p
              className="text-lg leading-10 text-gray-700"
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              Αυτός ο κλάδος είναι σχεδιασμένος για να ενισχύσει την οικονομική
              δικαιοσύνη, χορηγώντας εφάπαξ το ποσό της ατομικής μερίδας του
              κάθε μέλους, σε μια προσπάθεια για κοινωνική ισότητα.
            </p>
            <p
              className="text-lg leading-10 text-gray-700"
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              <span>
                <strong>Κλάδος Αλληλεγγύης</strong>
              </span>
            </p>
            <p
              className="text-lg leading-10 text-gray-700"
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              Επικεντρώνεται στην αλληλεγγύη και την κοινοτική προστασία,
              χορηγώντας βοήθημα για την αντιμετώπιση σοβαρών κινδύνων όπως
              μόνιμη αναπηρία και θάνατο, με στόχο την διασφάλιση της
              αξιοπρέπειας και της ευημερίας των μελών και των οικογενειών τους.
            </p>
            <p
              className="text-lg leading-10 text-gray-700"
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              Για περισσότερες πληροφορίες, επισκεφτείτε τις ενότητες Εισφορές
              και Παροχές. Είμαστε δεσμευμένοι στην προώθηση της κοινωνικής
              δικαιοσύνης και της αλληλεγγύης μέσω αυτών των κλάδων, που
              λειτουργούν με οργανωτική, λογιστική, και οικονομική αυτοτέλεια.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Skopos;
