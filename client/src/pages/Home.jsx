import React from "react";
import BannerImage from "../assets/Banner.png";
import TransitionButton from "../components/UI/Buttons/TransitionButton";

// Import Image
import FreeShipping from "../assets/Icons/free-shipping.png";
import CustomerSupport from "../assets/Icons/customer-support.png";
import EasyReturn from "../assets/Icons/easy-return.png";
import SecurePayment from "../assets/Icons/secure-payment.png";
import ProductDemoImg from "../assets/p_img2.png";

const Home = () => {
  return (
    <div className="w-full">
      {/* Banner Cont */}
      <div className="bannerCont w-full h-dvh text-9xl text-primary font-bold flex items-center justify-center pt-[6.6rem] px-[6%]">
        {/* Banner Side 01 */}
        <section className="w-[55%] h-full pl-[3%]">
          <div className="mt-[16rem] flex flex-col items-start justify-start">
            <p className="text-[2.1rem] font-semibold text-dark font- flex items-center mb-[2rem]">
              OUR BEST <span className="text-primary-01"> SELLERS </span>
            </p>

            <h1 className="text-[4.5rem] font-semibold tracking-wider text-darker font-federant mb-[0.4rem]">
              Latest Arrivals
            </h1>

            <h5 className="text-[2rem] font-medium font-bricolage text-dark tracking-wide mb-[3.5rem]">
              Discover Trends That Define Your Style
            </h5>

            <TransitionButton
              text="SHOP NOW"
              bgColor="primary-01"
              textColor="light"
              hoverBgColor="darker"
              hoverTextColor="light"
              px={2}
              py={1.2}
              rounded="full"
              fontSize={1.7}
              fontWeight="semibold"
            />
          </div>
        </section>

        {/* Banner Side 02 */}
        <section className="w-[45%] h-full flex items-center justify-center">
          <div className="w-full bg-amber-30 flex items-center justify-center">
            <img
              src={BannerImage}
              alt="banner-image"
              className="w-full object-cover select-none bg-gradient-to-t from-primary-01 to-light rounded-full shadow-xl shadow-secondary-02"
            />
          </div>
        </section>
      </div>

      {/* Latest Collection Cont */}
      <div className="flex flex-col gap-[4rem] px-[6%] ">
        {/* Section Heading */}
        <section className="flex flex-col items-center justify-center gap-[1rem] border-t-[0.1rem] border-secondary-03 pt-[5rem]">
          <h2 className="text-[3.5rem] leading-[3.2rem] font-bold text-darker font-federant  tracking-wide">
            <span className="text-dark">Latest</span> Collections
          </h2>

          <p className="text-[1.9rem] leading-[1.9rem] font-medium text-secondary-01 tracking-wide">
            Explore the latest trends and styles in our new collection.
          </p>
        </section>

        {/* Section Items */}
        <section className="pb-[5rem] px-[2%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1.5rem] ">
            {/* Collection Item Example */}
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg">
                <img
                  src={ProductDemoImg}
                  alt={`Collection Item ${index + 1}`}
                  className="w-full h-[25rem] object-cover rounded-md relative z-[1]"
                />
                <h3 className="mt-[1rem] text-[1.5rem] leading-[2rem] font-medium text-dark mb-[0.5rem] whitespace-nowrap text-ellipsis overflow-hidden ">
                  <abbr
                    title="Boy Round Neck Pure Cotton T-Shirt"
                    className="decoration-none no-underline"
                  >
                    Boy Round Neck Pure Cotton T-Shirt
                  </abbr>
                </h3>
                <p className="text-[1.5rem] leading-[2rem] text-darker font-semibold mb-[0.5rem]">
                  $64
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Top Selling Cont */}
      <div className="flex flex-col gap-[4rem] px-[6%]">
        {/* Section Heading */}
        <section className="flex flex-col items-center justify-center gap-[1rem] border-t-[0.1rem] border-secondary-03 pt-[5rem]">
          <h2 className="text-[3.5rem] leading-[3.2rem] font-bold text-darker font-federant tracking-wide">
            <span className="text-dark">Top</span> Selling
          </h2>

          <p className="text-[1.9rem] leading-[1.9rem] font-medium text-secondary-01 tracking-wide">
            Discover our most popular products loved by customers.
          </p>
        </section>

        {/* Section Items */}
        <section className="pb-[5rem] px-[2%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1.5rem] ">
            {/* Collection Item Example */}
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg">
                <img
                  src={ProductDemoImg}
                  alt={`Collection Item ${index + 1}`}
                  className="w-full h-[25rem] object-cover rounded-md relative z-[1]"
                />
                <h3 className="mt-[1rem] text-[1.5rem] leading-[2rem] font-medium text-dark mb-[0.5rem] whitespace-nowrap text-ellipsis overflow-hidden ">
                  <abbr
                    title="Boy Round Neck Pure Cotton T-Shirt"
                    className="decoration-none no-underline"
                  >
                    Boy Round Neck Pure Cotton T-Shirt
                  </abbr>
                </h3>
                <p className="text-[1.5rem] leading-[2rem] text-darker font-semibold mb-[0.5rem]">
                  $64
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Services & Support Cont */}
      <div className="flex flex-col gap-[6rem] px-[6%] bg-darker">
        {/* Section Heading */}
        <section className="flex flex-col items-center justify-center gap-[1rem] border-t-[0.1rem] border-secondary-03 pt-[7rem]">
          <h2 className="text-[3.5rem] leading-[3.2rem] font-bold text-light font-federant tracking-wide">
            <span className="text-secondary-02">Services</span> & Support
          </h2>

          <p className="text-[1.9rem] leading-[1.9rem] font-medium text-secondary-02 tracking-wide">
            Experience exceptional service and support with every purchase.
          </p>
        </section>

        {/* Section Cards */}
        <section className="pb-[7rem] px-[2%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-[1.5rem] ">
            {[
              {
                image: FreeShipping,
                title: "Free Shipping",
                description: "On all orders over $50",
              },
              {
                image: CustomerSupport,
                title: "24/7 Support",
                description: "We're here to help, anytime",
              },
              {
                image: EasyReturn,
                title: "Easy Returns",
                description: "30-day return policy",
              },
              {
                image: SecurePayment,
                title: "Secure Payment",
                description: "Your information is safe with us",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center max-w-[25rem] px-[1rem]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[7rem] mb-[1.5rem]"
                />
                <h3 className="text-[2rem] leading-[2.2rem] font-bold text-light mb-[0.5rem]">
                  {item.title}
                </h3>
                <p className="text-[1.6rem] leading-[1.8rem] text-secondary-03 font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Subscribe Now Cont */}
      <div className="px-[6%]">
        {/* Section Heading */}
        <section className="flex flex-col items-center justify-center gap-[1rem] border-t-[0.1rem] border-secondary-03 pt-[7rem] pb-[6rem]">
          <h2 className="text-[3.5rem] leading-[3.2rem] font-bold text-darker font-federant tracking-wide">
            <span className="text-dark">Subscribe</span> Now
          </h2>

          <p className="text-[1.9rem] leading-[1.9rem] font-medium text-secondary-01 tracking-wide">
            Stay updated with the latest trends and exclusive offers.
          </p>

          <div className="w-full max-w-[70rem] mt-[3rem] border-[0.2rem] border-secondary-02 py-[0.5rem] px-[0.5rem] rounded-md flex items-center gap-[1rem]">
            <input
              type="text"
              className="w-full text-[1.8rem] leading-[1.8rem] focus:outline-none px-[0.5rem]"
            />

            <button className="bg-darker text-light px-[4rem] py-[0.8rem] rounded-md text-[1.6rem] uppercase font-semibold cursor-pointer">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
