import React from "react";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
