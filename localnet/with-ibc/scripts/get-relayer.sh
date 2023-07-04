#!/bin/bash

# Download and Build Relayer

RELAYER_VERSION="v2.3.1"

RELAYER_CONF="$HOME/.relayer"
SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
RELAYER_DIR="$(dirname $SCRIPTDIR)/relayer-code/relayer"

rm -rf $RELAYER_CONF &> /dev/null

git clone --branch "$RELAYER_VERSION" https://github.com/cosmos/relayer.git $RELAYER_DIR

cd $RELAYER_DIR

echo "Building Relayer..."
make install

rly version
