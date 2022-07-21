import React from "react";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Payment from "./Pages/Payment";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Product/>} />
        <Route path="/payment" element={<Payment/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
