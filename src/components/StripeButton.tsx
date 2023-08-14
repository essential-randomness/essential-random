import { SiApplepay, SiGooglepay } from "react-icons/si";

import { SlCreditCard } from "react-icons/sl";

const getLinkForQuantity = (quantity: number) => {
  switch (quantity) {
    case 3:
      return "https://buy.stripe.com/aEUdU57TyfI872oaEK";
    case 8:
      return "https://buy.stripe.com/bIY9DP5Lq53ucmIaEN";
    case 25:
      return "https://buy.stripe.com/28obLX0r69jKcmI6oy";
    case 15:
      return "https://buy.stripe.com/8wM5nz0r653u2M814c";
    default:
      throw new Error("Invalid payment amount");
  }
};
export const StripeButton = ({ quantity }: { quantity: number }) => {
  return (
    <a href={getLinkForQuantity(quantity)} className="stripe">
      <SlCreditCard /> <SiGooglepay />
      <SiApplepay /> Pay with Stripe
    </a>
  );
};
