import React from "react";
import PaymentForm from "./PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

//Define public key
const PUBLIC_KEY =
  "pk_test_51L6OJyDepudyggMLX0VTEq5PcDI8okndmRcF0MItjXXIft3IpxSs2YoBK0h02RmIsrJmT5C0e6K0wkFcgU7tNrwk00lLxKjObz";
//Load stripe after inset public key
const stripe = loadStripe(PUBLIC_KEY);

//Elements load all elements for stripe needs

function StripeContainer() {
  return (
    <>
      <Elements stripe={stripe} className="stripe-container">
        <PaymentForm />
      </Elements>
    </>
  );
}

export default StripeContainer;
