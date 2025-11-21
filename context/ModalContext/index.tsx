"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type ModalContextType = {
  isOpen: boolean;
  title: string;
  content: ReactNode;
  openModal: (title: string, content: ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<ReactNode>(null);

  const openModal = (t: string, c: ReactNode) => {
    setTitle(t);
    setContent(c);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, title, content, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used inside ModalProvider");
  return context;
}
