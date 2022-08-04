export const SupportMeCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Essential Randomness is Creating a Better Fandom Web</h2>
      <p>Here's a description of what I'm doing. In short, I need $$$.</p>
      <form method="post">
        <button>Give $5/month</button>
        <button>Give $10/month</button>
        <button>Give $15/month</button>
        <button>Custom amount</button>
      </form>
      Prefer a one off? Click here to switch &lt;3
    </div>
  );
};
