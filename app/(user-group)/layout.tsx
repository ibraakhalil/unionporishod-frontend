import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
export default function layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
