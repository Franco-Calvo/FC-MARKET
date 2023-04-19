import React, { useRef } from "react";
import "./index.css";
import Home from "../Home/Home";
import Navbar from "../../components/NavBar/Navbar";
import Products from "../../pages/Products/Products";

export default function Index() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
    </>
  );
}
