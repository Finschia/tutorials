# Setup
```sh
# Setup the relayer configs
curl -o rly-setup.sh https://raw.githubusercontent.com/Finschia/hackathon/main/configs/relayer/setup.sh
chmod +x rly-setup.sh
./rly-setup.sh


# Run the relayer
## Option 1. - Only when make a IBC connection at first
rly transact link-then-start <path_name>
fnsad query ibc connection path <client_id> # Get the connection ID
fnsad query ibc channel connections <connection_id> # Get the channel ID

## Option 2. - Start the relayer when the IBC connection is already made
rly start

# Health Check
rly version # v2.3.1
rly chains list
rly paths show <path_name>
```