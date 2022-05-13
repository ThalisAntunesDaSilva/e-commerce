import React from "react";
import NavBar from "../../Sections/NavBar";
import Highlights from "../../Sections/Highlights";
import Products from "../../Sections/Products";
import Footer from "../../Sections/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Highlights />
      <Products />
      <Footer />
    </>
  );
}
