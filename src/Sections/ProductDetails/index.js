import React from "react";
import "./styles.css";
import ImageZoom from "../../Components/ImageZoom";

export default function ProductDetails() {
  return (
    <div>
      <h1>Camisa Fashion</h1>
      <span>
        Camisa muito boa, elegante de excelente qualidade, uma ótima escolha
        para usar em dias quentes no verão
      </span>
      <ImageZoom />
      <h1>Oi</h1>
    </div>
  );
}
