import "./SupportTierCard.css";

import { PayPalButton } from "./PayPalButton";
import { ReactEventHandler } from "react";
import { SlClose } from "react-icons/sl";
import { StripeButton } from "./StripeButton";
import { TierType } from "app/support-me/page";

export const SupportTierCard = (
  props: TierType & {
    onChange: ReactEventHandler<HTMLInputElement>;
    onReset: ReactEventHandler<HTMLButtonElement>;
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
        name="support-tiers"
        id={props.name}
        onChange={props.onChange}
        checked={props.selected}
      />
      <div className="title">{props.name}</div>
      <div className="price">${props.dollarsPerMonth}/month</div>
      <img src={props.imageUrl} />
      <div className="tagline">{props.tagline}</div>
      <ul className="perks">
        {props.perks.map((perk) => {
          return <li key={perk.description}>{perk.description}</li>;
        })}
      </ul>
      <div className="fake-payment-button">
        Donate ${props.dollarsPerMonth} monthly
      </div>
      <div className="payment-buttons">
        <button type="reset" className="close" onClick={props.onReset}>
          <SlClose />
        </button>
        <StripeButton quantity={props.dollarsPerMonth} />
        <PayPalButton
          planId="P-2T800313EX3963603MMBL4MI"
          quantity={props.dollarsPerMonth}
        />
      </div>
    </label>
  );
};
