import React from "react";
import Footer from "../../Common/Footer";
import Header from "../Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
