import { ChainInfo } from "@keplr-wallet/types";

const linkCurrency = {
  coinDenom: "FNSA",
  coinMinimalDenom: "cony",
  coinDecimals: 6,
  coinGeckoId: "link",
};

const linkBip44 = { coinType: 438 };
const linkPriceStep = { low: 0.015, average: 0.015, high: 0.015 };

export const chainInfo: ChainInfo = {
  chainId: "finschia-2",
  chainName: "Finschia",
  rpc: "https://dsvt-finschia-api.line-apps.com",
  rest: "https://dsvt-finschia.line-apps.com", // no usage
  walletUrl: "https://scan.blockchain.line.me/Finschia%20Mainnet",
  stakeCurrency: linkCurrency,
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
  features: ["cosmwasm"],
  feeCurrencies: [{ ...linkCurrency, gasPriceStep: linkPriceStep }],
};
