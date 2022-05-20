import React from "react";
import NavBar from "../../Sections/NavBar";
import ProductDetails from "../../Sections/ProductDetails";
import Footer from "../../Sections/Footer";
import "./styles.css";

export default function Product() {
  return (
    <>
      <NavBar />
      <div className="product-details">
        <ProductDetails />
        <div className="properties-product">
  
      <div className="product-options">
      <h3>Cor</h3>  
      <div className="check-options">
      <input type="checkbox" />             
      <label for="scales">Preto</label>
      </div>

      <div className="check-options">
      <input type="checkbox" />
      <label for="horns">Branco</label>
      </div>
      </div>

      <div className="product-options">
      <h3>Tamanho</h3>  
      <div className="check-options">
      <input type="checkbox" />             
      <label for="scales">G</label>
      </div>

      <div className="check-options">
      <input type="checkbox" />
      <label for="horns">GG</label>
      </div>
      </div>
         
          <h1>R$ 200,00</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
