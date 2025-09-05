import React from "react";

const TransitionButton = ({
  text,
  bgColor,
  textColor,
  hoverBgColor,
  hoverTextColor,
  px,
  py,
  rounded,
  fontSize,
  fontWeight,
}) => {
  return (
    <button
      className={`${bgColor ? `bg-${bgColor}` : "bg-primary-01"} ${
        textColor ? `text-${textColor}` : "text-light"
      } ${hoverBgColor ? `before:bg-${hoverBgColor}` : "before:bg-darker"} ${
        hoverTextColor ? `hover:text-${hoverTextColor}` : "hover:text-light"
      } font-${fontWeight} transition-all overflow-hidden relative z-10 before:content-[''] before:absolute before:-z-[1] before:w-[200%] before:aspect-square before:rounded-full before:top-[120%] before:-left-[50%] before:transition-all before:duration-300 before:ease-in hover:before:-translate-y-[40%] active:scale-[0.98] cursor-pointer select-none`}
      style={{
        fontSize: `${fontSize}rem`,
        lineHeight: `${fontSize}rem`,
        padding: `${py}rem ${px}rem`,
        borderRadius: `${rounded}rem`,
      }}
    >
      {text}
    </button>
  );
};

export default TransitionButton;
