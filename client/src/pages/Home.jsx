import React from "react";
import BannerImage from "../assets/Banner.png";

const Home = () => {
  return (
    <div className="w-full h-dvh pt-[6.6rem] px-[4%]">
      {/* BannerCont */}
      <div className="home w-full h-full bg-amber-20 text-9xl text-primary font-bold px-[2%] flex items-center justify-center">
        {/* Banner Side 01 */}
        <div className="w-[55%] h-full flex flex-col items-start justify-center pl-[4%]">
          <p className="text-[2.1rem] font-normal text-dark font-bricolage flex items-center mb-[2rem] border-b-[0.1rem] border-secondary-01">
            OUR BEST <span className="text-primary-01"> SELLERS </span>
          </p>

          <h1 className="text-[4.6rem] font-semibold tracking-wider text-darker font-prata mb-[0.4rem]">
            Latest Arrivals
          </h1>

          <h5 className="text-[2.2rem] font-medium text-dark font-bricolage mb-[3.5rem]">
            Discover Trends That Define Your Style
          </h5>

          <button className="bg-primary-01 text-[1.8rem] leading-[1.8rem] relative z-10 font-bricolage font-semibold text-light px-[1.8rem] py-[1.2rem] rounded-full transition-all overflow-hidden before:content-[''] before:absolute before:-z-[1] before:w-[200%] before:aspect-square before:bg-darker before:rounded-full before:top-[120%] before:-left-[50%] before:transition-all before:duration-300 before:ease-in hover:before:-translate-y-[40%] hover:text-light active:scale-[0.98] cursor-pointer select-none mb-[4rem]">
            SHOP NOW
          </button>
        </div>

        {/* Banner Side 02 */}
        <div className="w-[45%] h-full p-[0%] flex items-center justify-center">
          <div className="w-full bg-amber-30 flex items-center justify-center">
            <img
              src={BannerImage}
              alt="banner-image"
              className="w-full object-cover select-none bg-gradient-to-t from-primary-01 to-light rounded-full shadow-xl shadow-secondary-02"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
