import "./SupportTierCard.css";

import { PayPalButton } from "./PayPalButton";
import type { ReactEventHandler } from "react";
import { SlClose } from "react-icons/sl";
import { StripeButton } from "./StripeButton";
import type { TierType } from "./TiersDisplay";

const DEV_PAYPAL_PLAN_ID = "P-1T805503J47278516MUYD2NA";
const PROD_PAYPAL_PLAN_ID = "P-2T800313EX3963603MMBL4MI";
const PROD_PAYPAL_CLIENT_ID =
  "AbYamsrG5_XYxgwQm3wrH4rsCeveTZZFmDrjbxD4QjsWbitArq9DZNpJs19I3bGWyrESPWfdqYKP-6Lu";
const DEV_PAYPAL_CLIENT_ID =
  "AcTlVdT0tmCUP45F7DbEg1y4_neQnI8EEruw6DKCZgl6nYFVF4TmFQmeijreym9V-KYZSKs4qnOIoCR4";

export const SupportTierCard = (
  props: TierType & {
    onChange: ReactEventHandler<HTMLInputElement>;
    onReset: ReactEventHandler<HTMLButtonElement>;
    selected: boolean;
  }
) => {
  const id = props.name.replaceAll(" ", "-");
  return (
    <label
      className="support-tier card"
      data-selected={props.selected}
      htmlFor={id}
      id={id + "-label"}
    >
      <input
        type="radio"
        name="support-tiers"
        id={id}
        onChange={props.onChange}
        checked={props.selected}
      />
      <div className="title">{props.name}</div>
      <div className="price">${props.dollarsPerMonth}/month</div>
      <img src={props.imageUrl} alt={props.name} width={460} height={200} />
      <div className="tagline">{props.tagline}</div>
      <ul className="perks">
        {props.perks.map((perk) => {
          return (
            <li
              key={perk.description}
              dangerouslySetInnerHTML={{ __html: perk.description }}
            />
          );
        })}
      </ul>
      <div className="fake-payment-button">
        Give ${props.dollarsPerMonth} monthly
      </div>
      <div className="payment-buttons">
        <button type="reset" className="close" onClick={props.onReset}>
          <SlClose />
        </button>
        <StripeButton quantity={props.dollarsPerMonth} />
        <PayPalButton
          planId={
            process.env.NODE_ENV === "production"
              ? PROD_PAYPAL_PLAN_ID
              : DEV_PAYPAL_PLAN_ID
          }
          clientId={
            process.env.NODE_ENV === "production"
              ? PROD_PAYPAL_CLIENT_ID
              : DEV_PAYPAL_CLIENT_ID
          }
          quantity={props.dollarsPerMonth}
        />
      </div>
    </label>
  );
};
