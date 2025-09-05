import React from "react";

const SimpleInput = ({ type, name, id, placeholder }) => {
  return (
    <>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter your full name"
        autoComplete="off"
        className={`w-full font-righteous outline-none text-dark font-medium px-[1.5rem] py-[1.1rem] text-[1.6rem] leading-[1.6rem] rounded-full border-[0.2rem] border-secondary-02 focus:border-darker placeholder:text-secondary-01 mt-[0.5rem]`}
      />
    </>
  );
};

export default SimpleInput;
