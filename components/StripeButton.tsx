import { SiApplepay, SiGooglepay } from "react-icons/si";

import { SlCreditCard } from "react-icons/sl";

const getLinkForQuantity = (quantity: number) => {
  switch (quantity) {
    case 3:
      return "https://buy.stripe.com/aEUdU57TyfI872oaEK";
    case 5:
      return "https://buy.stripe.com/7sIeY92ze3ZqeuQ6ot";
    case 10:
      return "https://buy.stripe.com/7sIeY92ze3ZqeuQ6ot";
    case 15:
      return "https://buy.stripe.com/8wM5nz0r653u2M814c";
    default:
      return "https://buy.stripe.com/5kAeY95LqdA0dqM9AE";
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
