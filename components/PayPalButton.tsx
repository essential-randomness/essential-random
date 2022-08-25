import { PayPalNamespace, loadScript } from "@paypal/paypal-js";

import React from "react";

const CLIENT_ID =
  "AbYamsrG5_XYxgwQm3wrH4rsCeveTZZFmDrjbxD4QjsWbitArq9DZNpJs19I3bGWyrESPWfdqYKP-6Lu";

const renderPayPalButton = async (
  button: HTMLDivElement,
  options: {
    planId: string;
  }
) => {
  let paypal: PayPalNamespace;
  if (!window.paypal) {
    paypal = (await loadScript({
      "client-id": CLIENT_ID,
      vault: true,
      intent: "subscription",
    })) as PayPalNamespace;
  }
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
        return actions.subscription.create({
          plan_id: options.planId,
          quantity: "30", // The quantity of the product for a subscription
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
