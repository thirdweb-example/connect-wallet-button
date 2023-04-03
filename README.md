# Connect Wallet Button

This template shows you how you can use our `ConnectWallet` component from our React SDK to allow users to connect their wallet with your app with one of the following wallets:

- MetaMask
- Wallet Connect
- Coinbase Wallet

## Wrap Your Application in the ThirdwebProvider

```jsx
import { ThirdwebProvider } from '@thirdweb-dev/react';

// This is the chainId your dApp will work on.
const activeChain = 'goerli';

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider activeChain={activeChain}>
			<Component {...pageProps} />
		</ThirdwebProvider>
	);
}

export default MyApp;
```

## Use the Connect Wallet Component!

```jsx
import { ConnectWallet } from '@thirdweb-dev/react';

export default function Home() {
	return <ConnectWallet theme='dark' />;
}
```
