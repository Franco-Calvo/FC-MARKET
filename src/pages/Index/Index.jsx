import React, { useRef } from "react";
import Home from "../Home/Home";
import Navbar from "../../components/NavBar/Navbar";
import Products from "../../pages/Products/Products";
import Footer from "../../components/Footer/Footer";

export default function Index() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <Footer />
    </>
  );
}
