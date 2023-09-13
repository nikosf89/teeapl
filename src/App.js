import React from "react";
import Navbar from "./pages/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BudgetsSection from "./components/budget";
import BalanceSheetTable from "./components/isologismoi";
import Faq from "./components/FAQs";
import Antiprosopoi from "./components/Antiprosopoi";
import Skopos from "./components/skopos";
import Tameio from "./components/istoriko";
import Dioikisoi from "./components/Dioikisi";
import Katastatiko from "./components/katastatiko";
import Nomothesia from "./components/Nomothesia";
import Enimerotika from "./components/Enimerotika";
import Diagrafh from "./components/Diagrafi";
import Pleonekthmata from "./components/pleonektimata";
import Eggrafh from "./components/eggrafi";
import Eisfores from "./components/Eisfores";
import Paroxes from "./components/paroxes";
import Anakoinwseis from "./components/anakoinoseis";
import Genikes from "./components/Genikes";
import Oikonomika from "./components/ependiseis";
import Ependytiki from "./components/ependitiki";
import Analogistikes from "./components/analogistikes";
import Ergo from "./components/ergo";
import Entypa from "./components/Entipa";
import Anakoinosh from "./components/anakoinosh";

function App() {
  return (
    <Router>
      <div className="flex flex-col  ">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/teaapl/budget" element={<BudgetsSection />} />
            <Route path="/teaapl" element={<HomePage />} />
            <Route path="/teaapl/isologismoi" element={<BalanceSheetTable />} />
            <Route path="/teaapl/FAQs" element={<Faq />} />
            <Route path="/teaapl/Antiprosopoi" element={<Antiprosopoi />} />
            <Route path="/teaapl/skopos" element={<Skopos />} />
            <Route path="/teaapl/istoriko" element={<Tameio />} />
            <Route path="/teaapl/Dioikisi" element={<Dioikisoi />} />
            <Route path="/teaapl/katastatiko" element={<Katastatiko />} />
            <Route path="/teaapl/Nomothesia" element={<Nomothesia />} />
            <Route path="/teaapl/Enimerotika" element={<Enimerotika />} />
            <Route path="/teaapl/Diagrafi" element={<Diagrafh />} />
            <Route path="/teaapl/pleonektimata" element={<Pleonekthmata />} />
            <Route path="/teaapl/eggrafi" element={<Eggrafh />} />
            <Route path="/teaapl/Eisfores" element={<Eisfores />} />
            <Route path="/teaapl/paroxes" element={<Paroxes />} />
            <Route path="/teaapl/anakoinoseis/:page" element={<Anakoinwseis />} />
            <Route path="/teaapl/Genikes" element={<Genikes />} />
            <Route path="/teaapl/ependiseis" element={<Oikonomika />} />
            <Route path="/teaapl/ependitiki" element={<Ependytiki />} />
            <Route path="/teaapl/analogistikes" element={<Analogistikes />} />
            <Route path="/teaapl/ergo" element={<Ergo />} />
            <Route path="/teaapl/Entipa" element={<Entypa />} />
            <Route path="/announcement/:announcementId" element={<Anakoinosh />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;



