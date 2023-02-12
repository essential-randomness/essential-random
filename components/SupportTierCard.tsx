import "./SupportTierCard.css";

import { ChangeEventHandler } from "react";
import { PayPalButton } from "./PayPalButton";
import { StripeButton } from "./StripeButton";
import { TierType } from "app/support-me/page";

export const SupportTierCard = (
  props: TierType & {
    onChange: ChangeEventHandler<HTMLInputElement>;
    selected: boolean;
  }
) => {
  return (
    <label
      className="support-tier card"
      data-selected={props.selected}
      htmlFor={props.name}
    >
      <input
        type="radio"
        name="radio"
        id={props.name}
        onChange={props.onChange}
      />
      <div className="title">{props.name}</div>
      <div className="price">${props.dollarsPerMonth}/month</div>
      <div className="tagline">{props.tagline}</div>
      <ul className="perks">
        {props.perks.map((perk) => {
          return <li key={perk.description}>{perk.description}</li>;
        })}
      </ul>
      <div className="donate">Donate ${props.dollarsPerMonth} monthly</div>

      <div className="payment-buttons">
        <StripeButton quantity={props.dollarsPerMonth} />
        <PayPalButton
          planId="P-2T800313EX3963603MMBL4MI"
          quantity={props.dollarsPerMonth}
        />
      </div>
    </label>
  );
};
