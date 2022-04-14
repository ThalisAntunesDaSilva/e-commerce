import React from "react";
import './styles.css';
import shirt from '../../assets/shirt.jpg'
import shirt2 from '../../assets/shirt2.jpg'
import shirt3 from '../../assets/shirt3.jpg'


function Products() {
  return <div>
      <div className="product-release">
            <h1 className="title-release">Produtos lançados</h1>
         
                <ul className="product-list">
                    <li className="list-item">
                        <div>
                            <img src={shirt} className="img-product"/>
                            <h3 className="title-product">
                                Camiseta Fashion
                            </h3>
                            <h1 className="price-product">R$ 109,90</h1>
                        </div>
                        </li>
                        <li className="list-item">
                        <div>
                            <img src={shirt2} className="img-product"/>
                            <h3 className="title-product">
                                Camiseta Curta
                            </h3>
                            <h1 className="price-product">R$ 109,90</h1>
                        </div>
                    </li>

                    <li className="list-item">
                        <div>
                            <img src={shirt3} className="img-product"/>
                            <h3 className="title-product">
                                Camiseta Xadrez
                            </h3>
                            <h1 className="price-product">R$ 109,90</h1>
                        </div>
                    </li>
                   
                    </ul>
            
      </div>

      <div className="product-release">
            <h1 className="title-release">Produtos em promoção</h1>
         
                <ul className="product-list">
                    <li className="list-item">
                        <div>
                            <img src={shirt} className="img-product"/>
                            <h3 className="title-product">
                                Camiseta Fashion
                            </h3>
                            <h1 className="price-product">R$ 109,90</h1>
                        </div>
                        </li>
                        <li className="list-item">
                        <div>
                            <img src={shirt2} className="img-product"/>
                            <h3 className="title-product">
                                Camiseta Curta
                            </h3>
                            <h1 className="price-product">R$ 109,90</h1>
                        </div>
                    </li>

                    <li className="list-item">
                        <div>
                            <img src={shirt3} className="img-product"/>
                            <h3 className="title-product">
                                Camiseta Xadrez
                            </h3>
                            <h1 className="price-product">R$ 109,90</h1>
                        </div>
                    </li>
                   
                    </ul>
            
      </div>
  </div>;
}

export default Products;
