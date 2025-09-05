import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="w-full px-[6%] bg-gradient-to-b from-light to-secondary-04 border-b-[0.3rem] border-darker border-dotted">
      <div className="w-full h-full grid grid-cols-4 pt-[4rem]">
        <div className="col-span-2 px-[4%]">
          {/* LOGO */}
          <NavLink to="/">
            <h3 className="text-darker text-[3.2rem] leading-[3.2rem] font-righteous font-medium">
              Trend
              <span className="text-primary-01">ify</span>.
            </h3>
          </NavLink>

          <p className="max-w-[40rem] text-[1.6rem] leading-[2.2rem] text-dark font-normal mt-[1.5rem]">
            Your ultimate destination for fashion and lifestyle. Explore trendy
            outfits, timeless accessories, and everyday essentials crafted to
            elevate your style and confidence.
          </p>
        </div>

        <div className="col-span-1">
          <h4 className="text-darker text-[2rem] leading-[2rem] font-federant font-semibold mb-[2rem]">
            Quick Links
          </h4>

          <ul className="flex flex-col gap-[1.2rem]">
            {[
              ["HOME", "/"],
              ["ABOUT US", "/about"],
              ["CONTACT", "/contact"],
              ["YOUR CART", "/contact"],
            ].map(([title, path], index) => (
              <li
                key={index}
                className="text-[1.4rem] leading-[1.4rem] text-dark"
              >
                <NavLink to={path} className="hover:text-primary-01">
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="text-darker text-[2rem] leading-[2rem] font-federant font-semibold mb-[2rem]">
            Get in Touch
          </h4>

          <div>
            <p className="text-[1.5rem] leading-[1.8rem] text-dark mb-[1rem]">
              111-123-456
            </p>

            <p className="text-[1.6rem] leading-[1.6rem] text-darker mb-[1rem]">
              support@trendify.com
            </p>
          </div>
        </div>

        <div className="col-span-4 w-full flex items-center justify-between gap-[0.5rem] mt-[3rem] px-[2%] py-[2.5rem] bordr-t-[0.2rem] border-secondary-04 text-[1.5rem] text-darker">
          <span>
            &copy; Copyright {new Date().getFullYear()} Trendify. All rights
            reserved
          </span>
          <span>Designed & Developed by Muhammad Nabeel</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
