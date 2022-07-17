import { Form, Outlet } from "@remix-run/react";

import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { useActionData } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
  console.log(request);
  const body = await request.formData();
  console.log(body);
  return json({ message: `Hello!` });
};

export default () => {
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
      <Form action="/donate" method="post">
        <button name="donation" type="submit" value="5">
          Give $5/month
        </button>
        <button name="donation" type="submit" value="10">
          Give $10/month
        </button>
        <button name="donation" type="submit" value="15">
          Give $15/month
        </button>
        <button name="donation" type="submit" value="custom">
          Custom amount
        </button>
      </Form>
      Prefer a one off? Click here to switch &lt;3
    </div>
  );
};
