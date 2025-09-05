import React from "react";
import HeroMen from "../assets/Hero-Men.png";
import HeroImageBg from "../assets/Hero-Bg.png";
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
      {/* Hero Cont */}
      <div className="w-full relative h-[calc(100dvh-6.6rem)] mt-[6.6rem] flex justify-start px-[6%]">
        {/* Banner Text */}
        <div className="w-full mt-[9rem] flex flex-col items-start justify-start px-[5rem] py-[5rem]">
          <p className="text-[1.9rem] font-medium font-righteous tracking-wider text-dark flex items-center uppercase">
            Trends That Match Your Vibe
          </p>

          <h1 className="text-[4.6rem] leading-[6rem] font-medium tracking-wider text font-righteous text-transparent bg-clip-text bg-gradient-to-r from-darker to-primary-01">
            Elegance Every Day
          </h1>

          <h5 className="max-w-[50rem] text-[1.75rem] font-normal text-dark tracking-wide mt-[1.5rem] mb-[2.5rem]">
            Step into the season with fresh arrivals designed to keep your look
            effortless, bold, and always on trend
          </h5>

          <TransitionButton
            text="EXPLORE &nbsp;FITS"
            bgColor="primary-01"
            textColor="darker"
            hoverBgColor="darker"
            hoverTextColor="light"
            px={2.5}
            py={1.2}
            rounded={10}
            fontSize={1.8}
            fontWeight="semibold"
          />
        </div>

        {/* Hero Image Right */}
        <div
          className="absolute px-[4rem] top-0 right-0 h-full flex items-center justify-center"
          style={{
            background: `url(${HeroImageBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <img
            src={HeroMen}
            alt="Hero-Men_Image"
            className="h-full object-cover"
          />
        </div>
      </div>

      {/* Latest Collection Cont */}
      <div className="flex flex-col gap-[4rem] px-[6%] ">
        {/* Section Heading */}
        <section className="flex flex-col items-center justify-center gap-[0.2rem] pt-[5rem]">
          <h2 className="text-[3.5rem] font-medium font-righteous tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-darker to-primary-01">
            Latest Collections
          </h2>

          <p className="text-[1.8rem] leading-[1.8rem] font-normal text-dark tracking-wide">
            Explore the latest trends and styles in our new collection.
          </p>
        </section>

        {/* Section Items */}
        <section className="pb-[7rem] px-[2%]">
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
                  PKR 1,499
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Top Selling Cont */}
      <div className="flex flex-col gap-[4rem] px-[6%]">
        {/* Section Heading */}
        <section className="flex flex-col items-center justify-center gap-[0.2rem] border-t-[0.1rem] border-secondary-04 pt-[4rem]">
          <h2 className="text-[3.5rem] font-medium font-righteous tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-darker to-primary-01">
            Top Selling
          </h2>

          <p className="text-[1.8rem] leading-[1.8rem] font-normal text-dark tracking-wide">
            Discover our most popular products loved by customers.
          </p>
        </section>

        {/* Section Items */}
        <section className="pb-[7rem] px-[2%]">
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
      <div className="flex flex-col gap-[6rem] px-[6%] bg-secondary-04">
        {/* Section Heading */}
        <section className="flex flex-col items-center justify-center gap-[0.2rem] border-t-[0.1rem] border-secondary-04 pt-[5rem]">
          <h2 className="text-[3.5rem] font-medium font-righteous tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-darker to-primary-01">
            Services & Support
          </h2>

          <p className="text-[1.9rem] leading-[1.9rem] font-medium text-secondary-01 tracking-wide">
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
                <h3 className="text-[2rem] leading-[2.2rem] font-bold text-darker mb-[0.5rem]">
                  {item.title}
                </h3>
                <p className="text-[1.6rem] leading-[1.8rem] text-dark font-medium">
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
        <section className="flex flex-col items-center justify-center gap-[1rem] border-t-[0.1rem] border-secondary-04 pt-[7rem] pb-[6rem]">
          <h2 className="text-[3.5rem] font-medium font-righteous tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-darker to-primary-01">
            Subscribe Now
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
