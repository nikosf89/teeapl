import React from "react";

const Paroxes = () => {
  return (
    <div>
      <section>
        <h1 className="text-center text-2xl underline font-bold text-custom-new-blue mt-24 mb-10">
          ΠΑΡΟΧΕΣ
        </h1>
        <h3 className="text-left text-2xl underline font-bold text-custom-new-blue ml-2 mb-5">
          Κλάδος ΕΦΑΠΑΞ
        </h3>
        <div className="text-lg ml-4 mr-2 mr-2 bg-blue-100 px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500">
          <p className="text-gray-700 text-left text-1xl font-semibold">
            Ο κλάδος Εφάπαξ εφαρμόζει το κεφαλαιοποιητικό σύστημα
            προκαθορισμένης εισφοράς.
          </p>
        </div>
        <div>
          <div className="text-left mt-8">
            <h2 className="text-xl underline font-bold text-custom-new-blue ml-2  mb-5">
              Ποσό εφάπαξ παροχής
            </h2>
            <div className="text-left text-lg ml-4 mr-2 bg-blue-100 px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500 mb-5">
              <p className="text-gray-700 text-1xl font-semibold ">
                Σε κάθε ασφαλισμένο που πληροί τις προϋποθέσεις, όπως αυτές
                αναλύονται στη συνέχεια, απονέμεται εφάπαξ παροχή ίση με το
                κεφάλαιο που έχει σωρευθεί στον ατομικό του λογαριασμό έως την
                ημέρα καταβολής της παροχής. Ο ασφαλισμένος υποβάλλει προς τούτο
                σχετική{" "}
                <span className="text-blue-600 font-bold underline hover:text-blue-700">
                  <a
                    href="https://teaapl.gr/images/pdf/aitisi_diagrafis.pdf"
                    target="_blank"
                  >
                    <i class="fa-solid fa-user-xmark"></i>αίτησης διαγραφής
                  </a>
                </span>{" "}
                προς το Ταμείο.
              </p>
            </div>
          </div>
          <div className="text-lg text-left ml-4 mr-2 bg-blue-100 px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500 ">
            <p className="text-gray-700 text-1xl font-semibold  ">
              Η εφάπαξ παροχή καταβάλλεται στον ασφαλισμένο με απόφαση του
              Διοικητικού Συμβουλίου μετά από αίτησή του. Ο ατομικός
              συνταξιοδοτικός λογαριασμός του ασφαλισμένου, ο οποίος είναι
              επενδυμένος σε μερίδια αμοιβαίου κεφαλαίου, ρευστοποιείται εντός
              10 ημερών από την έκδοση της απόφασης του Διοικητικού Συμβουλίου
              του Ταμείου περί καταβολής της εφάπαξ παροχή. Η παροχή
              καταβάλλεται στον ασφαλισμένο εφόσον το Ταμείο έχει εισπράξει από
              τη μισθοδοσία του ασφαλισμένου τυχόν παρακρατηθείσες εισφορές
              μέχρι και το μήνα στον οποίο λήφθηκε η απόφαση για έγκριση της
              παροχής, μαζί με το ποσό που έχει προκύψει από τη ρευστοποίηση των
              μεριδίων του. Τυχόν ποσά εισφορών που έχουν καταβληθεί για μήνες
              μεταγενέστερους της διαγραφής του ασφαλισμένου επιστρέφονται
              αχρεωστήτως στον ασφαλισμένο. Το Ταμείο δεν εγγυάται το ύψος της
              επενδυτικής απόδοσης.
            </p>
          </div>
        </div>
        <div className="text-left mb-10">
          <h1 className="text-left text-xl underline font-bold text-custom-new-blue ml-2 mt-10 mb-5">
            Προϋποθέσεις θεμελίωσης δικαιώματος σε παροχή
          </h1>
          <p className="text-xl underline ml-2 ">
            Ο ασφαλισμένος δικαιούται εφάπαξ παροχή από το Ταμείο εφόσον
            συντρέχουν στο πρόσωπό του οι ακόλουθες προϋποθέσεις:
          </p>
          <ul className="text-1xl  pl-6 mt-3 space-y-2 mb-10 ml-4 mr-2 bg-blue-100 px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <li className="text-gray-700 text-left text-1xl font-semibold p-2">
              <span class="material-icons text-blue-400">check_circle</span>
              Είναι ηλικίας 55 ετών και έχει χρόνο ασφάλισης στο Ταμείο
              τουλάχιστον πέντε (5) έτη.
            </li>
            <li className="text-gray-700 text-left text-1xl font-semibold p-2">
              <span class="material-icons text-blue-400">check_circle</span>
              Είναι ηλικίας 50 ετών και έχει χρόνο ασφάλισης στο Ταμείο
              τουλάχιστον δέκα (10) έτη,
            </li>
            <li className="text-gray-700 text-left text-1xl font-semibold p-2">
              <span class="material-icons text-blue-400">check_circle</span>
              Ανεξαρτήτως ηλικίας, εφόσον έχει είκοσι (20) τουλάχιστον έτη
              ασφάλισης στο Ταμείο.
            </li>
            <li className="text-gray-700 text-left text-1xl font-semibold p-2">
              <span class="material-icons text-blue-400">check_circle</span>Τα
              πρώην μέλη του ΛΑΜΔΕΑ τα οποία εγγράφονται στο Ταμείο και
              μεταφέρουν την ατομική τους μερίδα δικαιούνται εφάπαξ παροχή
              ύστερα από ένα (1) έτος, με την προϋπόθεση ότι έχουν συμπληρώσει
              την ηλικία των 50 ετών.
            </li>
            <li className="text-gray-700 text-left text-1xl font-semibold p-2">
              <span class="material-icons text-blue-400">check_circle</span>Σε
              περίπτωση αποστρατείας από την ενεργό υπηρεσία, ανεξαρτήτως
              ηλικίας, εφόσον έχει χρόνο παραμονής στο Ταμείο τουλάχιστον ένα
              (1) έτος.
            </li>
          </ul>
        </div>
        <div className="text-left  mt-10">
          <div className="mb-5">
            <h1 className="text-xl underline font-bold text-custom-new-blue ml-2  mb-5">
              Κλάδος ΑΛΛΗΛΕΓΓΥΗΣ
            </h1>
            <p className="text-lg ml-4 mr-2 bg-blue-100 px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500">
              Ο Κλάδος Αλληλεγγύης του Ταμείου εφαρμόζει το διανεμητικό σύστημα
              προκαθορισμένης παροχής, και χορηγεί εφάπαξ παροχές σε περίπτωση
              θανάτου, αναπηρίας ή νοσηλείας του ασφαλισμένου.
            </p>
          </div>
          <div className="mx-auto bg-white shadow-md rounded-lg  p-4 grid lg:grid-cols-3 lg:gap-8">
            <div className="mb-10 bg-white rounded-lg  p-8 max-w-2xl">
              <h2 className="text-xl underline font-bold text-custom-new-blue mb-5">
                Σε περίπτωση θανάτου
              </h2>
              <p className="text-1xl ">
                Σε περίπτωση θανάτου ασφαλισμένου, δικαιούνται εφάπαξ παροχή από
                τον Κλάδο Αλληλεγγύης του Ταμείου οι νόμιμοι κληρονόμοι ή οι
                δικαιούχοι που είχε ορίσει με δήλωσή του στο Ταμείο ο αποβιώσας
                ασφαλισμένος, εφόσον:
                <ul className="list-disc pl-6 mt-3 space-y-2 mb-10">
                  <li className="bg-white p-4 rounded-lg shadow-md mt-10 hover:text-white hover:bg-custom-new-blue shadow-lg transition delay-50 duration-300 ease-in-out ">
                    Έχει χρόνο ασφάλισης στον Κλάδο Αλληλεγγύης του Ταμείου
                    τουλάχιστον δυο (2) έτη.
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-md mt-10 hover:text-white hover:bg-custom-new-blue shadow-lg transition delay-50 duration-300 ease-in-out ">
                    Έχει καταβάλλει τις εισφορές στον κλάδο Αλληλεγγύης έως και
                    το προηγούμενο ημερολογιακό μήνα πριν από την επέλευση του
                    θανάτου.
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-md mt-10 hover:text-white hover:bg-custom-new-blue shadow-lg transition delay-50 duration-300 ease-in-out ">
                    Δεν έχει λάβει εφάπαξ παροχή λόγω αναπηρίας.
                  </li>
                </ul>
                Το ποσό εφάπαξ παροχή σε περίπτωση θανάτου ανέρχεται σε: 15.000
                €. Κατεβάστε{" "}
                <span className="text-blue-600 hover:text-blue-700 underline">
                  <a
                    href="https://www.teaapl.gr/images/paroxes/Aitisi-xrimatikis-enisxisis-melous-logo-thanatou.pdf"
                    target="_blank"
                  >
                    <i class="fa-solid fa-circle-down"></i>εδώ
                  </a>
                </span>{" "}
                το σχετικό έντυπο αίτησης.
              </p>
            </div>
            <div className="mb-10 bg-white rounded-lg  p-8 max-w-2xl">
              <h2 className="text-xl underline font-bold text-custom-new-blue  mb-5">
                Μακροχρόνια νοσοκομειακή Περίθαλψη
              </h2>
              <p className="text-1xl ">
                Σε περίπτωση νοσηλείας σε νοσοκομείο για χρόνο περισσότερο των 8
                ημερών ο ασφαλισμένος δικαιούται αποζημίωση από τον Κλάδο
                Αλληλεγγύης του Ταμείου εφόσον συντρέχουν σωρευτικά στο πρόσωπό
                του οι ακόλουθες προϋποθέσεις:
                <ul className="list-disc pl-6 mt-3 space-y-2 mb-10">
                  <li className="bg-white p-4 rounded-lg shadow-md mt-10 hover:text-white hover:bg-custom-new-blue shadow-lg transition delay-50 duration-300 ease-in-out ">
                    Έχει τουλάχιστον 1 έτος ασφάλισης στον Κλάδο Αλληλεγγύης.
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-md mt-10 hover:text-white hover:bg-custom-new-blue shadow-lg transition delay-50 duration-300 ease-in-out ">
                    Καταβάλλει τις εισφορές στον Κλάδο Αλληλεγγύης έως και τον
                    προηγούμενο μήνα πριν από την εισαγωγή στο νοσοκομείο.
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-md mt-10 hover:text-white hover:bg-custom-new-blue shadow-lg transition delay-50 duration-300 ease-in-out ">
                    Δεν έχει λάβει αποζημίωση νοσοκομειακής περίθαλψης από τον
                    Κλάδο Αλληλεγγύης του Ταμείου για την ίδια αιτία στην
                    τελευταία, πριν από την εισαγωγή στο νοσοκομείο, διετία.
                  </li>
                </ul>
                Το ύψος της αποζημίωσης για κάθε μέρα νοσηλείας από την 9η ημέρα
                παραμονής στο νοσοκομείο μέχρι και την 120η καθορίζεται σε 20
                ΕΥΡΩ ημερησίως. Κατεβάστε{" "}
                <span className="text-blue-600 hover:text-blue-700 underline">
                  <a
                    href="https://www.teaapl.gr/images/paroxes/aitisi_xrimatikis_enisxisis_melous_logo_nosilias.pdf"
                    target="_blank"
                  >
                    <i class="fa-solid fa-circle-down"></i>εδώ
                  </a>
                </span>{" "}
                το σχετικό έντυπο αίτησης.
              </p>
            </div>
            <div className="mb-10 bg-white rounded-lg  p-8 max-w-2xl">
              <h2 className="text-xl underline font-bold text-custom-new-blue  mb-5">
                Σε περίπτωση αναπηρίας
              </h2>
              <p className="text-1xl ">
                Σε περίπτωση αναπηρίας, ο ασφαλισμένος δικαιούται εφάπαξ παροχής
                από τον Κλάδο Αλληλεγγύης του Ταμείου εφόσον συντρέχουν
                σωρευτικά στο πρόσωπό του οι ακόλουθες προϋποθέσεις:
                <ul className="list-disc pl-6 mt-3 space-y-2 mb-10">
                  <li className="bg-white p-4 rounded-lg shadow-md mt-10 hover:text-white hover:bg-custom-new-blue shadow-lg transition delay-50 duration-300 ease-in-out ">
                    Καθίσταται ανάπηρος, με ποσοστό ανικανότητας για εργασία
                    τουλάχιστον 67%.
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-md mt-10 hover:text-white hover:bg-custom-new-blue shadow-lg transition delay-50 duration-300 ease-in-out ">
                    Κατά το χρόνο επέλευσης της αναπηρίας δεν είναι συνταξιούχος
                    φορέα κοινωνικής ασφάλισης.
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-md mt-10 hover:text-white hover:bg-custom-new-blue shadow-lg transition delay-50 duration-300 ease-in-out ">
                    Έχει τουλάχιστον δυο (2) έτη ασφάλισης στον Κλάδο
                    Αλληλεγγύης.
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-md mt-10 hover:text-white hover:bg-custom-new-blue shadow-lg transition delay-50 duration-300 ease-in-out ">
                    Έχει καταβάλλει τις εισφορές στον Κλάδο Αλληλεγγύης έως και
                    το προηγούμενο ημερολογιακό μήνα πριν από την επέλευση της
                    αναπηρίας.
                  </li>
                </ul>
                Η αναπηρία αποδεικνύεται από την απόφαση συνταξιοδότησης λόγω
                αναπηρίας του Κυρίου Φορέα Κοινωνικής Ασφάλισης στον οποίο είναι
                ασφαλισμένο το μέλος του Ταμείου που κατέστη ανάπηρο, ύστερα από
                γνωμάτευση της Α.Υ.Ε. ή της Α.Σ.Υ.Ε. Το ποσό εφάπαξ παροχή σε
                περίπτωση αναπηρίας ανέρχεται σε: 10.000 €. Κατεβάστε{" "}
                <span className="text-blue-600 hover:text-blue-700 underline">
                  <a
                    href="https://www.teaapl.gr/images/paroxes/aitisi_xrimatikis_enisxisis_melous_logo_anapirias.pdf"
                    target="_blank"
                  >
                    <i class="fa-solid fa-circle-down"></i>εδώ
                  </a>
                </span>{" "}
                το σχετικό έντυπο αίτησης.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Paroxes;