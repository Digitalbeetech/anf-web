import React, { ReactNode, FormEvent } from "react";

interface ModalProps {
  modalIsOpen?: boolean;
  closeModal?: () => void;
  resetBtnOnclick?: () => void;
  resetBtnText?: string;
  title: string;
  contentLabel?: string;
  size?: "small" | "medium" | "large" | "extraLarge";
  submitLoading?: boolean;
  onSubmit?: (e: FormEvent) => void;
  submitText?: string;
  closeText?: string;
  children?: ReactNode;
  hideDes?: Boolean;
  heightAuto?: Boolean;
  description?: string;
}

const Modal: React.FC<ModalProps> = ({
  modalIsOpen,
  closeModal,
  title,
  size = "medium",
  submitLoading = false,
  onSubmit,
  submitText = "Submit",
  closeText = "Close",
  children,
  resetBtnText,
  resetBtnOnclick,
  hideDes = false,
  heightAuto = false,
  description,
}) => {
  return (
    <div
      className={`fixed min-h-screen inset-0 z-50 bg-[#FCF7EC]/40 backdrop-blur-xs px-4 py-8 transition-opacity ${
        modalIsOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!modalIsOpen}
    >
      <div className={` ${!heightAuto && "min-h-screen"} flex items-center`}>
        <div
          className={`relative w-full mx-auto rounded-4xl border border-gray-300 shadow-md ${
            size === "small"
              ? "max-w-sm"
              : size === "medium"
              ? "max-w-xl"
              : size === "large"
              ? "max-w-4xl"
              : size === "extraLarge"
              ? "max-w-8xl"
              : "max-w-lg"
          }
      `}
        >
          <div className="w-full rounded-4xl p-3 bg-[#FCF7EC] backdrop-blur-xs  text-black">
            <div onSubmit={onSubmit} className="flex flex-col">
              {/* Header */}
              <div className="px-6 py-3 relative">
                <div className="flex flex-row justify-between items-center">
                  <button
                    type="button"
                    className="absolute top-1 right-4 text-black hover:text-gray-600 focus:outline-none cursor-pointer"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div>
                    <h1 className="text-5xl inline-block text-center">
                      <span
                        className="text-[#f9be49] drop-shadow-lg font-grobold tracking-tight"
                        style={{
                          WebkitTextStroke: "2px white",
                          paintOrder: "stroke fill",
                        }}
                      >
                        {title}
                      </span>{" "}
                    </h1>
                    {!hideDes && (
                      <p className="text-gray-500 font-medium">{description}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-4">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
