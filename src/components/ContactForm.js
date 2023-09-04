import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target["your-name"].value;
    const email = e.target["your-email"].value;
    const subject = e.target["your-subject"].value;
    const message = e.target["your-message"].value;

    const mailtoString = `mailto:info@teaapl.gr?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    window.location = mailtoString;
  };

  return (
    <div
      id="communicationForm"
      className="pt-12 pb-12 animate-fadeIn relative font-poppins text-base leading-[30px] font-medium text-[#051923]"
    >
      <div className="px-5 md:px-20 block">
        <div className="mx-auto max-w-[1300px] clearfix">
          <h2 className="text-2xl sm:text-3xl pt-5 pb-10 font-semibold text-[#0582ca]">
            ΕΠΙΚΟΙΝΩΝΙΑ
          </h2>
          <div className="w-full md:w-1/2 mb-12 float-left relative pr-5 pl-0">
            <div className="mb-6">
              <iframe
                width="100%"
                height="200"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3140.328532647329!2d23.7270193!3d37.9858607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd2fd05feb4d%3A0x4c5c11c46295dfaa!2sVeranzerou%2030%2C%20Athina%20104%2032%2C%20Greece!5e0!3m2!1sen!2sus!4v1628024665966!5m2!1sen!2sus"
              ></iframe>
            </div>

            <address className="text-lg text-[#051923]">
              <strong>ΔΙΕΥΘΥΝΣΗ:</strong>{" "}
              <a href="https://www.google.com/maps/dir//Veranzerou+30+Athina+104+32/@37.9858607,23.7270193,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x14a1bd2fd05feb4d:0x4c5c11c46295dfaa">
                Βερανζέρου 30, Αθήνα, 10432
              </a>{" "}
              <br />
              <strong>E-MAIL:</strong> info@teaapl.gr <br />
              <strong>ΤΗΛΕΦΩΝΟ:</strong>{" "}
              <a href="tel:210-5202638">210-5202638</a> <br />
            </address>
          </div>
          <div className="text-lg sm:text-xl leading-[30px] sm:leading-[35px] mb-6 w-full md:w-1/2 float-left ml-[-4] md:ml-0 md:pl-5">
            <form
              id="contact"
              onSubmit={handleSubmit}
              className="p-10 md:p-16 bg-gradient-to-r from-[#024a80] to-[#013b5e] animate-gradient rounded-lg shadow-lg"
            >
              <div className="mb-5">
                <label htmlFor="name" className="sr-only">
                  Όνομα
                </label>
                <input
                  id="name"
                  type="text"
                  name="your-name"
                  placeholder="Όνομα"
                  required
                  className="w-full p-3 rounded-md bg-opacity-20 bg-white hover:border-[#0582ca] transition-all duration-300 text-white"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="your-email"
                  placeholder="Email"
                  required
                  className="w-full p-3 rounded-md bg-opacity-20 bg-white hover:border-[#0582ca] transition-all duration-300 text-white"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="subject" className="sr-only">
                  Θέμα
                </label>
                <input
                  id="subject"
                  type="text"
                  name="your-subject"
                  placeholder="Θέμα"
                  required
                  className="w-full p-3 rounded-md bg-opacity-20 bg-white hover:border-[#0582ca] transition-all duration-300 text-white"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="sr-only">
                  Μήνυμα
                </label>
                <textarea
                  id="message"
                  name="your-message"
                  placeholder="Μήνυμα"
                  className="w-full p-3 rounded-md bg-opacity-20 bg-white h-40 hover:border-[#0582ca] transition-all duration-300 text-white"
                ></textarea>
              </div>
              <div className="mb-0">
                <button
                  type="submit"
                  className="bg-[#0582ca] hover:bg-[#036aa1] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0582ca] text-white py-3 px-6 rounded-md cursor-pointer transition-all duration-300"
                >
                  ΑΠΟΣΤΟΛΗ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
