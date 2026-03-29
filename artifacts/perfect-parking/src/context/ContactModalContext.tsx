import React, { createContext, useContext, useState, ReactNode } from "react";
import { ContactModal, ModalVariant } from "@/components/ContactModal";

interface ContactModalContextType {
  openContactModal: () => void;
  openComboModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType>({
  openContactModal: () => {},
  openComboModal: () => {},
  closeModal: () => {},
});

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [modalVariant, setModalVariant] = useState<ModalVariant | null>(null);

  const openContactModal = () => setModalVariant("parking");
  const openComboModal = () => setModalVariant("combo");
  const closeModal = () => setModalVariant(null);

  return (
    <ContactModalContext.Provider value={{ openContactModal, openComboModal, closeModal }}>
      {children}
      {modalVariant && <ContactModal variant={modalVariant} onClose={closeModal} />}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}
