# Mission
Create a distinctive DeFi-oriented DApp (if possible) by leveraging our latest feature, the Dynamic Link, within the CosmWasm ecosystem designed to operate on the Finschia testnet.

Finschia, a hub chain powered by the Ostracon consensus engine, presents an ideal platform for the deployment of diverse DApps. While we have witnessed the successful implementation of numerous NFT-related DApps on our chain in the past, we are particularly excited about the potential emergence of innovative DeFi-oriented DApps during this hackathon, which will undoubtedly broaden our horizons.

For this challenge, participants are encouraged to develop a CosmWasm contract. While there are no specific limitations, incorporating advanced features such as the Dynamic Link for inter-contract communication or utilizing the IBC protocol to enable cross-chain DApp functionality will earn additional points. We eagerly await the development of exceptional DeFi-oriented DApps across various domains, including but not limited to Payment, Lending, Decentralized Exchanges (DEX), Liquid Staking, Insurance, Bonds, Credit Rating, Asset Management, Risk Assessment/Management, and Asset Tokenization.

# Requirements
* You must use finschia-SDK & our custom wasm module to develop your CosmWasm contract.
* Your application must run on our testnet.
* Leverage the Dynamic Link & IBC features if you can.
* We value creativity over implementation. However, in the absence of originality, the completeness of the DApp becomes a crucial factor in the evaluation process.

# Resources
## 1. Install the Finschia
```shell
# Option 1) Build from source
git clone --depth 1 --branch v1.0.0-dynamiclink3 git@github.com:Finschia/finschia.git
make install

# Option 2) Use Docker
docker pull finschia/finschianode:1.0.0-dynamiclink3
```

## 2. Using Localnet for Development
We support a single-chain environment, or a dual-chain environment with IBC for development. Please refer to the following [link](https://github.com/Finschia/hackathon/tree/main/localnet) for more information.

## 3. Joining Testnet
Feel free to utilize our predeployed testnet for the development of your DApp. We would prefer to validate your DApp on our testnet before you submit it for judging. Additionally, we would appreciate if you could showcase it later during the judging process.

|          Name           |     Type     | Address                                                      |
| :---------------------: | :----------: | :----------------------------------------------------------- |
|    ibc-base testnet     |   REST API   | https://hackwasm-node.finschia.network:1317                  |
|                         |     gRPC     | https://hackwasm-node.finschia.network:9090                  |
|                         | Ostracon RPC | https://hackwasm-node.finschia.network:26657                 |
| ibc-counterpart testnet |   REST API   | https://hackwasm-ibc-counterpart-node.finschia.network:1317  |
|                         |     gRPC     | https://hackwasm-ibc-counterpart-node.finschia.network:9090  |
|                         | Ostracon RPC | https://hackwasm-ibc-counterpart-node.finschia.network:26657 |

## 4. Useful Links
- [Dashborad](https://fnsadash.finschia.network)
- [Smart Contract Guide](https://docs.finschia.network/smart-contract/introduction)