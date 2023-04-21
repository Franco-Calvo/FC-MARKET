import React from "react";
import "./footer.css";
import { Link as Anchor } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="socials">
        <Anchor>Instagram</Anchor>
        <Anchor>Whatsapp</Anchor>
      </div>
    </div>
  );
}
