import React, { useState, useEffect } from "react";
import "./styles.css";
import api from "../../services/api";
import { useNavigate } from 'react-router-dom';

function Products() {
  const [produto, setProduto] = useState([]);
  const navigate = useNavigate();

  async function handleProducts() {
    try {
      const response = await api.get("/v1/products");
      const data = response.data.data;
      setProduto(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function selectProduct(product) {
    try {
    
      localStorage.setItem("productselect",JSON.stringify(product));
      navigate("/products");
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <div>
      <div className="product-release">
        <h1 className="title-release">Produtos lançados</h1>

        <ul className="list-products">
          {produto.length > 0 ? (
            produto.map((product) => (
              <a key={product.id} href="/products" className="list-item" onClick={() => {selectProduct(product)}}>
                <img src={product.images[0]} className="img-product" />
                <h3 className="title-product">{product.name}</h3>
                <h1 className="price-product">R$ 1,00</h1>
              </a>
            ))
          ) : (
            <div>
              <h3>Nem um produto disponível no momento D:</h3>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Products;
