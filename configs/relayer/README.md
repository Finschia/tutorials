# Setup
```sh
# Install the relayer
git clone --depth 1 --branch v2.3.1 https://github.com/cosmos/relayer.git
make install

# Setup the relayer configs
curl -o rly-setup.sh https://raw.githubusercontent.com/Finschia/hackathon/main/configs/relayer/setup.sh
chmod +x rly-setup.sh
./rly-setup.sh


# Run the relayer
## Option 1. - Only when make a IBC connection at first
rly link-then-start
## Option 2. - Start the relayer when the IBC connection is already made
rly start

# Health Check
rly version # v2.3.1
rly chains list
rly paths show <path_name>
```