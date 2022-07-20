import React, { useState, useEffect } from "react";
import "./styles.css";
import shirt from "../../assets/shirt.jpg";
import shirt2 from "../../assets/shirt2.jpg";
import shirt3 from "../../assets/shirt3.jpg";
import api from "../../services/api";

function Products() {
  const [data, setData] = useState({});

  const [produto, setProduto] = useState([]);
  const [buy, setBuy] = useState([]);

  async function getProducts() {
    try {
      const response = await api.get("produtos", {
        headers: { "Access-Control-Allow-Origin": true },
        mode: "cors",
      });

      const data = response.data;
      alert(data);
      setProduto(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function buyProduct() {}

  useEffect(() => {
    getProducts();
  }, []);

  async function handlePayment() {
    try {
      await api
        .post("/buy?id=1", {
          headers: { "Access-Control-Allow-Origin": false },
          mode: "cors",
        })
        .then((response) => {
          console.log(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div className="product-release">
        <ul>
          {produto.map((item) => (
            <li key={item.id}>
              <p>{item.titulo}</p>
              <img src={item.img} alt="produto" className="products-image" />
            </li>
          ))}
        </ul>

        <button
          onClick={() => {
            handlePayment();
          }}
        >
          OK
        </button>
        <h1 className="title-release">Produtos lançados</h1>

        <div className="product-list">
          <a href="/products" className="list-item">
            <div>
              <img src={shirt} className="img-product" />
              <h3 className="title-product">Camiseta Fashion</h3>
              <h1 className="price-product">R$ 109,90</h1>
            </div>
          </a>

          <a href="/products" className="list-item">
            <div>
              <img src={shirt2} className="img-product" />
              <h3 className="title-product">Camiseta Curta</h3>
              <h1 className="price-product">R$ 109,90</h1>
            </div>
          </a>

          <a href="/products" className="list-item">
            <div>
              <img src={shirt3} className="img-product" />
              <h3 className="title-product">Camiseta Xadrez</h3>
              <h1 className="price-product">R$ 109,90</h1>
            </div>
          </a>
        </div>
      </div>

      <div className="product-release">
        <h1 className="title-release">Promoções</h1>

        <div className="product-list">
          <a href="/products" className="list-item">
            <div>
              <img src={shirt} className="img-product" />
              <h3 className="title-product">Camiseta Fashion</h3>
              <h1 className="price-product">R$ 109,90</h1>
            </div>
          </a>

          <a href="/products" className="list-item">
            <div>
              <img src={shirt2} className="img-product" />
              <h3 className="title-product">Camiseta Curta</h3>
              <h1 className="price-product">R$ 109,90</h1>
            </div>
          </a>

          <a href="/products" className="list-item">
            <div>
              <img src={shirt3} className="img-product" />
              <h3 className="title-product">Camiseta Xadrez</h3>
              <h1 className="price-product">R$ 109,90</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Products;
