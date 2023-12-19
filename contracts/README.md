# CosmWasm Smart contract Samples

Collection of samples to help you develop smart contracts on Finschia.

## Samples

### Introduction to CosmWasm
* [Hello World](https://github.com/athena-consulting/cosmwasm-by-example/tree/main/hello-world): This smart contract provides an implementation for querying a "Hello World" message.
* [Counter](https://github.com/athena-consulting/cosmwasm-by-example/tree/main/counter): Counter base smart contract that allows for counter increment and reset.
* [Primitives](https://github.com/athena-consulting/cosmwasm-by-example/tree/main/primitives): Early introduction to some primitive variables in CosmWasm and how they work.
* [Variables in Cosmwasm](https://github.com/athena-consulting/cosmwasm-by-example/tree/main/variables): An overview of state and global variables within CosmWasm and methods to access them.
* [Smart Contract Initialization](https://github.com/athena-consulting/cosmwasm-by-example/tree/main/instantiation): This document elucidates the instantiation process of a smart contract. It discusses the InstantiateMsg structure passed during contract creation and the instantiate function that runs upon contract execution.
* [Send Native Tokens](https://github.com/athena-consulting/cosmwasm-by-example/tree/main/send-tokens): This document outlines a smart contract designed to send a blockchain's native tokens to a recipient specified by the original sender in the execute message.
* [Read-Write State](https://github.com/athena-consulting/cosmwasm-by-example/tree/main/read-write-state): Smart contract that explains the basics of reading and writing to the state in a smart contract.
* [Responses and Attributes in Cosmwasm](https://github.com/athena-consulting/cosmwasm-by-example/tree/main/responses-attributes): Smart contract that explains the basics of responses and attributes. 
* [Cosmwasm Maths Operations](https://github.com/athena-consulting/cosmwasm-by-example/tree/main/cosmwasm-math): This is a example of a CosmWasm contract that implements simple maths operations like addition, substraction, multiplication, division, modulo and exponential.
* [Receive CW20 Tokens in Your Contract](https://github.com/athena-consulting/cosmwasm-by-example/tree/main/recieving-cw20-tokens): An example of a CosmWasm contract that implements the Cw20 Receiver Interface.

### Application Samples
* [Timelock](https://github.com/athena-consulting/cosmwasm-by-example/tree/main/timelock): Timelock is a smart contract that introduces a delay mechanism for executing function calls on other smart contracts.
* [English-Auction Contract](https://github.com/athena-consulting/cosmwasm-by-example/tree/main/dutch-auction): The Dutch Auction Contract is a smart contract implementation that enables the creation and execution of Dutch Auctions. 
* [Crowdfunding Contract](https://github.com/athena-consulting/cosmwasm-by-example/tree/main/crowdfunding): Crowdfunding contract that enables users to fund projects, but only if they reach their funding goals by a set deadline.
* [Vault Contract](https://github.com/athena-consulting/cosmwasm-by-example/tree/main/token-vault): This contract represents a vault that allows users to deposit and withdraw tokens. It uses the cw20 token standard and maintains a mapping of user balances.

* [Constant Sum AMM](https://github.com/athena-consulting/cosmwasm-by-example/tree/main/constant-sum-amm): This contract is a Constant sum automatic market maker (AMM) for the CosmWasm smart contract engine.
* [Constant Product AMM](https://github.com/athena-consulting/cosmwasm-by-example/tree/main/constant-product-amm): This contract is a Constant product automatic market maker (AMM) for the CosmWasm smart contract engine.

* [CosmWasm Quadratic Funding](https://github.com/deus-labs/cw-contracts/tree/main/contracts/cw-quadratic-funding): Quadratic Funding Round Contract
* [To Do List](https://github.com/deus-labs/cw-contracts/tree/main/contracts/cw-to-do-list): A simple To-Do List contract
* [Escrow](https://github.com/deus-labs/cw-contracts/tree/main/contracts/escrow): This is a simple single-use escrow contract.
* [Voting](https://github.com/deus-labs/cw-contracts/tree/main/contracts/voting): This is a simple voting contract.

### CW20 Samples
* [CW20 Basic](https://github.com/CosmWasm/cw-plus/tree/main/contracts/cw20-base): This is a basic implementation of a cw20 contract.
* [CW20 Pot](https://github.com/deus-labs/cw-contracts/tree/main/contracts/cw20-pot): This project demonstrates a basic smart contract utilizing cw20 contract. Collected cw20 tokens in smart contract's balance is released to a target address after token amount exceeds a specified amount set during instantiation.
* [Atomic Swaps](https://github.com/CosmWasm/cw-tokens/tree/main/contracts/cw20-atomic-swap): This is a contract that allows users to execute atomic swaps. It implements one side of an atomic swap.
* [CW20 Bonding curve](https://github.com/CosmWasm/cw-tokens/tree/main/contracts/cw20-bonding): This builds on the Basic CW20 interface as implemented in cw20-base. 
* [CW20 Escrow](https://github.com/CosmWasm/cw-tokens/tree/main/contracts/cw20-escrow): This is an escrow meta-contract that allows multiple users to create independent escrows. Each escrow has a sender, recipient, and arbiter. It also has a unique id (for future calls to reference it) and an optional timeout.
* [CW20 Merkle Airdrop](https://github.com/CosmWasm/cw-tokens/tree/main/contracts/cw20-merkle-airdrop): This is a merkle airdrop smart contract that works with cw20 token specification Mass airdrop distributions made cheap and efficient.
* [Staking Derivatives](https://github.com/CosmWasm/cw-tokens/tree/main/contracts/cw20-staking): This is a sample contract that releases a minimal form of staking derivatives. This is to be used for integration tests and as a foundation for other to build more complex logic upon.
* [CW20 Streams](https://github.com/CosmWasm/cw-tokens/tree/main/contracts/cw20-streams): This contract enables the creation of cw20 token streams, which allows a cw20 payment to be vested continuously over time.

### CW721 Samples
* [CW721 Basic](https://github.com/CosmWasm/cw-nfts/tree/main/contracts/cw721-base): This is a basic implementation of a cw721 NFT contract.
* [CW721 Fixed Price](https://github.com/CosmWasm/cw-nfts/tree/main/contracts/cw721-fixed-price): This contract enables the creation of limited edition fixed price NFTs according to the cw721 token standard.
* [CW721 Metadata Onchain](https://github.com/CosmWasm/cw-nfts/tree/main/contracts/cw721-metadata-onchain): NFT creators may want to store their NFT metadata on-chain so other contracts are able to interact with it. With CW721-Base in CosmWasm, we allow you to store any data on chain you wish, using a generic extension: T.
* [SBT](https://github.com/CosmWasm/cw-nfts/tree/main/contracts/cw721-non-transferable): This is an implementation of the SBT contract.
* [CW-2981 Token-level Royalties](https://github.com/CosmWasm/cw-nfts/tree/main/contracts/cw2981-royalties): An example of porting EIP-2981 to implement royalties at a token mint level.

## CosmWasm Projects
These projects/contracts are developed and maintained by CosmWasm community.

* [DAO DAO](https://github.com/DA0-DA0/dao-contracts): DAO DAO is the leading software to build your own DAO on CosmWasm chains, quickly surpassing Aragon in functionality.
* [Mars Protocol](https://github.com/mars-protocol/v1-core): Delphi's "Mars Protocol" is the leading lending protocol on Terra, Osmosis, and soon launching on Neutron.
