#!/bin/bash

SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

if [[ ! -x "$(which jq)" ]]; then
  echo "jq (a tool for parsing json in the command line) is required..."
  echo "https://stedolan.github.io/jq/download/"
  exit 1
fi

if [[ ! -x "$(which rly)" ]]; then
  echo "Relayer is required..."
  $SCRIPTDIR/scripts/get-relayer.sh
fi

echo "Start chains"
$SCRIPTDIR/scripts/start-chains.sh

echo "Start relayer"
$SCRIPTDIR/relayer/start.sh
