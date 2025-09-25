import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Poppins } from "next/font/google";
import { ModalProvider } from "@/components/modals";

export const metadata: Metadata = {
  title: "Spy Cats Agency!",
  description: "DevelopersToday Test-Task",
};

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Readonly<Props>) => {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
};
export default RootLayout;
