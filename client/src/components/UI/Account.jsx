import { CalendarFold, Mail, MapPinCheck, Phone, Plus } from "lucide-react";
import TransBtnBlack from "./Buttons/TransBtnBlack";

const Account = () => {
  return (
    <>
      {/* Account Details */}
      <div className="w-full flex items-start justify-between mt-[1rem]">
        {/* Primary Details */}
        <div className="flex flex-col gap-[1rem]">
          <p className="text-[2.3rem] leading-[2.6rem] text-darker font-medium">
            Muhammad Nabeel
          </p>

          <div className="flex items-center gap-[1rem]">
            <Mail size={18} className="text-dark" />
            <p className="text-[1.7rem] leading-[1.8rem] text-dark font-normal">
              nabeel266@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-[1rem]">
            <Phone size={18} className="text-dark" />
            <p className="text-[1.7rem] leading-[1.8rem] text-dark font-normal">
              03342805696
            </p>
          </div>

          <div className="flex items-center gap-[1rem]">
            <CalendarFold size={18} className="text-dark" />
            <p className="text-[1.7rem] leading-[1.8rem] text-dark font-normal">
              Jun 26, 2000
            </p>
          </div>
        </div>

        <div className="flex items-center gap-[1rem]">
          <TransBtnBlack
            text="Edit &nbsp;Profile"
            px={1.5}
            py={0.8}
            rounded={0.4}
            fontSize={1.5}
            fontWeight={500}
          />

          <TransBtnBlack
            text="Change &nbsp;Password"
            px={1.5}
            py={0.8}
            rounded={0.4}
            fontSize={1.5}
            fontWeight={500}
          />
        </div>
      </div>

      {/* Addresses */}
      <div className="w-full mt-[4rem] px-[1.5rem] border-[0.1rem] border-secondary-02 rounded-2xl">
        <div className="w-full flex items-center justify-between py-[1rem] border-b-[0.1rem] border-secondary-02">
          <h4 className="text-[2rem] leading-[2.6rem] text-darker font-medium font-righteous">
            Saved Addresses
          </h4>

          <button className="flex items-center gap-[0.5rem] px-[1rem] py-[0.5rem] text-darker bg-light hover:bg-darker hover:text-light border-[0.2rem] border-darker transition-all duration-200 rounded-lg cursor-pointer">
            <Plus size={18} />
            <span className="text-[1.5rem] leading-[1.6rem] font-medium whitespace-nowrap">
              Add Address
            </span>
          </button>
        </div>

        <div className="pt-[1rem] pb-[1.5rem]">
          <p className="w-fit text-[1.55rem] text-darker font-medium bg-primary-01/50 px-[1rem] py-[0.2rem] rounded-md">
            Easily access and update your saved delivery addresses.
          </p>

          <div className="flex items-start gap-[0.8rem] mt-[2rem]">
            <MapPinCheck size={20} className="text-darker" />
            <div className="flex flex-col gap-[0.5rem]">
              <p className="text-[1.6rem] leading-[1.8rem] text-darker font-medium">
                Flat no F-37, Minhas Plaza, Block G, Main Hyderi Market Road,
                North Nazimabad
              </p>
              <p className="text-[1.6rem] leading-[1.8rem] text-darker font-medium">
                Karachi, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe */}
      <div className="w-full mt-[5rem]">
        <div className="w-full flex items-center justify-between">
          <h4 className="text-[2.2rem] leading-[2.6rem] text-darker font-medium font-righteous">
            Subscribe Status
          </h4>

          <TransBtnBlack
            text="Subscribe"
            px={1.5}
            py={0.8}
            rounded={0.4}
            fontSize={1.6}
            fontWeight={500}
          />
        </div>

        {true ? (
          <p className="text-[1.6rem] text-darker font-medium mt-[1.5rem]">
            You haven’t subscribed to our newsletter yet. That means you might
            miss out on our latest arrivals, exclusive offers, and special
            updates. Stay connected and never miss a trend — subscribe now!
          </p>
        ) : (
          <p className="text-[1.6rem] text-darker font-medium mt-[1.5rem]">
            You’re subscribed to our newsletter! 🎉 Get ready to be the first to
            know about our latest arrivals, exclusive deals, and exciting
            offers. Thanks for staying connected with us.
          </p>
        )}
      </div>
    </>
  );
};

export default Account;
