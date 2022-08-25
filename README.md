# Connect Wallet Button

This template shows you how you can use our `ConnectWallet` component from our React SDK to allow users to connect their wallet with your app.

## Wrap Your Application in the ThirdwebProvider

```jsx
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
```

## Use the Connect Wallet Component!

```jsx
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Home() {
  return (
      <ConnectWallet accentColor="#f213a4" colorMode="dark" />
  );
}
```
