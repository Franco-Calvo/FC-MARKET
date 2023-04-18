import React from "react";
import "./Navbar.css";
import {Link as Anchor} from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Anchor>Inicio</Anchor>
        <Anchor>Comprar</Anchor>
        <Anchor>Vender</Anchor>
      </nav>
    </div>
  );
}
