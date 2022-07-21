import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import "./styles.css";

const options = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
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
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
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
          <h2>
            Parabéns pela compra :D volte sempre.
          </h2>
        </div>
      )}
    </>
  );
}

export default PaymentForm;
