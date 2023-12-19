# Keplr Guide

1. [Check if Keplr is installed in Chrome](#check-if-keplr-is-installed-in-chrome)
2. [Activate Keplr](#activate-keplr)
3. [Register New Chain](#register-new-chain)
4. [Sign a Transaction](#sign-a-transaction)
5. [Broadcast a transaction using Keplr](#broadcast-a-transaction-using-keplr)
6. [Integrate with FinschiaJS](#integrate-with-finschiajs)



> This document is a reorganization of the keplr document. Therefore, please refer to [this](https://docs.keplr.app/api/) documentation for information not described here.

## Check if Keplr is installed in Chrome
If [Keplr](https://www.keplr.app) is installed in Chrome, `window` object always includes `keplr` object. Below is an example of checking the `keplr` object.

```js
if(!window.keplr){
    alert("Please install keplr extension");
} else {
    console.log(window.keplr);
}
```

## Activate Keplr
If you confirmed that Keplr is already installed through above process, you can activate Keplr with enable method. It asks to clients whether they allow to use Keplr in that website.

```js
const chainId = "finschia-2";
await window.keplr.enable(chainId);
```

## Register New Chain
You can register new chain on Keplr through `experimentalSuggestchain` method.

```ts
experimentalSuggestChain(chainInfo: ChainInfo): Promise<void>
 
export interface ChainInfo {
  readonly rpc: string;
  readonly rest: string;
  readonly nodeProvider?: {
    readonly name: string;
    readonly email: string;
    readonly website?: string;
  };
  readonly chainId: string;
  readonly chainName: string;
  /**
   * This indicates the type of coin that can be used for stake.
   * You can get actual currency information from Currencies.
   */
  readonly stakeCurrency: Currency;
  readonly walletUrl?: string;
  readonly walletUrlForStaking?: string;
  readonly bip44: BIP44;
  readonly alternativeBIP44s?: BIP44[];
  readonly bech32Config: Bech32Config;
 
  readonly currencies: AppCurrency[];
  /**
   * This indicates which coin or token can be used for fee to send transaction.
   * You can get actual currency information from Currencies.
   */
  readonly feeCurrencies: FeeCurrency[];
 
  /**
   * Indicate the features supported by this chain. Ex) cosmwasm, secretwasm ...
   */
  readonly features?: string[];
 
  /**
   * Shows whether the blockchain is in production phase or beta phase.
   * Major features such as staking and sending are supported on staging blockchains, but without guarantee.
   * If the blockchain is in an early stage, please set it as beta.
   */
  readonly beta?: boolean;
 
  readonly chainSymbolImageUrl?: string;
}
```

Below is the example code for `experimentalSuggestChain`

```ts
await window.keplr.experimentalSuggestChain({
    chainId: "finschia-2",
    chainName: "Finschia",
    rpc: "https://finschia-rpc.finschia.io/",
    rest: "https://finschia-api.finschia.io",
    bip44: {
        coinType: 438,
    },
    bech32Config: {
        bech32PrefixAccAddr: "link",
        bech32PrefixAccPub: "linkpub",
        bech32PrefixValAddr: "linkvaloper",
        bech32PrefixValPub: "linkvaloperpub",
        bech32PrefixConsAddr: "linkvalcons",
        bech32PrefixConsPub: "linkvalconspub",
    },
    currencies: [
        {
            coinDenom: "FNSA",
            coinMinimalDenom: "cony",
            coinDecimals: 6,
            coinGeckoId: "link",
        },
    ],
    feeCurrencies: [
        {
            coinDenom: "FNSA",
            coinMinimalDenom: "cony",
            coinDecimals: 6,
            coinGeckoId: "link",
            gasPriceStep: {
                low: 0.01,
                average: 0.025,
                high: 0.04,
            },
        },
    ],
    stakeCurrency: {
        coinDenom: "FNSA",
        coinMinimalDenom: "cony",
        coinDecimals: 6,
        coinGeckoId: "link",
    },
});
```

## Sign a Transaction
 Keplr provides the signDirect method for signing a transaction. If you're wondering how to make a signDoc, see [this](https://docs.finschia.network/node-management/interaction-with-finschia/using-javascript#create-a-transaction) content.

```ts
// window.keplr.signDirect
signDirect(chainId:string, signer:string, signDoc: {
    /** SignDoc bodyBytes */
    bodyBytes?: Uint8Array | null;

    /** SignDoc authInfoBytes */
    authInfoBytes?: Uint8Array | null;

    /** SignDoc chainId */
    chainId?: string | null;

    /** SignDoc accountNumber */
    accountNumber?: Long | null;
  }): Promise<DirectSignResponse>

```

## Broadcast a transaction using Keplr
Keplr provides sendTx method for broadcasting a transaction. This method returns the hash value of the transaction if it's broadcasted successfully and returns error if not. If you're wondering how to make a tyBytes, see [this](https://docs.finschia.network/node-management/interaction-with-finschia/using-javascript#create-a-transaction) content.

```ts
// window.keplr.sendTx
sendTx(
    chainId: string,
    tx: Uint8Array,
    mode: BroadcastMode
): Promise<Uint8Array>;

```

## Use with FinschiaJS
You can use `FinschiaJS` to send a transaction instead of the built-in `sendTx` method in Keplr. `@finschia/finschia` provides [FinschiaClient](https://github.com/Finschia/finschia-js/blob/175cb196819837010d425d8c7c794723e306f181/packages/finschia/src/finschiaclient.ts#L136) and [SigningFinschiaClient](https://github.com/Finschia/finschia-js/blob/main/packages/finschia/src/signingfinschiaclient.ts#L104). See detail usage of SigningFinschiaClient [here](https://github.com/Finschia/finschia-js/blob/main/packages/finschia/src/signingfinschiaclient.spec.ts).

```ts
const offlineSigner = window.keplr.getOfflineSigner(chainId);
 
// Initialize the finschia api with the offline signer that is injected by keplr extension.
const signingFinschiaClient = new SigningFinschiaClient.connectWithSigner(
    "https://finschia-rpc.finschia.io",
    offlineSigner,
);
```