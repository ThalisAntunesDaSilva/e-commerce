import React from "react";
import {
  MagnifierPreview,
  MagnifierContainer,
  MagnifierZoom,
} from "react-image-magnifiers";
import "./styles.css";
import shirt2 from "../../assets/shirt2.jpg";
import shirt from "../../assets/shirt.jpg";
import shirt3 from "../../assets/shirt3.jpg";

export default function ImageZoom() {
  return (
    <div className="container">
      <div className="legend-container">
        <h1>Camisa Fashion</h1>
        <span>
          Camisa muito boa, elegante de excelente qualidade, uma ótima escolha
          para usar em dias quentes no verão
        </span>
      </div>
      
      <div className="images-container">
      <div className="pictures">
        <img className="picture-preview" src={shirt2} />
        <img className="picture-preview" src={shirt} />
        <img className="picture-preview" src={shirt3} />
      </div>

      <MagnifierContainer className="magnify">
        <MagnifierPreview
          style={{ width: "500px", height: "500px" }}
          imageSrc={shirt2}
        />

        <MagnifierZoom
          className="thumbZoom"
          style={{ height: "400px", width: "400px" }}
          imageSrc={shirt2}
        />
      </MagnifierContainer>
      </div>
      
    </div>
  );
}
