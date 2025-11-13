import React from "react";

interface ButtonProps {
  label?: string;
  onClick?: any;
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  loader?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  type = "button",
  children,
  loader = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`hidden lg:flex relative cursor-pointer font-grobold border-3 bg-[#ff625a] text-white px-6 md:px-8 py-2.5 rounded-2xl hover:bg-red-600 transition ml-2 md:ml-0 ${className}`}
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
