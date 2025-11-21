import React from "react";

interface ButtonProps {
  label?: string;
  onClick?: any;
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  loader?: boolean;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  type = "button",
  children,
  loader = false,
  bgColor,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-center lg:flex relative cursor-pointer font-grobold ${
        bgColor ? bgColor : "bg-[#ff625a] hover:bg-red-600 border-3"
      } text-white px-6 md:px-8 py-2.5 rounded-2xl transition ml-2 md:ml-0 ${className}`}
      disabled={loader}
    >
      {!loader && children}

      {loader && (
        <div className="button-loader py-1.5">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </button>
  );
};

export default Button;
