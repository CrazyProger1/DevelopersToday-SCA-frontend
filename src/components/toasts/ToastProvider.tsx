import React from "react";
import { ToastContainer } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

export const ToastProvider = ({ children }: Props) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};
