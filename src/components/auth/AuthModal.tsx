"use client";

import React from "react";
import { useModal } from "@/contexts/ModalContext";
import Modal from "@/components/ui/Modal";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const AuthModal: React.FC = () => {
  const { activeModal, closeModal, openModal } = useModal();

  if (activeModal !== "signin" && activeModal !== "signup") return null;

  return (
    <Modal
      isOpen
      onClose={closeModal}
      title={activeModal === "signin" ? "Sign In" : "Sign Up"}
    >
      {activeModal === "signin" ? (
        <>
          <SignInForm />
          <p className="mt-4 text-center text-sm text-palette-secondary">
            Don&apos;t have an account?{" "}
            <button
              onClick={() => openModal("signup")}
              className="text-palette-accent hover:text-palette-accent-hover font-medium"
            >
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm />
          <p className="mt-4 text-center text-sm text-palette-secondary">
            Already have an account?{" "}
            <button
              onClick={() => openModal("signin")}
              className="text-palette-accent hover:text-palette-accent-hover font-medium"
            >
              Sign In
            </button>
          </p>
        </>
      )}
    </Modal>
  );
};

export default AuthModal;
