import React, { useRef } from "react";
import "./products.css";
import { Link as Anchor } from "react-router-dom";
import Navbar from "../../components/NavBar/Navbar";

export default function Products() {
  const productRef = useRef(null);

  return (
    <div className="containerProducts" ref={productRef}>
      <Navbar productRef={productRef} />
      <span>Nuestras promociones</span>
      <div className="containerCards">
        <div className="card">
          <p>100K</p>
          <Anchor
            to="https://wa.link/xh7734"
            target="_blank"
            className="buyCoins"
          >
            COMPRAR
          </Anchor>
        </div>
        <div className="card">
          <p>300K</p>
          <Anchor
            to="https://wa.link/xbjecb"
            target="_blank"
            className="buyCoins"
          >
            COMPRAR
          </Anchor>
        </div>
        <div className="card">
          <p>500K</p>
          <Anchor
            to="https://wa.link/1c3ib3"
            target="_blank"
            className="buyCoins"
          >
            COMPRAR
          </Anchor>
        </div>
        <div className="card">
          <p>1M</p>
          <Anchor
            to="https://wa.link/c44yoz"
            target="_blank"
            className="buyCoins"
          >
            COMPRAR
          </Anchor>
        </div>
      </div>
      <hr />
      <Anchor to="https://wa.link/t1f1uj" target="_blank" className="sellCoins">
        Haz click y vende tus monedas
      </Anchor>
    </div>
  );
}
