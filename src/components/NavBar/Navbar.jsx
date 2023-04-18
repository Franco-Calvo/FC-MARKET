import React from "react";
import "./Navbar.css";
import { Link as Anchor } from "react-router-dom";
import { useRef } from "react";

export default function Navbar({ homeRef }) {
  const scrollToNextView = (e) => {
    e.preventDefault();
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  console.log(homeRef);

  return (
    <div className="navbar">
      <nav>
        <Anchor className="navButton" onClick={scrollToNextView}>
          Inicio
        </Anchor>
        <Anchor className="navButton" onClick={scrollToNextView}>
          Comprar
        </Anchor>
        <Anchor className="navButton" onClick={scrollToNextView}>
          Vender
        </Anchor>
      </nav>
    </div>
  );
}
