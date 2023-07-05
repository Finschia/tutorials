#!/usr/bin/env bash

if [[ ! -x "$(which rly)" ]]; then
  SRC_DIR=$HOME/rlysrc
  rm -rf "$SRC_DIR" > /dev/null 2>&1
  git clone --depth 1 --branch v2.3.1 https://github.com/cosmos/relayer.git "$SRC_DIR" > /dev/null 2>&1
  cd "$SRC_DIR" || exit
  make install
  printf "IBC Relayer is installed:\n%s" "$(rly version)"
fi

ROOT_DIR="$HOME/.relayer"
CONFIG_DIR="$HOME/rly-config"
RLYCHAIN_DIR="$CONFIG_DIR/chains"
RLYPATH_DIR="$CONFIG_DIR/paths"

rm -rf "$ROOT_DIR" > /dev/null 2>&1
mkdir -p "$CONFIG_DIR"
mkdir -p "$RLYCHAIN_DIR"
mkdir -p "$RLYPATH_DIR"

curl -o "$RLYCHAIN_DIR"/finschia-ibc-base.json https://raw.githubusercontent.com/Finschia/hackathon/main/configs/relayer/chains/finschia-ibc-base.json
curl -o "$RLYCHAIN_DIR"/finschia-ibc-counterpart.json https://raw.githubusercontent.com/Finschia/hackathon/main/configs/relayer/chains/finschia-ibc-counterpart.json
curl -o "$RLYPATH_DIR"/base-counterpart.json https://raw.githubusercontent.com/Finschia/hackathon/main/configs/relayer/paths/hackathon.json

rly config init
rly chains add-dir "$RLYCHAIN_DIR"

echo "> Enter your bip39 mnemonic"
read -r mnemonic

rly k r finschia-ibc-base rly1 "${mnemonic}" --coin-type 438
rly k r finschia-ibc-counterpart rly1 "${mnemonic}" --coin-type 438

rly paths add-dir "$RLYPATH_DIR"

sed -i 's/api-listen-addr: :5183/api-listen-addr: :26660/g' "$HOME/.relayer/config/config.yaml"
