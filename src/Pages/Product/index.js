import React from "react";
import NavBar from "../../Sections/NavBar";
import ProductDetails from "../../Sections/ProductDetails";



import Footer from "../../Sections/Footer";

export default function Product() {
  return (
    <>
      <NavBar />
      <div>
        <ProductDetails />
      </div>
      <Footer />
    </>
  );
}
