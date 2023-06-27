const linkCurrency = {
  coinDenom: "FNSA",
  coinMinimalDenom: "cony",
  coinDecimals: 6,
  coinGeckoId: "link",
};

const linkBip44 = { coinType: 438 };
const linkPriceStep = { low: 0.015, average: 0.015, high: 0.015 };

export const chainInfo = {
  chainId: "simd-testing",
  chainName: "simd-testing",
  rpc: "http://localhost:26557",
  rest: "http://localhost:1318",
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
