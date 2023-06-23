/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ChainInfo } from "@keplr-wallet/types";

export const suggestChain = async (chainInfo: ChainInfo) => {
  console.log(`Suggesting chain ${chainInfo.chainId}...`);
  try {
    if (window) {
      // @ts-ignore
      if (window["dosiVault"]) {
        // @ts-ignore
        if (window.dosiVault["experimentalSuggestChain"]) {
          // suggest chain Keplr
          // @ts-ignore
          await window.dosiVault.experimentalSuggestChain(chainInfo);
        } else {
          console.debug("Error access experimental features, please update DOSI Vault");
        }
      } else {
        console.debug("Error accessing DOSI Vault");
      }
    } else {
      console.debug("Error parsing window object");
    }
  } catch (e) {
    console.error("Error suggestChain");
    throw e;
  }
};
