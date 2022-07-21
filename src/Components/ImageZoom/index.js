import React, {useEffect} from "react";
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


const produto = JSON.parse(localStorage.getItem("productselect"));



  return (
    <div className="container">
  {/*       <div className="legend-container">
        <h1>{produto.name}</h1>
        <span>
        {produto.description}
        </span>
      </div>
      */}

      <div className="images-container">
   
      <MagnifierContainer className="magnify">
        <MagnifierPreview
          className="magnifer-preview"
          style={{ width: "500px", height: "500px" }}
          imageSrc={produto.images[0]}
        />

        <MagnifierZoom
          className="thumbZoom"
          style={{ height: "500px", width: "500px" }}
          imageSrc={produto.images[0]}
        />
      </MagnifierContainer>
      </div>
    
      
    </div>
  );
}
