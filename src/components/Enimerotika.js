import PDF from "../images/icon.png";

const Enimerotika = () => {
  return (
    <div>
      <div class="flex flex-col gap-4 h-screen items-center justify-center">
        <h1 className="text-3xl text-center font-bold text-custom-new-blue mb-10 uppercase">
          ΕΝΗΜΕΡΩΤΙΚΑ ΦΥΛΛΑΔΙΑ
        </h1>

        <a
          class="rounded-sm w-1/2 grid grid-cols-12 bg-white border border-blue-400 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
          href="https://www.teaapl.gr/images/pdf/Fylladio-TEAAPL.pdf"
        >
          <div class="col-span-12 md:col-span-1">
            <a
              target="_blank"
              href="https://icons8.com/icon/l0vjMqIboTRs/pdf"
            ></a>
            <img src={PDF} className="w-8 h-8"></img>
            <a target="_blank" href="https://icons8.com"></a>
          </div>

          <div class="col-span-11 xl:-ml-5">
            <p class="text-blue-600 font-semibold"> Ενημερωτικό φυλλάδιο </p>
          </div>
        </a>

        <a
          class="rounded-sm w-1/2 grid grid-cols-12 bg-white border border-blue-400 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
          href="https:https://www.teaapl.gr/images/pdf/%CE%A4.%CE%95.%CE%91.%CE%91.%CE%A0.%CE%9B._%CE%A4%CE%BF_%CE%A4%CE%B1%CE%BC%CE%AD%CE%B9%CE%BF_%CE%BC%CE%B5_%CE%BC%CE%B9%CE%B1_%CE%BC%CE%B1%CF%84%CE%B9%CE%AC.pdf"
        >
          <div class="col-span-12 md:col-span-1">
            <a
              target="_blank"
              href="https://icons8.com/icon/l0vjMqIboTRs/pdf"
            ></a>
            <img src={PDF} className="w-8 h-8"></img>
            <a target="_blank" href="https://icons8.com"></a>
          </div>

          <div class="col-span-11 xl:-ml-5">
            <p class="text-blue-600 font-semibold">
              {" "}
              Τ.Ε.Α.Α.Π.Λ. Το Ταμέιο με μια ματιά{" "}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Enimerotika;
