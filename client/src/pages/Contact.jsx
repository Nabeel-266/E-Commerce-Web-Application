import React from "react";

// Import Icons
import { Mail, MapPin, Phone } from "lucide-react";

// Import Images
import ContactImage from "../assets/Contact_Banner.jpg";

const Contact = () => {
  return (
    <div className="w-full min-h-dvh pt-[6.6rem]">
      {/* Upper Cont */}
      <div className="w-full h-[calc(100dvh-6.6rem)] py-[1.5rem] flex items-center justify-center">
        {/* Image Cont */}
        <div
          className="w-[52%] h-full relative z-[1] rounded-r-full shadow-lg shadow-secondary-02 overflow-hidden bg-cover bg-no-repeat bg-right before:content-[''] before:absolute before:w-full before:h-full before:z-[3] before:bg-gradient-to-t before:from-darker/30 before:to-transparent "
          style={{
            backgroundImage: `url(${ContactImage})`,
          }}
        ></div>

        {/* Cont Form Cont */}
        <div className="w-[48%] h-full pl-[3%] pr-[6%] flex flex-col">
          <h2 className="text-[2.8rem] text-darker font-bold font-federant tracking-wide">
            Contact Our Team
          </h2>

          <p className="text-[1.8rem] text-dark font-medium font-bricolage">
            Just reach out how we can help you.
          </p>

          <form
            action="#"
            className="w-full flex flex-col gap-[1.4rem] py-[1rem] tabletLg:pr-[8%] mt-[1.4rem]"
          >
            {/* Fullname Input Cont */}
            <div className="w-full space-y-[0.8rem]">
              <div className="input w-full">
                <label
                  htmlFor="fullname"
                  className="text-[1.6rem] leading-[2rem] font-semibold text-darker pl-[1.5rem] font-bricolage"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Enter your full name"
                  autoComplete="off"
                  className={`w-full font-bricolage outline-none text-dark font-medium px-[1.5rem] py-[1rem] text-[1.6rem] leading-[1.6rem] rounded-full border-[0.2rem] border-secondary-02 focus:border-darker placeholder:text-secondary-01 mt-[0.5rem]`}
                />
              </div>

              {/* {error && error[0] === "name" && <FieldError error={error[1]} />} */}
            </div>

            {/* Email Input Cont */}
            <div className="w-full space-y-[0.8rem]">
              <div className="input w-full">
                <label
                  htmlFor="email"
                  className="text-[1.6rem] leading-[2rem] font-semibold text-darker pl-[1.5rem] font-bricolage"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  autoComplete="off"
                  className={`w-full font-bricolage outline-none text-dark font-medium px-[1.5rem] py-[1rem] text-[1.6rem] leading-[1.6rem] rounded-full border-[0.2rem] border-secondary-02 focus:border-darker placeholder:text-secondary-01 mt-[0.5rem]`}
                />
              </div>

              {/* {error && error[0] === "name" && <FieldError error={error[1]} />} */}
            </div>

            {/* Contact Number Cont */}
            <div className="w-full space-y-[0.8rem]">
              <div className="input w-full">
                <label
                  htmlFor="phoneNumber"
                  className="text-[1.6rem] leading-[2rem] font-semibold text-darker pl-[1.5rem] font-bricolage"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Enter your contact number"
                  autoComplete="off"
                  className={`w-full font-bricolage outline-none text-dark font-medium px-[1.5rem] py-[1rem] text-[1.6rem] leading-[1.6rem] rounded-full input-appearance border-[0.2rem] border-secondary-02 focus:border-darker placeholder:text-secondary-01 mt-[0.5rem]`}
                />
              </div>

              {/* {error && error[0] === "name" && <FieldError error={error[1]} />} */}
            </div>

            {/* Message Cont */}
            <div className="w-full space-y-[0.8rem]">
              <div className="input w-full">
                <label
                  htmlFor="message"
                  className="text-[1.6rem] leading-[2rem] font-semibold text-darker pl-[1.5rem] font-bricolage"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  placeholder="How can we help you?"
                  className={`w-full min-h-[9rem] max-h-[9rem] text-dark font-medium px-[1.4rem] py-[1rem] text-[1.6rem] leading-[2.2rem] rounded-3xl border-[0.2rem] border-secondary-02 focus:border-darker placeholder:text-secondary-01 mt-[0.5rem] `}
                />
              </div>

              {/* {error && error[0] === "name" && <FieldError error={error[1]} />} */}
            </div>

            <button
              type="button"
              className={`w-full flex items-center justify-center gap-[1rem] px-[3rem] py-[1.2rem] mt-[0.5rem] text-[1.8rem] leading-[1.8rem] tracking-wider font-bold rounded-full transition-all ${
                true
                  ? "text-light bg-darker active:scale-[0.98] active:bg-dark cursor-pointer"
                  : "text-dark bg-secondary-04 opacity-90 cursor-not-allowed"
              }`}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Lower Cont */}
      <div className="w-full py-[6rem] px-[6%] flex flex-col items-start">
        <h6 className="w-fit text-[1.5rem] leading-[1.5rem] text-darker font-medium px-[1rem] py-[0.5rem] border-[0.2rem] border-secondary-03 rounded-full mb-[0.5rem]">
          Reach Out To Us
        </h6>

        <h2 className="text-[2.5rem] tabletSm:text-[3rem] text-darker font-bold font-bricolage">
          We'd Love to Hear From You
        </h2>

        <div className="w-full grid grid-cols-2 gap-[2rem] mt-[2rem]">
          {/* Get in Touch */}
          <div className="py-[2rem] flex flex-col items-start gap-[3.2rem]">
            {/* Visit Us */}
            <div className="flex items-start gap-[1.5rem]">
              <div className="p-[0.4rem] border-[0.2rem] border-secondary-03 rounded-xl">
                <MapPin color="#303030" size={20} />
              </div>

              <div className="flex flex-col items-start font-medium">
                <h6 className="text-[1.55rem] leading-[2rem] font-semibold text-darker font-bricolage">
                  Visit Our Outlet
                </h6>

                <p className="text-[1.3rem] leading-[1.6rem] font-light text-dark font-bricolage">
                  Come see us at our outlet
                </p>

                <div className="text-[1.4rem] leading-[1.6rem] text-dark font-medium space-y-[0.4rem] mt-[1rem]">
                  <p>Tariq Road, Karachi</p>
                  <p>Gulberg III, Lahore</p>
                  <p>Blue Area, Islamabad</p>
                </div>
              </div>
            </div>

            {/* Email Support */}
            <div className="flex items-start gap-[1.5rem]">
              <div className="p-[0.4rem] border-[0.2rem] border-secondary-03 rounded-xl">
                <Mail color="#303030" size={20} />
              </div>

              <div className="flex flex-col items-start font-medium">
                <h6 className="text-[1.55rem] leading-[2rem] font-semibold text-darker font-bricolage">
                  Email Support
                </h6>

                <p className="text-[1.3rem] leading-[1.6rem] font-light text-dark font-bricolage">
                  Our team is here to help you
                </p>

                <p className="text-[1.4rem] leading-[1.6rem] text-darker font-medium mt-[1rem]">
                  support@trendify.com
                </p>
              </div>
            </div>

            {/* Call us Directly */}
            <div className="flex items-start gap-[1.5rem]">
              <div className="p-[0.4rem] border-[0.2rem] border-secondary-03 rounded-xl">
                <Phone color="#303030" size={20} />
              </div>

              <div className="flex flex-col items-start font-medium">
                <h6 className="text-[1.55rem] leading-[2rem] font-semibold text-darker font-bricolage">
                  Call us Directly
                </h6>

                <p className="text-[1.3rem] leading-[1.6rem] font-light text-dark font-bricolage">
                  Monday to Friday from 9:00 AM to 6:00 PM
                </p>

                <p className="text-[1.3rem] leading-[1.6rem] text-darker font-medium mt-[1.4rem]">
                  UAN 111-123-456
                </p>

                <p className="text-[1.3rem] leading-[1.6rem] text-darker font-medium mt-[0.5rem]">
                  +92-300-1234567
                </p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="p-[2rem] flex flex-col items-start bg-secondary-04 rounded-2xl">
            <h3 className="text-[2.2rem] text-darker font-bold font-bricolage mb-[2rem]">
              Working Hours
            </h3>

            <p className="text-[1.4rem] leading-[2rem] text-dark font-medium font-bricolage">
              Our team is here to assist you during our working hours. Feel free
              to reach out to us via phone or email, and we'll get back to you
              as soon as possible.
            </p>

            <div className="w-full mt-[2rem] space-y-[1.5rem]">
              {[
                { day: "Monday", hours: "9:00 AM - 6:00 PM" },
                { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
                { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
                { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
                { day: "Friday", hours: "9:00 AM - 6:00 PM" },
                { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                { day: "Sunday", hours: "Closed" },
              ].map(({ day, hours }, index) => (
                <div
                  key={index}
                  className="w-full flex items-center justify-between"
                >
                  <p className="text-[1.4rem] leading-[1.6rem] text-dark font-medium font-bricolage">
                    {day}
                  </p>
                  <p className="text-[1.4rem] leading-[1.6rem] text-darker font-semibold font-bricolage">
                    {hours}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-[2rem] mt-[6rem]">
          <div className="p-[2rem] bg-secondary-04 rounded-xl space-y-[0.6rem]">
            <h5 className="text-[1.8rem] leading-[2.4rem] font-semibold text-darker font-bricolage">
              Customer Support
            </h5>
            <p className="text-[1.3rem] leading-[1.8rem] font-medium text-darker font-bricolage">
              Our customer support team is available around the clock to address
              any concerns, queries, or complaints you may have.
            </p>
          </div>

          <div className="p-[2rem] bg-secondary-04 rounded-xl space-y-[0.6rem]">
            <h5 className="text-[1.8rem] leading-[2.4rem] font-semibold text-darker font-bricolage">
              Feedback & Suggestions
            </h5>
            <p className="text-[1.3rem] leading-[1.8rem] font-medium text-darker font-bricolage">
              We value your feedback and are continously working to improve
              Trendify. Your input is crucial in shaping the future of Trendify.
            </p>
          </div>

          <div className="p-[2rem] bg-secondary-04 rounded-xl space-y-[0.6rem]">
            <h5 className="text-[1.8rem] leading-[2.4rem] font-semibold text-darker font-bricolage">
              Media Inquiries
            </h5>
            <p className="text-[1.3rem] leading-[1.8rem] font-medium text-darker font-bricolage">
              For media related questions or press inquiries, please contact us
              at media@tredify.com or subscribe to our newsletter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
