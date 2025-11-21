"use client";
import Modal from "../Modal";
import { useModal } from "@/context/ModalContext";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function GlobalModal() {
  const { isOpen, closeModal, title, content } = useModal();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (!isOpen) return null;

  const handleClose = () => {
    closeModal();

    // Remove query param from URL
    const params = new URLSearchParams(searchParams.toString());
    params.delete("cancel"); // remove cancel or any other param

    router.replace(`${pathname}?${params.toString()}`); // replace URL without page reload
  };

  return (
    <Modal modalIsOpen={isOpen} closeModal={handleClose} title={title} size="medium">
      {content}
    </Modal>
  );
}
