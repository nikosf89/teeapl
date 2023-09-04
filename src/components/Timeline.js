import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const TimelineEvent = ({ year, title }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-start sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-custom-new-blue"
    >
      <div className="mb-2 text-sm sm:text-base text-custom-new-blue relative">
        <span className="absolute -left-5 top-2 w-2 h-2 rounded-full bg-custom-new-blue sm:hidden"></span>
        {year}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-black tracking-wide mb-6">
        {title}
      </h3>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section className="bg-white dark:text-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl text-custom-new-blue font-semibold">
                ΣΗΜΕΙΑ ΟΡΟΣΗΜΟ
              </h3>
            </div>
            <div className="col-span-12 space-y-8 relative px-4 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              {[
                { year: "1994", title: "Ίδρυση ΛΑΜΔΕΑ" },
                { year: "2009", title: "Ίδρυση ΤΕΑΕΤΔΕΑ" },
                {
                  year: "2014",
                  title: "Έναρξη καταβολής εισφορών από Πυροσβέστες",
                },
                {
                  year: "2016",
                  title: "Σύσταση Αμοιβαίου Κεφαλαίου κλάδου Εφάπαξ",
                },
                {
                  year: "2019",
                  title: "Έναρξη καταβολής εισφορών από Λιμενικούς",
                },
              ].map((event) => (
                <TimelineEvent
                  key={event.year}
                  year={event.year}
                  title={event.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
