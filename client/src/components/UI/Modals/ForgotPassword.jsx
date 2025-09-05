import { MoveLeft, X } from "lucide-react";

const ForgotPassword = ({
  forgotPassModal,
  setForgotPassModal,
  setVerifyAccountModal,
}) => {
  const sendVerificationCodeHandler = () => {
    setForgotPassModal(false);
    setVerifyAccountModal(true);
  };

  return (
    <div
      className={`w-full h-dvh fixed z-[999] top-0 left-0 flex items-center justify-center bg-black/30 backdrop-blur-md transition-all duration-500 ease-in-out ${
        forgotPassModal
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        className="absolute top-0 left-0 text-[1.8rem] text-light bg-darker font-semibold font-righteous px-[1rem] py-[0.5rem] rounded-lg cursor-pointer active:scale-[0.99] transition-all"
        onClick={() => setForgotPassModal(false)}
      >
        <MoveLeft size={30} />
      </button>

      <div
        className={`w-full max-w-[55rem] p-[2rem] rounded-xl bg-light/90 shadow-black/50 shadow-2xl transform transition-all duration-300 ease-in-out ${
          forgotPassModal ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        {/* Header */}
        <header className="w-full px-[0.5rem] pb-[1.2rem] border-b-[0.1rem] border-secondary-01 flex items-center justify-between">
          <h1 className="text-[2.4rem] leading-[2.4rem] text-darker font-righteous font-semibold">
            Forgot Password
          </h1>

          <button
            className="text-[1.8rem] text-darker font-semibold font-righteous rounded-lg cursor-pointer active:scale-[0.99] transition-all"
            onClick={() => setForgotPassModal(false)}
          >
            <X />
          </button>
        </header>

        {/* Guidance Cont */}
        <div className="w-full flex flex-col items-start mt-[1.5rem]">
          <h6 className="text-[1.7rem] font-semibold font-righteous text-darker">
            Have you forgotten your account password?
          </h6>

          <p className="text-[1.4rem] leading-[2rem] font-medium font-righteous text-darker mt-[0.5rem]">
            No worries! Just enter your email address below, and we’ll send you
            a verification code. Use that code to confirm your identity and
            reset your password securely.
          </p>

          {/* Input Cont */}
          <div className="w-full space-y-[0.8rem] mt-[1.8rem]">
            <p className="text-[1.5rem] leading-[2rem] font-medium font-righteous text-darker">
              Please! Enter the email address associated with your account
            </p>

            <div className="w-full relative flex items-center rounded-[0.5rem] border-[0.1rem] border-transparent focus-within:border-darker">
              <input
                type="email"
                name="email"
                id="forgotPassAccountEmail"
                placeholder="Enter the email address here..."
                autoComplete="off"
                className={`w-full outline-none text-dark font-medium px-[1rem] py-[1rem] text-[1.6rem] leading-[1.6rem] rounded-[0.4rem] border-[0.1rem] border-darker placeholder:text-dark peer`}
              />
            </div>

            {/* {error && error[0] === "name" && <FieldError error={error[1]} />} */}
          </div>

          <button
            onClick={() => sendVerificationCodeHandler()}
            className="w-full text-[1.8rem] text-light bg-darker font-semibold font-righteous px-[2rem] py-[0.8rem] mt-[1rem] rounded-full cursor-pointer active:scale-[0.99] transition-all"
          >
            Get Verification Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
