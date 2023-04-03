import { ConnectWallet } from '@thirdweb-dev/react';
import CodeSnippet from '../components/DemoCodeSnippet';
import styles from '../styles/Home.module.css';
import React from 'react';

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>Connect Wallet Button</h1>
				<p style={{ marginBottom: 24 }}>
					Allow users to connect to your app with the wallet of their choice.
				</p>
			</div>

			<ConnectWallet
				theme='dark'
				dropdownPosition={{
					align: 'center',
					side: 'bottom',
				}}
			/>

			<hr className={`${styles.divider} ${styles.spacerTop}`} />

			<h2>Code Snippet</h2>

			<CodeSnippet
				text={`\
<ConnectWallet
  theme='dark'
  dropdownPosition={{
    align: 'center',
    side: 'bottom',
  }}
/>`}
			/>
		</div>
	);
}
