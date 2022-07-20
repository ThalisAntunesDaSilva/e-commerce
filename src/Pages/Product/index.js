import React from "react";
import NavBar from "../../Sections/NavBar";
import ImageZoom from "../../Components/ImageZoom/index";
import Footer from "../../Sections/Footer";
import "./styles.css";
import PropertiesProduct from "../../Components/PropertiesProduct/index";

export default function Product() {
  return (
    <>
      <NavBar />
      <div className="product-details">
        <ImageZoom />
        <PropertiesProduct />
      </div>
      <Footer />
    </>
  );
}
