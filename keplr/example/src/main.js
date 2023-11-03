import { assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import { SigningFinschiaClient, FinschiaClient } from "@finschia/finschia";
import { TxRaw } from "@finschia/finschia-proto/cosmos/tx/v1beta1/tx";

import { chainInfo, linkCurrency } from "./local-chain-info";

window.onload = async () => {
  if (!window.keplr) {
    alert("Please install keplr extension");
  } else {
    if (window.keplr.experimentalSuggestChain) {
      try {
        await window.keplr.experimentalSuggestChain(chainInfo);
      } catch {
        alert("Failed to suggest the chain");
      }
    } else {
      alert("Please use the recent version of keplr extension");
    }
  }

  await window.keplr.enable(chainInfo.chainId);
};

function getInputData() {
  let recipient = document.sendForm.recipient.value;
  let amount = document.sendForm.amount.value;

  amount = parseFloat(amount);
  if (isNaN(amount)) {
    alert("Invalid amount");
    return false;
  }

  amount *= 1000000;
  amount = Math.floor(amount);

  return { recipient, amount };
}

function submitOnClicked(e) {
  const { recipient, amount } = getInputData();
  const amountFinal = {
    denom: linkCurrency.coinMinimalDenom,
    amount: amount.toString(),
  };
  const fee = {
    amount: [
      {
        denom: linkCurrency.coinMinimalDenom,
        amount: "5000",
      },
    ],
    gas: "200000",
  };

  const buttonId = e.target.id;

  if (buttonId === "Broadcast-with-finschia-js") {
    (async () => {
      await window.keplr.enable(chainInfo.chainId);
      const offlineSigner = window.keplr.getOfflineSigner(
        chainInfo.chainId
      );
      const accounts = await offlineSigner.getAccounts();

      const client = await SigningFinschiaClient.connectWithSigner(
        chainInfo.rpc,
        offlineSigner
      );

      const result = await client.sendTokens(
        accounts[0].address,
        recipient,
        [amountFinal],
        fee,
        ""
      );
      assertIsDeliverTxSuccess(result);

      if (result.code !== undefined && result.code !== 0) {
        alert("Failed to send tx: " + result.log || result.rawLog);
      } else {
        alert("Succeed to send tx:" + result.transactionHash);
      }
    })();
  } else if (buttonId === "Broadcast-with-keplr") {
    (async () => {
      await window.keplr.enable(chainInfo.chainId);
      const offlineSigner = window.keplr.getOfflineSigner(
        chainInfo.chainId
      );
      const accounts = await offlineSigner.getAccounts();

      const client = await SigningFinschiaClient.offline(offlineSigner);

      const queryClient = await FinschiaClient.connect(chainInfo.rpc);
      const accountOnChain = await queryClient.getAccount(accounts[0].address);

      const sendMsg = {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: {
          fromAddress: accounts[0].address,
          toAddress: recipient,
          amount: [amountFinal],
        },
      };

      const txRaw = await client.sign(
        accounts[0].address,
        [sendMsg],
        fee,
        "for broadcasting with keplr",
        {
          accountNumber: accountOnChain.accountNumber,
          sequence: accountOnChain.sequence,
          chainId: chainInfo.chainId,
        }
      );
      const txBytes = TxRaw.encode(txRaw).finish();

      const result = await window.keplr.sendTx(
        chainInfo.chainId,
        txBytes,
        "sync"
      );
      alert("Succeed to send tx:" + Buffer.from(result).toString("hex"));
    })();
  }

  return false;
}

document.getElementById("Broadcast-with-finschia-js").onclick = submitOnClicked;
document.getElementById("Broadcast-with-keplr").onclick = submitOnClicked;
