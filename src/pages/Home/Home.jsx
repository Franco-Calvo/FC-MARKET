import React, { useRef } from "react";
import "./home.css";
import messi from "../../images/messi.png";
import play4 from "../../images/play4.png";
import play5 from "../../images/play5.png";
import xbox from "../../images/xbox.png";
import pc from "../../images/pc.png";
import { Link as Anchor } from "react-router-dom";

export default function Home() {
  const homeRef = useRef(null);

  return (
    <>
      <div className="home" ref={homeRef}>
        <div className="containerprincipal">
          <h1>FC MARKET</h1>
          <p>2023</p>
          <hr />
        </div>
        <div className="buttonContainer">
          <img src={messi} alt="" />
          <Anchor
            className="contactButton"
            to="https://wa.link/5q3df3"
            target="_blank"
          >
            CONTACTAR
          </Anchor>
        </div>
        <span className="textExample">
          <img src={play4} alt="" />
          <img src={play5} alt="" />
          <img src={xbox} className="xbox" alt="" />
          <img src={pc} className="xbox" alt="" />
        </span>
      </div>
    </>
  );
}
