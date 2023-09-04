import React, { useEffect,useState } from "react";
import axios from 'axios';


const headers = { "Content-Type": "application/json" };

const Eisfores = () => {

const [error, setError] = useState(null);
const [eisfores, setEisfores] = useState([]);

  useEffect(() => {

const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/klasis", { headers });
        console.log(response);
        const { data } = response.data; // Extract data array from the response
        setEisfores(data);
        setError(null);
        
      } catch (error) {
        setError(error);
      }
    };

    fetchData();

    
  }, []);


  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!eisfores) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <section>
        <h1 className="text-center text-2xl underline font-bold text-custom-new-blue mt-24">
          ΕΙΣΦΟΡΕΣ
        </h1>
        <body class=" p-4 mt-20 text-1xl">
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div class="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
              <p class="text-left text-gray-700 ">
                Κάθε μέλος υποχρεούται να καταβάλλει στο Ταμείο την εισφορά για
                κάθε ημερολογιακό μήνα. Το ποσό της μηνιαίας εισφοράς δεν μπορεί
                να είναι κατώτερο από 30€ ούτε ανώτερο από 500€.
              </p>
            </div>
            <div class="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
              <p class="text-left text-gray-700">
                Κάθε μέλος επιλέγει το ποσό της μηνιαίας εισφοράς που καταβάλλει
                στο Ταμείο μεταξύ του ως άνω κατώτατου και ανώτατου ποσού
                μηνιαίας εισφοράς.
              </p>
            </div>
            <div class="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
              <p class="text-left text-gray-700">
                Το δικαίωμα επιλογής του ποσού της εισφοράς ασκείται με έγγραφη
                δήλωση του μέλους που υποβάλλεται στο Διοικητικό Συμβούλιο του
                Ταμείου μαζί με την αίτηση εγγραφής του σε αυτό.
              </p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
            <div class="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
              <p class="text-left text-gray-700">
                Κάθε μέλος έχει το δικαίωμα να μεταβάλλει το ύψος της μηνιαίας
                εισφοράς που καταβάλλει στο Ταμείο, υπό τον περιορισμό του
                ισχύοντος κατώτατου και ανώτατου ποσού εισφορών.{" "}
                <span className="text-blue-500 hover:text-blue-700 underline">
                  <a
                    href="https://www.teaapl.gr/images/pdf/aitisi_metavolis_posou_miniaias_eisforas.pdf"
                    target="_blank"
                  >
                    <i class="fa-solid fa-circle-down"></i>Κατεβάστε εδώ το
                    σχετικό έντυπο.
                  </a>
                </span>
              </p>
            </div>
            <div class="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
              <p class="text-left text-gray-700">
                Το δικαίωμα μεταβολής του ύψους της εισφοράς ασκείται μια φορά
                ανά ημερολογιακό έτος με έγγραφη δήλωση του μέλους, η οποία
                υποβάλλεται στο Διοικητικό Συμβούλιο του Ταμείου έως την 30η
                Οκτωβρίου. Η μεταβολή ισχύει από την 1η Ιανουαρίου του επόμενου
                έτους.
              </p>
            </div>
            <div class="flex-1 p-4 rounded-lg shadow-md border border-blue-400">
              <p class="text-left text-gray-700">
                Οι εισφορές των μελών κατανέμονται από το Ταμείο στους κλάδους
                Εφάπαξ και Αλληλεγγύης ανεξάρτητα από το ποσό της μηνιαίας
                εισφοράς. Στον κλάδο Αλληλεγγύης μεταφέρεται μόνο το ποσό των
                4,5€, αφού αφαιρεθεί 6% για λειτουργικά έξοδα και με το υπόλοιπο
                ποσό δημιουργείται ο ατομικός λογαριασμός του μέλους.
              </p>
            </div>
          </div>
        </body>
        <main className="table mr-40">
          <section className="text-center bg-gray-300 p-5">
            <h1 className="text-2xl text-gray-700 border-4 border-black p-4 m-0">
              ΕΝΔΕΙΚΤΙΚΟΣ ΠΙΝΑΚΑΣ ΚΛΑΣΕΩΣ ΕΙΣΦΟΡΩΝ
            </h1>
            <hr class="my-6 border-t-2 border-gray-700"></hr>
            <h1>Ανάλυση Εισφοράς σε Αποθ/κά και Ι.Κ.</h1>
            <hr class="my-6 border-t-2 border-gray-700"></hr>
          </section>
          <section className="table_body">
            <table className="w-full border-collapse ">
              <thead className="sticky top-16 z-10 bg-gray-200">
                <tr>
                  <th class=" p-5">Κλάση </th>
                  <th class=" p-5 ">Ποσό Εισφοράς</th>
                  <th class=" p-5">Κλάδος </th>
                  <th class=" p-5">Ποσό</th>
                  <th class=" p-5">Ποσοστό Κράτησης Ιδ. Κεφαλ.</th>
                  <th class=" p-5">Ίδια Κεφάλαια </th>
                  <th class=" p-5">Κλάδος Αλληλεγγύης</th>
                  <th class=" p-5">Ατομική Μερίδα Κλ. Εφάπαξ</th>
                </tr>
              </thead>
              <tbody className="w-95 max-h-[calc(89%-0.8rem)] bg-white-50 m-2 rounded-lg overflow-auto border border-gray-300 py-2 px-4 mb-10">
                
                {eisfores.map(item => (
                  
                  <tr>
            <td>{item.attributes.KLASH}</td>
            <td>{item.attributes.PosoEisforas}</td>
            <td>{item.attributes.KLADOS}</td>
            <td>{item.attributes.POSO}</td>
            <td>{item.attributes.PosostoKrathshsIdKefal}</td>
            <td>{item.attributes.IdiaKefalaia}</td>
            <td>{item.attributes.KladosAllyleghs}</td>
            <td>{item.attributes.AtomikhMeridaKlEfapaks}</td>
            
          </tr>
          
        ))}
        
              </tbody>
            </table>
          </section>
        </main>
        
      </section>
    </div>
  );
};

export default Eisfores;
