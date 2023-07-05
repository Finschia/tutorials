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

echo "Configure relayer and create connection"
$SCRIPTDIR/scripts/configure-relayer.sh

echo "Show connections between finschia-0 and finschia2-0"
rly q channels finschia-0 finschia2-0

echo "Start relayer"
$SCRIPTDIR/relayer/start.sh
