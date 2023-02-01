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
      Subscribe with Credit card, GPay or Apple Pay
      <style>{`
      .stripe {
        width: 100%;
        height: 55px;
        color: white;
        background-color: black;
        padding: 5px 15px;
        border-radius: 9999px;
        max-width: 750px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid white
      }
      .stripe:hover {
        filter: invert();
      }
        `}</style>
    </a>
  );
};
