import React, { useRef } from "react";
import "./index.css";
import Home from "../Home/Home";
import Navbar from "../../components/NavBar/Navbar";
import Products from "../../pages/Products/Products";

export default function Index() {
  const homeRef = useRef(null);
  const refs = { homeRef };
  return (
    <>
      <Navbar refs={refs} />
      <Home />
      <Products ref={homeRef} />
    </>
  );
}
