import React, { useState } from "react";
import StripeContainer from "../../services/payments/stripe/StripeContainer";
import NavBar from "../../Sections/NavBar";
import Footer from "../../Sections/Footer";
import "./styles.css";
import { ToastContainer, toast } from "react-toastify";

export default function Success() {
  return (
    <>
      <NavBar />
      <div className="container-payment">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <StripeContainer />
      </div>
      <Footer />
    </>
  );
}
