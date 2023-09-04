import React from "react";
import { useState, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import colorfulBusiness from "../images/colorful-business.jpg";
import saveMoney from "../images/concept-save-money.jpg";
import saveFromPhone from "../images/saving_from_phone.jpg";

function Arrow(props) {
  const { onClick, type, isHovering } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        [type]: "2%",
        width: "30px", //  for mobile
        height: "30px", //  for mobile
        backgroundColor: "black",
        color: "white",
        display: isHovering ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: 2,
      }}
    >
      {type === "left" ? "<" : ">"}
    </div>
  );
}

function FullScreenSlider() {
  const [isHovering, setIsHovering] = useState(false);
  const slider = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div
      className="h-screen w-full relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Slider ref={slider} {...settings}>
        <div className="h-screen relative">
          <motion.img
            src={colorfulBusiness}
            alt="Image 1"
            className="object-cover h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 opacity-50"></div>
          <motion.h1
            className="absolute inset-0 flex items-center justify-center text-center text-xl md:text-4xl text-white font-bold max-w-3xl mx-auto"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.5 }}
          >
            Μετατροπή των αριθμών σε γνώση: Η αποταμίευσή σας οπτικοποιημένη.
          </motion.h1>
        </div>

        <div className="h-screen relative">
          <motion.img
            src={saveMoney}
            alt="Image 2"
            className="object-cover h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-50"></div>
          <motion.h1
            className="absolute inset-0 flex items-center justify-center text-center text-xl md:text-4xl text-white font-bold max-w-3xl mx-auto"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.5 }}
          >
            Επενδύστε στο μέλλον σας: Ξεκινήστε την αποταμίευση τώρα!
          </motion.h1>
        </div>

        <div className="h-screen relative">
          <motion.img
            src={saveFromPhone}
            alt="Image 3"
            className="object-cover h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 opacity-50"></div>
          <motion.h1
            className="absolute inset-0 flex items-center justify-center text-center text-xl md:text-4xl text-white font-bold max-w-3xl mx-auto"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.5 }}
          >
            Smart Phone, εξυπνότερη αποταμίευση: Το τηλέφωνο σας γίνεται ο
            κουμπαράς σας.
          </motion.h1>
        </div>
      </Slider>
      <Arrow
        type="left"
        isHovering={isHovering}
        onClick={() => slider.current.slickPrev()}
      />
      <Arrow
        type="right"
        isHovering={isHovering}
        onClick={() => slider.current.slickNext()}
      />
    </div>
  );
}

export default FullScreenSlider;
