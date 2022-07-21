import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import "./styles.css";
import {  toast } from "react-toastify";

const options = {
  iconStyle: "solid",

  style: {
    base: {
      iconColor: "#6730dd",
      color: "#000000",
      fontWeight: 500,
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#6730dd" },
      "::placeholder": { color: "#6730dd" },
    },
    invalid: {
      iconColor: "#FF0000",
      color: "#FF0000",
    },
  },
};

function PaymentForm() {
  const [sucess, setSucess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        toast.success("carregando");
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:8080/payment", {
          amount: 100,
          id,
        });

        if (response.data.success) {
          console.log("Pagamento realizado com sucesso");
          setSucess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!sucess ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="formGroup">
          <h2 className="legend">Realize o preenchimento dos seguintes dados a baixo:</h2>
            <div className="formRow">
              <CardElement className="option-card" options={options} />
            </div>
            <div className="container-purchase">
              <button className="button-purchase">Pagar</button>
            </div>
          
          </fieldset>
        </form>
      ) : (
        <div className="feedback">
          <h1>Pagamento realizado!</h1>
          <h2>Parabéns pela compra :D volte sempre.</h2>
        </div>
      )}
    </>
  );
}

export default PaymentForm;
