import React from "react";

export default function PropertiesProduct() {
  const produto = JSON.parse(localStorage.getItem("productselect"));

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

      <button className="button-purchase">Comprar</button>
    </div>
  );
}
