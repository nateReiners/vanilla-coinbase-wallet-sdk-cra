import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';

const sdk = new CoinbaseWalletSDK({appName: 'Example Dapp w/ Vanilla SDK'})

const provider = sdk.makeWeb3Provider()

export default provider;