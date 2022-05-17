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
      <div className="pictures">
        <img className="picture-preview" src={shirt2} />
        <img className="picture-preview" src={shirt} />
        <img className="picture-preview" src={shirt3} />
      </div>
      <div className="magnify-container">
        <MagnifierContainer>
          <div className="thumbSection">
            <div className="picture">
              <MagnifierPreview
                style={{ width: "500px", height: "500px" }}
                imageSrc={shirt2}
              />
            </div>
            <div>
              <MagnifierZoom
                className="thumbZoom"
                style={{ height: "200px", width: "200px" }}
                imageSrc={shirt2}
              />
            </div>
          </div>
        </MagnifierContainer>
      </div>
    </div>
  );
}
