#!/bin/bash

# Configure relayer settings and create connection

TEST_MNEMONIC="mind flame tobacco sense move hammer drift crime ring globe art gaze cinnamon helmet cruise special produce notable negative wait path scrap recall have"
COINID=438

RELAYER_CONF="$HOME/.relayer"
SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
ROOTDIR="$(dirname $SCRIPTDIR)"

rm -rf $RELAYER_CONF &> /dev/null

echo "Generating rly configurations..."
rly config init
rly chains add-dir $ROOTDIR/configs/chains

echo "Key $(rly keys restore finschia-0 testkey "$TEST_MNEMONIC" --coin-type $COINID) imported from finschia-0 to relayer..."
echo "Key $(rly keys restore finschia2-0 testkey "$TEST_MNEMONIC" --coin-type $COINID) imported from finschia2-0 to relayer..."

rly paths add-dir $ROOTDIR/configs/paths

rly tx link finschia-finschia -d -t 3s
