import PDF from "../images/icon.png";

const Katastatiko = () => {
  return (
    <div>
      <div class=" flex flex-col gap-4 h-screen items-center justify-center">
        <h1 className="text-3xl text-center font-bold text-custom-new-blue mb-10 uppercase">
          ΚΑΤΑΣΤΑΤΙΚΟ
        </h1>

        <a
          class="rounded-sm w-1/2 grid grid-cols-12 bg-white border border-blue-400 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
          href="https://www.teaapl.gr/images/pdf/%CE%A6%CE%95%CE%9A_%CE%99%CE%94%CE%A1%CE%A5%CE%A3%CE%97%CE%A3.PDF"
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
              ΦΕΚ ΙΔΡΥΣΗΣ (04/09/2009) (δεν ισχύει){" "}
            </p>
          </div>
        </a>

        <a
          class="rounded-sm w-1/2 grid grid-cols-12 bg-white border border-blue-400 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
          href="https://www.teaapl.gr/images/pdf/%CE%A6%CE%95%CE%9A_%CE%A4%CE%A1%CE%9F%CE%A0%CE%9F%CE%A0%CE%9F%CE%99%CE%97%CE%A3%CE%97%CE%A3.PDF"
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
              ΦΕΚ ΤΡΟΠΟΠΟΙΗΣΗΣ (04/04/2013) (δεν ισχύει)
            </p>
          </div>
        </a>

        <a
          class="rounded-sm w-1/2 grid grid-cols-12 bg-white border border-blue-400 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
          href="https://www.teaapl.gr/images/pdf/FEK_B_5061_17_11_2020.pdf"
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
              ΦΕΚ ΤΡΟΠΟΠΟΙΗΣΗΣ (17/11/2020){" "}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Katastatiko;
