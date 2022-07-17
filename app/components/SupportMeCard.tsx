import type { ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { json } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { useActionData } from "@remix-run/react";

export const SupportMeCard = () => {
  const data = useActionData();
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Essential Randomness is Creating a Better Fandom Web</h2>
      <p>Here's a description of what I'm doing. In short, I need $$$.</p>
      <Form method="post">
        <button>Give $5/month</button>
        <button>Give $10/month</button>
        <button>Give $15/month</button>
        <button>Custom amount</button>
      </Form>
      Prefer a one off? Click here to switch &lt;3
    </div>
  );
};
