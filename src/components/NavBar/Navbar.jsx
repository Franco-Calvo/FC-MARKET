import React from "react";
import "./Navbar.css";
import { Link as Anchor } from "react-router-dom";

export default function Navbar({ productRef }) {
  const scrollToNextView = (e) => {
    e.preventDefault();
    productRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToUp = () => {
    const scrollStep = window.scrollY / 15;
    const scrollInterval = window.requestAnimationFrame(() => {
      if (window.scrollY !== 0) {
        window.scrollTo(0, window.scrollY - scrollStep);
        scrollToUp();
      } else {
        window.cancelAnimationFrame(scrollInterval);
      }
    });
  };

  return (
    <div className="navbar">
      <nav>
        <Anchor className="navButton" onClick={scrollToUp}>
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
