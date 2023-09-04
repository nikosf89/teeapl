import React, { useEffect,useState } from "react";
import PDF from "../images/icon.png";
import axios from 'axios';

const headers = { "Content-Type": "application/json" };

const Eggrafh = () => {
const [error, setError] = useState(null);
const [eggrafi, setEggrafi] = useState([]);

  useEffect(() => {

const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/eggrafis", { headers });
        console.log(response);
        const { data } = response.data; // Extract data array from the response
        setEggrafi(data);
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

  if (!eggrafi) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <h1 className="text-center text-2xl underline font-bold text-custom-new-blue mt-24">
        ΕΓΓΡΑΦΗ
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 ml-5 mr-5">
        <div class="p-4 rounded-lg shadow-md border border-blue-400">
          <p className="text-left text-1xl ">
            <h1 className="underline text-gray-700">
              Α) Δικαίωμα εγγραφής στο Ταμείο έχουν όλοι:
            </h1>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>οι εν ενεργεία αστυνομικοί,</li>
              <li>οι εν ενεργεία πυροσβέστες,</li>
              <li>οι εν ενεργεία λιμενικοί,</li>
              <li>
                οι υπάλληλοι των Αρχηγείων της Ελληνικής Αστυνομίας, του
                Πυροσβεστικού Σώματος και του Λιμενικού Σώματος και Ελληνικής
                Ακτοφυλακής.
              </li>
            </ul>
          </p>
        </div>
        <div class="p-4 rounded-lg shadow-md border border-blue-400">
          <p className="text-left text-1xl  ">
            <span className="text-gray-700 underline">Β)</span>Η ασφάλιση στο
            Ταμείο είναι προαιρετική και συμπεριλαμβάνει την ένταξη τόσο στον
            Κλάδο Εφάπαξ όσο και στον Κλάδο Αλληλεγγύης, πλην των ευρισκομένων
            σε κατάσταση μόνιμης Πολεμικής Διαθεσιμότητας προ της εγγραφής τους
            στο ταμείο οι οποίοι ασφαλίζονται αποκλειστικά και μόνο στον κλάδο
            εφάπαξ για όσο διάστημα βρίσκονται σε κατάσταση πολεμικής
            διαθεσιμότητας.
          </p>
        </div>
        <div class="p-4 rounded-lg shadow-md border border-blue-400">
          <p className="text-left text-1xl    ">
            <span className="text-gray-700 underline">Γ)</span> Για την υπαγωγή
            των αιτούντων στην ασφάλιση του Ταμείου αποφασίζει το ΔΣ και
            καθορίζεται δια αυτής και η ημερομηνία έναρξης της εγκρινόμενης
            ασφάλισης η οποία συμπίπτει με την ημερομηνία της έναρξης καταβολής
            εισφορών στο Ταμείο.
          </p>
        </div>
        <div class="p-4 rounded-lg shadow-md border border-blue-400">
          <p class="text-left text-1xl  ">
            <h1 class="underline">
              Δ) Το υποψήφιο μέλος υποβάλλει για την εγγραφή του στο Ταμείο{" "}
              <span class="text-blue-500 hover:text-blue-900">
                <a
                  href="https://www.teaapl.gr/images/pdf/aitisi_eggrafis_melous_apografiko_deltio.pdf"
                  target="_blank"
                >
                  σχετική αίτηση
                </a>
              </span>{" "}
              υπογεγραμμένη:
            </h1>
            <ul class="list-disc pl-6 mt-3 space-y-2">
              <li>
                μέσω της{" "}
                <span class="text-blue-500 hover:text-blue-900 underline">
                  <a
                    href="https://www.teaapl.gr/images/pdf/aitisi_eggrafis_melous_apografiko_deltio.pdf"
                    target="_blank"
                  >
                    ηλεκτρονικής φόρμας εγγραφής
                  </a>
                </span>
              </li>
              <li>
                μέσω του τοπικού αντιπροσώπου{" "}
                <span class="text-blue-500 hover:text-blue-900 underline">
                  <a href="/Antiprosopoi"> (πίνακας αντιπροσώπων)</a>
                </span>
              </li>
              <li>με fax στο 210-5248397,</li>
              <li>
                με e-mail στο{" "}
                <span class="text-blue-500 hover:text-blue-900 underline">
                  <a href="mailto:info@teaapl.gr">info@teaapl.gr</a>
                </span>
              </li>
              <li>αυτοπροσώπως στα γραφεία του ταμείου.</li>
              <li>
                Η υποβολή της αίτησης συνεπάγεται ανεπιφύλακτα την αποδοχή του
                παρόντος καταστατικού από τον αιτούντα.
              </li>
            </ul>
          </p>
        </div>
        <div class="p-4 col-span-2 rounded-lg shadow-md border border-blue-400 mb-5">
          <p className="text-left text-1xl ">
            <h1 className="underline text-gray-700">
              Ε) Λοιπά έντυπα αιτήσεων:
            </h1>
            {eggrafi.map((item) => (
            <ul className="list-disc pl-6 mt-3 space-y-2">
             
                  
        
              <li>
                <a
                  className=" underline text-blue-600 hover:text-blue-900"
                  href={item.attributes.URL1}
                  target="_blank"
                >
                  <i class="fa-solid fa-link "></i>Αίτηση αλλαγής δικαιούχων
                  <img src={PDF} className="w-8 h-8 inline " />
                </a>
                <span className="text-red-600 underline">
                  -Ηλεκτρονική Υποβολή
                </span>
              </li>
              <li>
                <a
                  className=" underline text-blue-600 hover:text-blue-900"
                  href={item.attributes.URL2}
                  target="_blank"
                >
                  <i class="fa-solid fa-link"></i>Αίτηση επανεγγραφής μέλους που
                  έχει διαγραφεί{" "}
                  <img src={PDF} className="w-8 h-8 inline"></img>
                </a>
                <span className="text-red-600 underline">
                  -Ηλεκτρονική Υποβολή
                </span>
              </li>
              <li>
                <a
                  className=" underline text-blue-600 hover:text-blue-900"
                  href={item.attributes.URL3}
                  target="_blank"
                >
                  <i class="fa-solid fa-link"></i>Απογραφικό δελτίο -
                  επικαιροποίηση στοιχείων{" "}
                  <img src={PDF} className="w-8 h-8 inline"></img>
                </a>
                <span className="text-red-600 underline">
                  -Ηλεκτρονική Υποβολή
                </span>
              </li>
              <li>
                <a
                  className=" underline text-blue-600 hover:text-blue-900"
                  href={item.attributes.URL4}
                  target="_blank"
                >
                  <i class="fa-solid fa-link"></i>Αίτηση ενημέρωσης μέλους{" "}
                  <img src={PDF} className="w-8 h-8 inline"></img>
                </a>
                <span className="text-red-600 underline">
                  -Ηλεκτρονική Υποβολή
                </span>
              </li>
              
            </ul>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eggrafh;
