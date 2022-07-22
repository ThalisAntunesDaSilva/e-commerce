import React from "react";
import { useNavigate } from "react-router-dom";

export default function PropertiesProduct() {
  const navigate = useNavigate();
  const produto = JSON.parse(localStorage.getItem("productselect"));

  function handlePayment(){
    navigate("/payment")
  }

  return (
    <div className="legend-container">
      <h1>{produto.name}</h1>
      <span>{produto.description}</span>

      {/*
    <div className="check-options">
    <input type="checkbox" />
    <label for="horns">GG</label>
    </div>
    </div>
  */}
      <h1 className="price">R$ 1,00</h1>
<div className="container-button">
      <button onClick={() => {handlePayment()}}className="button-purchase">Comprar</button>
      </div>
    </div>
  );
}
