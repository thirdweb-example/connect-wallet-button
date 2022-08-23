import { ConnectWallet } from "@thirdweb-dev/react";

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Connect Wallet Button</h1>
      <p style={{ marginBottom: 24 }}>
        Allow users to connect to your app with the wallet of their choice.
      </p>

      <ConnectWallet accentColor="#f213a4" colorMode="dark" />
    </div>
  );
}
