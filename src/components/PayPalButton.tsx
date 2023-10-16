import { type PayPalNamespace, loadScript } from "@paypal/paypal-js";

import React from "react";

const CLIENT_ID =
  "AbYamsrG5_XYxgwQm3wrH4rsCeveTZZFmDrjbxD4QjsWbitArq9DZNpJs19I3bGWyrESPWfdqYKP-6Lu";

let payPalPromise: Promise<PayPalNamespace | null> | null = null;
const renderPayPalButton = async (
  button: HTMLDivElement,
  options: {
    planId: string;
  }
) => {
  let paypal: PayPalNamespace;
  if (!window.paypal && !payPalPromise) {
    payPalPromise = loadScript({
      clientId: CLIENT_ID,
      vault: true,
      intent: "subscription",
    });
  }
  await payPalPromise;
  paypal = window.paypal!;
  paypal
    .Buttons?.({
      style: {
        shape: "pill",
        color: "gold",
        layout: "vertical",
        label: "subscribe",
      },
      fundingSource: "paypal",
      createSubscription: (_, actions) => {
        console.log("creating subscription for ", button);
        return actions.subscription.create({
          plan_id: options.planId,
          quantity: button.dataset.quantity,
        });
      },
      onApprove: async (data) => {
        alert(data.subscriptionID); // You can add optional success message for the subscriber here
      },
    })
    .render(button);
};

export interface PayPalButtonProps {
  //P-2T800313EX3963603MMBL4MI
  planId: string;
  quantity: number;
}

export const PayPalButton = (props: PayPalButtonProps) => {
  return (
    <div
      data-quantity={props.quantity}
      key={props.planId}
      // See: https://github.com/paypal/react-paypal-js/issues/224
      // TODO: remove this once that issue is fixed
      style={{ colorScheme: "none" }}
      ref={React.useCallback(
        (el: HTMLDivElement | null) => {
          if (!el) {
            return;
          }

          renderPayPalButton(el, {
            planId: props.planId,
          });
        },
        [props.planId]
      )}
    />
  );
};
