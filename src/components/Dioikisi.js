import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';

const headers = { "Content-Type": "application/json" };

const Dioikisoi = () => {
  const [error, setError] = useState(null);
const [dioikisi, setDioikisi] = useState([]);
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  const [isParagraphVisible1, setIsParagraphVisible1] = useState(false);
  const [isParagraphVisible2, setIsParagraphVisible2] = useState(false);
  const [isParagraphVisible3, setIsParagraphVisible3] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/dioikisis", { headers });
        console.log(response);
        const { data } = response.data; // Extract data array from the response
        setDioikisi(data);
        setError(null);
        
      } catch (error) {
        setError(error);
      }
    };

    fetchData();

    AOS.init();
    AOS.refresh();
  }, []);

   if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!dioikisi) {
    return <div>Loading...</div>;
  }

  const ReadMore = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };
  const ReadMore1 = () => {
    setIsParagraphVisible1(!isParagraphVisible1);
  };
  const ReadMore2 = () => {
    setIsParagraphVisible2(!isParagraphVisible2);
  };
  const ReadMore3 = () => {
    setIsParagraphVisible3(!isParagraphVisible3);
  };
  const Popup = ({ isVisible, onClose }) => {
    const handleOutsideClick = (event) => {
      const popup = document.querySelector(".popup");
      if (isVisible && popup && !popup.contains(event.target)) {
        onClose();
      }
    };

    useEffect(() => {
      window.addEventListener("mousedown", handleOutsideClick);

      return () => {
        window.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [isVisible, onClose]);

    if (!isVisible) {
      return null;
    }

    return (
      
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        {dioikisi.map((item) => (
          <div>
        {isParagraphVisible && (
          <div
            className="popup bg-white rounded-lg shadow-md p-8 mt-20  w-100 max-w-md"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <button
              onClick={ReadMore}
              className="py-1 px-3  text-custom-new-blue rounded absolute top-0 right-0"
            >
              X
            </button>
            <h1 className="name">Τσαγανός Ιωάννης</h1>
            <p className="additional-text">Αντιπρόεδρος</p>
            <p className="">
              Γεννήθηκε στη Θεσσαλονίκη το έτος 1980. Αποφοίτησε από το Γενικό
              Λύκειο Νέας Τρίγλιας Χαλκιδικής το έτος 1997. Κατατάχθηκε στο Σώμα
              της ΕΛ.ΑΣ. το έτος 1998 και αποφοίτησε από τη Σχολή Αστυφυλάκων το
              έτος 2000. Είναι πτυχιούχος Οικονομικών Επιστημών του
              Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης του Τμήματος Νομικών
              Οικονομικών και Πολιτικών Επιστημών. Κάτοχος πτυχίου καλής γνώσης
              Αγγλικής γλώσσας επιπέδου Certificate of Competency in English του
              University oF Michigan. Κάτοχος άδειας λογιστή – φοροτεχνικού και
              άδειας ασκήσεως οικονομολογικού επαγγέλματος. Έχει υπηρετήσει σε
              διάφορες Υπηρεσίες της Διεύθυνσης Αστυνομίας Χαλκιδικής και από το
              έτος 2007 έχει οριστεί Διαχειριστής Χρηματικού – Υλικού (Δημόσιος
              Υπόλογος) της Διεύθυνσης Αστυνομίας Χαλκιδικής. Είναι έγγαμος και
              πατέρας τριών (3) τέκνων.
            </p>
          </div>
        )}
        {isParagraphVisible1 && (
          <div
            className="popup bg-white rounded-lg shadow-md p-8 mt-20  w-100 max-w-md"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <button
              onClick={ReadMore1}
              className="py-1 px-3  text-custom-new-blue rounded absolute top-0 right-0"
            >
              X
            </button>
            <h1 className="name">Αρζιμάνογλου Μιχαήλ</h1>
            <p className="additional-text">Γενικός Γραμματέας</p>
            <p className="">
              Γεννήθηκε στoν Κορυδαλλό Αττικής το1979. Αποφοίτησε από σχολή
              Αστυφυλάκων το 1998, από τη Σχολή διοίκησης και Οικονομίας Τμ.
              Λογιστικής του ΤΕΙ Πειραιά το 2011. Είναι κάτοχος πιστοποιητικού
              γνώσης χειρισμού Η/Υ και μεταξύ άλλων έχει συμμετάσχει σε
              σεμινάρια του Εθνικού Κέντρου Δημόσιας Διοίκησης τόσο σε θεματικές
              ενότητες Οικονομικού περιεχομένου όσο και δικτύων Ηλεκτρονικών
              υπολογιστών. Γνωρίζει την Αγγλική γλώσσα σε επίπεδο B2 (Lower) Από
              το 2009 ως σήμερα υπηρετεί ως λογιστής στο Τ.Ε.Α.Π.Α.Σ.Α. Είναι
              έγγαμος και πατέρας δύο παιδιών.
            </p>
          </div>
        )}
        {isParagraphVisible2 && (
          <div
            className="popup bg-white rounded-lg shadow-md p-8 mt-20 w-100 max-w-md"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <button
              onClick={ReadMore2}
              className="py-1 px-3  text-custom-new-blue rounded absolute top-0 right-0"
            >
              X
            </button>
            <h1 className="name">Λίτσιος Απόστολος</h1>
            <p className="additional-text">Οργανωτικός Γραμματέας</p>
            <p className="">
              Γεννήθηκε στην Κοζάνη το έτος 1968. Είναι απόφοιτος Λυκείου.
              Κάτοχος πιστοποιητικού γνώσης χειρισμού Η/Υ (CAMBRIDGE).
              Προσλήφθηκε στην Ελληνική Αστυνομία τον Ιούνιο του 1993 και έχει
              υπηρετήσει σε υπηρεσίες της Αθήνας, της Καστοριάς και της Κοζάνης.
              Παρακολούθησε αρκετά σεμινάρια, υπηρεσιακά και μη και μεταξύ αυτών
              τα εξειδικευμένα: «Επενδύσεις για μη Οικονομικούς» και «Εκτίμηση
              Κινδύνου – Στρατηγική ανάλυση» Σήμερα ανήκει στη δύναμη της
              Τροχαίας Κοζάνης και είναι αποσπασμένος στο Τ.Π.Π.Π. Είναι έγγαμος
              και πατέρας τεσσάρων παιδιών.
            </p>
          </div>
        )}
        {isParagraphVisible3 && (
          <div
            className="popup bg-white rounded-lg shadow-md p-8 mt-20 w-100 max-w-md"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <button
              onClick={ReadMore3}
              className="py-1 px-3  text-custom-new-blue rounded absolute top-0 right-0"
            >
              X
            </button>
            <h1 className="name">Αθανασίου Παναγιώτης</h1>
            <p className="additional-text">Μέλος</p>
            <p className="">
              Γεννήθηκε στην Αθήνα το έτος 1979. Είναι απόφοιτος της Σχολής
              Αστυφυλάκων, στην οποία εισήχθη με το σύστημα των Πανελλαδικών
              Εξετάσεων το έτος 1998. Έχει υπηρετήσει σε μάχιμες υπηρεσίες των
              Νομών Αττικής και Θεσπρωτίας. Από το έτος 2014 υπηρετεί στο
              Επιτελείο της Διεύθυνσης Αστυνομίας Θεσπρωτίας. Έχει
              παρακολουθήσει πλήθος εκπαιδεύσεων και σεμιναρίων, τόσο μέσω των
              Σχολών Μετεκπαίδευσης και Επιμόρφωσης της Ελληνικής Αστυνομίας,
              όσο και Δημόσιων - Ιδιωτικών Φορέων, σε οικονομικά - κοινωνικά
              θέματα, μεταξύ των οποίων «Επενδύσεις για μη Οικονομικούς» και
              «Εκτίμηση Κινδύνου – Στρατηγική ανάλυση».
            </p>
          </div>
        )}
        </div>
        ))}
      </div>
      
    );
  };

  return (
    <div>
      <section>
        <h1 className="absolute left-44 top-24 text-3xl font-bold text-custom-new-blue border-b-2 border-custom-new-blue pb-2">
          ΔΙΟΙΚΗΣΗ:
        </h1>
        <div className="flex justify-center mt-24">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-12 mb-15 w-4/5 max-w-md">
              <h2 className="m-0 text-2xl text-custom-new-blue">
                Γούσιας Θεόδωρος
              </h2>
              <p className="mt-2 text-custom-new-blue text-sm">Πρόεδρος</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-12 mb-15 w-4/5 max-w-md">
              <h2 className="m-0 text-2xl text-custom-new-blue">
                Τσαγανός Ιωάννης
              </h2>
              <p className="mt-2 text-custom-new-blue text-sm">Αντιπρόεδρος</p>
              <button
                onClick={ReadMore}
                className="py-2 px-4 bg-blue-500 text-white rounded"
              >
                Read More
              </button>

              {isParagraphVisible && (
                <Popup
                  isVisible={isParagraphVisible}
                  onClose={() => setIsParagraphVisible(false)}
                />
              )}
            </div>
            <div className="bg-white rounded-lg shadow-md p-12 mb-15 w-4/5 max-w-md">
              <h2 className="m-0 text-2xl text-custom-new-blue ">
                Αρζιμάνογλου Μιχαήλ
              </h2>
              <p className="mt-2 text-custom-new-blue text-sm">
                Γενικός Γραμματέας
              </p>
              <button
                onClick={ReadMore1}
                className="py-2 px-4 mt-2 bg-blue-500 text-white rounded"
              >
                Read More
              </button>
              {isParagraphVisible1 && (
                <Popup
                  isVisible={isParagraphVisible1}
                  onClose={() => setIsParagraphVisible1(false)}
                />
              )}
            </div>
            <div className="bg-white rounded-lg shadow-md p-12 mb-15 w-4/5 max-w-md">
              <h2 className="m-0 mt-6 text-2xl text-custom-new-blue">
                Λίτσιος Απόστολος
              </h2>
              <p className="mt-2 text-custom-new-blue text-sm">
                Οργανωτικός Γραμματέας
              </p>
              <button
                onClick={ReadMore2}
                className="py-2 px-4 bg-blue-500 text-white rounded mt-2"
              >
                Read More
              </button>
              {isParagraphVisible2 && (
                <Popup
                  isVisible={isParagraphVisible2}
                  onClose={() => setIsParagraphVisible2(false)}
                />
              )}
            </div>
            <div className="bg-white rounded-lg shadow-md p-12 mb-15 w-4/5 max-w-md">
              <h2 className="m-4 text-2xl text-custom-new-blue">
                Σύρσυρης Φώτιος
              </h2>
              <p className="mt-2 text-custom-new-blue text-sm">Διαχειριστής</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-12 mb-15 w-4/5 max-w-md">
              <h2 className="m-0 text-2xl text-custom-new-blue">
                Αθανασίου Παναγιώτης
              </h2>
              <p className="mt-2 text-custom-new-blue text-sm">Μέλος</p>
              <button
                onClick={ReadMore3}
                className="py-2 px-4 bg-blue-500 text-white rounded"
              >
                Read More
              </button>
              {isParagraphVisible3 && (
                <Popup
                  isVisible={isParagraphVisible3}
                  onClose={() => setIsParagraphVisible3(false)}
                />
              )}
            </div>
            <div className="bg-white rounded-lg shadow-md p-12 mb-15 w-4/5 max-w-md">
              <h2 className="m-0 text-2xl text-custom-new-blue">
                Βλαχόπουλος Κωνσταντίνος
              </h2>
              <p className="mt-2 text-custom-new-blue text-sm">Μέλος </p>
            </div>

            <p>
              <br></br>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 mb-8">
          <table>
            <thead className="text-2xl font-bold text-custom-new-blue p-4  leading-7  border-b-2 border-custom-new-blue pb-2 cursor-pointer ">
              <tr>ΕΞΕΛΕΓΚΤΙΚΗ ΕΠΙΤΡΟΠΗ:</tr>
            </thead>
            <thead className="bg-gray-200">
              <th className="p-5">Θέση</th>
              <th className="p-5">Ονοματεπώνυμο</th>
            </thead>
            <tbody className="border border-gray-300">
              <tr className="hover:bg-custom-new-blue hover:text-white">
                <td>Πρόεδρος</td>
                <td>Μαυρογιώργος Σωκράτης</td>
              </tr>
              <tr className="hover:bg-custom-new-blue hover:text-white">
                <td>Μέλος</td>
                <td>Μινογιάννης Κοσμάς</td>
              </tr>
              <tr className="hover:bg-custom-new-blue hover:text-white">
                <td>Μέλος</td>
                <td>Παπούλιας Μιχαήλ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dioikisoi;
