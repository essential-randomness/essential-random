"use client";

import { PayPalButton } from "../../components/PayPalButton";
import React from "react";

const SupportMe = () => {
  const [quantity, setQuantity] = React.useState(5);
  return (
    <main className="support-me">
      <input
        id="donation-5"
        type="radio"
        name="donation"
        value={5}
        checked={quantity == 5}
        onChange={() => setQuantity(5)}
      />
      <label htmlFor="donation-5">$5/month</label>
      <input
        id="donation-10"
        type="radio"
        name="donation"
        value={10}
        checked={quantity == 10}
        onChange={() => setQuantity(10)}
      />
      <label htmlFor="donation-10">$10/month</label>
      <input
        id="donation-15"
        type="radio"
        name="donation"
        value={15}
        checked={quantity == 15}
        onChange={() => setQuantity(15)}
      />
      <label htmlFor="donation-15">$15/month</label>
      <PayPalButton planId="P-2T800313EX3963603MMBL4MI" quantity={quantity} />
    </main>
  );
};

export default SupportMe;
