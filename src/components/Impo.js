import React, { useState, useEffect, useRef } from "react";

const Fact = ({ icon, number, title }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const targetNumber = parseFloat(number.replace(/,/g, "").replace("€", ""));
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once the element is in the viewport
        }
      },
      {
        threshold: 0.1, // The observer will trigger when 10% of the target element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let intervalId;

    if (isInView) {
      intervalId = setInterval(() => {
        if (currentNumber < targetNumber) {
          const newNumber = Math.min(
            currentNumber + Math.floor(targetNumber / 100),
            targetNumber
          );
          setCurrentNumber(newNumber);
        } else {
          clearInterval(intervalId);
        }
      }, 30); // speed
    }

    return () => clearInterval(intervalId);
  }, [currentNumber, targetNumber, isInView]);

  // Formatting number
  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: number.includes("€") ? "currency" : "decimal",
    currency: "EUR",
  }).format(currentNumber);

  return (
    <div
      ref={ref}
      className="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-2xl m-4"
    >
      <div className="text-white text-5xl mb-4">{icon}</div>
      <h2 className="text-white text-3xl font-bold mb-2 font-sans text-rendering-optimizeLegibility leading-none tracking-normal">
        {formattedNumber}
      </h2>
      <h3 className="text-white text-opacity-80">{title}</h3>
    </div>
  );
};

const FundFigures = () => (
  <div className=" py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center mb-12">
        <h3 className="text-center sm:text-left pb-0 text-2xl sm:text-3xl leading-tight m-0 mb-4 pt-0 font-semibold text-custom-new-blue">
          ΣΗΜΑΝΤΙΚΑ ΜΕΓΕΘΗ ΤΟΥ ΤΑΜΕΙΟΥ
        </h3>
      </div>

      <div className="flex flex-wrap justify-around">
        <Fact icon="👥" number="6,661" title="ασφαλισμένοι" />
        <Fact
          icon="💶"
          number="26,482,283 €"
          title="σύνολο εφάπαξ ατομικών λογαριασμών"
        />
        <Fact icon="💶" number="987,550 €" title="ποσό παροχών αλληλεγγύης" />
        <Fact icon="💶" number="8,467,993 €" title="ποσό παροχών εφάπαξ" />
      </div>
    </div>
  </div>
);

export default FundFigures;
