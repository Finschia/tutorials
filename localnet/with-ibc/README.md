# Local finschia nodes with IBC development network

### Requirements

- Required: docker, jq

## Starting the blockchain

### Run with docker

```shell
# Start the Finschia nodes and IBC relayer
./start.sh

# Stop the Finschia nodes and IBC relayer
./stop.sh
```

## How to change and generate default genesis and configurations

1. change the docker image you want in the `./[finsciha or finschia2]/env` file.
2. cd `./[finsciha or finschia2]/template`.
3. execute `setup.sh docker`.
4. check the difference of `app.toml`, `client.toml`, `config.toml` and
   `genesis.json` in the `./[finsciha or finschia2]/template/.finschia/config` directory
   and select the code you want.

## Accounts

Through setup.sh, 11 accounts added to genesis. Every accounts are derived from same mnemonic (`mind flame tobacco sense move hammer drift crime ring globe art gaze cinnamon helmet cruise special produce notable negative wait path scrap recall have`) and every accounts have same amount of balances (`100000000000[cony or brown],20000000000stake`). finschia uses cony and finschia2 uses brown as minimum denom.

- 1 validator account : hdpath(44/438/1/0/0)
- 9 ordinary account: hdpath(44/438/0/0/0~8)
- 1 multisig account: multisig of account0,account1,account2,account3,account4 and threshold is 2.
