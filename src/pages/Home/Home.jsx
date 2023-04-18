import React from "react";
import "./home.css";
import Navbar from "../../Components/NavBar/Navbar";

import messi from "../../images/messi.png";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="containerprincipal">
          <h1>Nicoins</h1>
          <p>2023</p>
          <hr />
        </div>
        <div className="buttonContainer">
          <img src={messi} alt="" />
          <button>CONTACTAR</button>
          <p className="textExample">
            Adidas revels the first FIFA World Cup official ball featuring
            connected ball technology
          </p>
        </div>
      </div>
    </>
  );
}
