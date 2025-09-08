import { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import BackgroundImage from "../assets/login-bg.png";
import VerifyAccount from "../components/UI/Modals/VerifyAccount";

const Register = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [verifyAccountModal, setVerifyAccountModal] = useState(false);

  return (
    <div className="w-full min-h-dvh pt-[6.6rem]">
      <div
        className="w-full h-[calc(100dvh-6.6rem)] bg-cover bg-bottom bg-no-repeat flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        {/* Sign up Form Cont */}
        <div className="bg-transparent flex flex-col items-center justify-center p-[2rem] mb-[6rem] rounded-2xl">
          <h2 className="text-[3.6rem] text-darker font-medium font-righteous">
            Sign Up
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="min-w-[40rem] flex flex-col tabletLg:pr-[8%] mt-[2rem]"
          >
            {/* Full Name Input Cont */}
            <div className="w-full space-y-[0.8rem]">
              <div className="loginInput w-full relative border-[0.1rem] border-transparent focus-within:border-darker rounded-[0.5rem]">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Your Name"
                  autoComplete="off"
                  className={`w-full outline-none text-dark font-medium px-[1.2rem] py-[1rem] text-[1.6rem] leading-[1.6rem] rounded-[0.4rem] border-[0.1rem] border-darker placeholder:text-dark peer`}
                />
              </div>

              {/* {error && error[0] === "name" && <FieldError error={error[1]} />} */}
            </div>

            {/* Email Input Cont */}
            <div className="w-full space-y-[0.8rem] mt-[1.4rem]">
              <div className="loginInput w-full relative border-[0.1rem] border-transparent focus-within:border-darker rounded-[0.5rem]">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                  className={`w-full outline-none text-dark font-medium px-[1.2rem] py-[1rem] text-[1.6rem] leading-[1.6rem] rounded-[0.4rem] border-[0.1rem] border-darker placeholder:text-dark peer`}
                />
              </div>

              {/* {error && error[0] === "name" && <FieldError error={error[1]} />} */}
            </div>

            {/* Password Input Cont */}
            <div className="w-full space-y-[0.8rem] mt-[1.4rem]">
              <div className="loginInput w-full relative flex items-center border-[0.1rem] border-transparent focus-within:border-darker rounded-[0.5rem]">
                <input
                  type={isPassVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="off"
                  className={`w-full outline-none text-dark font-medium pl-[1.2rem] pr-[4rem] py-[1rem] text-[1.6rem] leading-[1.6rem] rounded-[0.4rem] border-[0.1rem] border-darker placeholder:text-dark peer`}
                />

                <div className="absolute right-[1rem] text-dark cursor-pointer">
                  {isPassVisible ? (
                    <Eye size={20} onClick={() => setIsPassVisible(false)} />
                  ) : (
                    <EyeOff size={20} onClick={() => setIsPassVisible(true)} />
                  )}
                </div>
              </div>

              {/* {error && error[0] === "name" && <FieldError error={error[1]} />} */}
            </div>

            {/* Confirm Password Input Cont */}
            <div className="w-full space-y-[0.8rem] mt-[1.4rem]">
              <div className="loginInput w-full relative border-[0.1rem] border-transparent focus-within:border-darker rounded-[0.5rem]">
                <input
                  type={isPassVisible ? "text" : "password"}
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  className={`w-full outline-none text-dark font-medium px-[1.2rem] py-[1rem] text-[1.6rem] leading-[1.6rem] rounded-[0.4rem] border-[0.1rem] border-darker placeholder:text-dark peer`}
                />
              </div>

              {/* {error && error[0] === "name" && <FieldError error={error[1]} />} */}
            </div>

            {/* Forgot Password & Register Links */}
            <div className="w-full flex items-center justify-between mt-[1rem] px-[0.2rem]">
              <p className="text-[1.5rem] font-medium text-darker">
                Already have an account?
              </p>
              <Link
                to={"/login"}
                className="text-[1.45rem] font-medium text-darker"
              >
                Login Here
              </Link>
            </div>

            <button
              onClick={() => setVerifyAccountModal(true)}
              className={`w-full flex items-center justify-center gap-[1rem] px-[3rem] py-[1.2rem] mt-[2.5rem] text-[1.8rem] leading-[1.8rem] tracking-wide font-medium font-righteous rounded-full transition-all ${
                true
                  ? "text-light bg-darker active:scale-[0.98] active:bg-dark cursor-pointer"
                  : "bg-light text-dark cursor-not-allowed"
              }`}
            >
              Register
            </button>
          </form>
        </div>
      </div>

      <VerifyAccount
        verifyAccountModal={verifyAccountModal}
        setVerifyAccountModal={setVerifyAccountModal}
      />
    </div>
  );
};

export default Register;
