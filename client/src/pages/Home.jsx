import React from "react";
import BannerFamily from "../assets/Banner.png";

const Home = () => {
  return (
    <div className="w-full h-dvh">
      <h1 className="home w-full h-full text-9xl text-primary font-bold">
        <div className="left"></div>
        {/* <div className="right w-[40rem] aspect-square">
          <img
            src={BannerFamily}
            alt="BannerFamily"
            className="w-full object-cover"
          />
        </div> */}
      </h1>
    </div>
  );
};

export default Home;
