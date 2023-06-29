# DOSI Vault Guide

1. [Check if DOSI Vault is installed in Chrome](#check-if-dosi-vault-is-installed-in-chrome)
2. [Activate DOSI Vault](#activate-dosi-vault)
3. [Register New Chain](#register-new-chain)
4. [Sign a Transaction](#sign-a-transaction)
5. [Broadcast a transaction using DOSI Vault](#broadcast-a-transaction-using-dosi-vault)
6. [Integrate with FinschiaJS](#integrate-with-finschiajs)



> DOSI Valut was forked from Keplr. Therefore, please refer to [this](https://docs.keplr.app/api/) documentation for information not described here.

## Check if DOSI Vault is installed in Chrome
If DOSI Valut is installed in Chrome, `window` object always includes `dosiVault` object. Below is an example of checking the `dosiVault` object.

```js
if(!window.dosiVault){
    alert("Please install dosi vault extension");
} else {
    console.log(window.dosiVault);
}
```

## Activate DOSI Vault
If you confirmed that DOSI Vault is already installed through above process, you can activate DOSI Vault with enable method. It asks to clients whether they allow to use DOSI Valut in that website.

```js
const chainId = "finschia";
await window.dosiVault.enable(chainId);
```

## Register New Chain
You can register new chain on DOSI Vault through `experimentalSuggestchain` method.

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
await window.dosiVault.experimentalSuggestChain({
    chainId: "finschia-2",
    chainName: "Finschia",
    rpc: "http://123.456.789.012:26657",
    rest: "http://123.456.789.012:1317",
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
 DOSI Vault provides the signDirect method for signing a transaction. If you're wondering how to make a signDoc, see [this](https://docs.finschia.network/node-management/interaction-with-finschia/using-javascript#create-a-transaction) content.

```ts
// window.dosiVault.signDirect
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

## Broadcast a transaction using DOSI Vault
DOSI Vault provides sendTx method for broadcasting a transaction. This method returns the hash value of the transaction if it's broadcasted successfully and returns error if not. If you're wondering how to make a tyBytes, see [this](https://docs.finschia.network/node-management/interaction-with-finschia/using-javascript#create-a-transaction) content.

```ts
// window.dosiVault.sendTx
sendTx(
    chainId: string,
    tx: Uint8Array,
    mode: BroadcastMode
): Promise<Uint8Array>;

```

## Use with FinschiaJS
You can use `FinschiaJS` to send a transaction instead of the built-in `sendTx` method in DOSI Vault. `@finschia/finschia` provides [FinschiaClient](https://github.com/Finschia/finschia-js/blob/175cb196819837010d425d8c7c794723e306f181/packages/finschia/src/finschiaclient.ts#L136) and [SigningFinschiaClient](https://github.com/Finschia/finschia-js/blob/main/packages/finschia/src/signingfinschiaclient.ts#L104). See detail usage of SigningFinschiaClient [here](https://github.com/Finschia/finschia-js/blob/main/packages/finschia/src/signingfinschiaclient.spec.ts).

```ts
const offlineSigner = window.dosiVault.getOfflineSigner(chainId);
 
// Initialize the finschia api with the offline signer that is injected by dosi vault extension.
const signingFinschiaClient = new SigningFinschiaClient.connectWithSigner(
    "http://123.456.789.012:26657",
    offlineSigner,
);
```