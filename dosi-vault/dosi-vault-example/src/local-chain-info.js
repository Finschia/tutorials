export const linkCurrency = {
  coinDenom: "FNSA",
  coinMinimalDenom: "cony",
  coinDecimals: 6,
  coinGeckoId: "link",
};

// FINSCHIA's coin type is 438.
// https://github.com/satoshilabs/slips/blob/3e7b1032daf6194cde5a243e17ba1f02d8f11f66/slip-0044.md?plain=1#L469
export const linkBip44 = { coinType: 438 };
export const linkPriceStep = { low: 0.01, average: 0.025, high: 0.03 };

export const chainInfo = {
  chainId: "simd-testing",
  chainName: "simd-testing",
  rpc: "localhost:26657",
  rest: "http://localhost:1317",
  bip44: linkBip44,
  bech32Config: {
    bech32PrefixAccAddr: "link",
    bech32PrefixAccPub: "linkpub",
    bech32PrefixValAddr: "linkvaloper",
    bech32PrefixValPub: "linkvaloperpub",
    bech32PrefixConsAddr: "linkvalcons",
    bech32PrefixConsPub: "linkvalconspub",
  },
  currencies: [linkCurrency],
  feeCurrencies: [{ ...linkCurrency, gasPriceStep: linkPriceStep }],
  stakeCurrency: linkCurrency,
  features: ["cosmwasm"],
};
