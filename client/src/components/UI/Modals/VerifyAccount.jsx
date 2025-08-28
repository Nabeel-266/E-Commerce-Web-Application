import { MoveLeft, RotateCw, X } from "lucide-react";

const VerifyAccount = ({ verifyAccountModal, setVerifyAccountModal }) => {
  return (
    <div
      className={`w-full h-dvh fixed z-[999] top-0 left-0 flex items-center justify-center bg-black/30 backdrop-blur-md transition-all duration-500 ease-in-out ${
        verifyAccountModal
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        className="absolute top-0 left-0 text-[1.8rem] text-light bg-darker font-semibold font-bricolage px-[1rem] py-[0.5rem] rounded-lg cursor-pointer active:scale-[0.99] transition-all"
        onClick={() => setVerifyAccountModal(false)}
      >
        <MoveLeft size={30} />
      </button>

      <div
        className={`w-full max-w-[55rem] p-[2rem] rounded-xl bg-light/90 mb-[0rem] shadow-black/50 shadow-2xl transition-all duration-300 ease-in-out ${
          verifyAccountModal ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        {/* Header */}
        <header className="w-full px-[0.5rem] pb-[1.3rem] border-b-[0.1rem] border-secondary-01 flex items-center justify-between">
          <h1 className="text-[2.5rem] leading-[2.5rem] text-darker font-federant font-semibold">
            Verify Account
          </h1>

          <button
            className="text-[1.8rem] text-darker font-semibold font-bricolage rounded-lg cursor-pointer active:scale-[0.99] transition-all"
            onClick={() => setVerifyAccountModal(false)}
          >
            <X />
          </button>
        </header>

        {/* Content */}
        <div className="w-full flex flex-col items-start mt-[1.5rem]">
          <h6 className="text-[1.7rem] font-semibold font-bricolage text-darker">
            Enter the OTP sent to your email
          </h6>

          <p className="text-[1.4rem] leading-[2rem] font-medium font-bricolage text-darker mt-[0.5rem]">
            We have sent 6 digit <b>OTP</b> to your email to verify your
            account. Please check your email and put your account verification
            OTP code here.
          </p>

          {/* OTP Input Cont */}
          <div className="w-full space-y-[0.8rem] mt-[1.4rem]">
            <div className="loginInput w-full relative flex items-center border-[0.1rem] border-transparent focus-within:border-darker rounded-[0.5rem]">
              <input
                type="text"
                name="otp"
                id="otp"
                placeholder="Enter OTP"
                autoComplete="off"
                className={`w-full outline-none text-dark font-medium pl-[1.2rem] pr-[4rem] py-[1rem] text-[1.6rem] leading-[1.6rem] rounded-[0.4rem] border-[0.1rem] border-darker placeholder:text-dark peer`}
              />
              <div className="absolute right-[1.2rem] text-darker cursor-pointer">
                <abbr title="Resend OTP">
                  <RotateCw
                    size={22}
                    onClick={() => console.log("Resend OTP")}
                  />
                </abbr>
              </div>
            </div>

            {/* {error && error[0] === "name" && <FieldError error={error[1]} />} */}
          </div>

          <button className="w-full text-[1.8rem] text-light bg-darker font-semibold font-bricolage px-[2rem] py-[0.8rem] mt-[1rem] rounded-full cursor-pointer active:scale-[0.99] transition-all">
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
