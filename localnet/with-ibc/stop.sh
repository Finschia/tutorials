#!/bin/bash

SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo "Stop relayer"
$SCRIPTDIR/relayer/stop.sh

echo "Stop chains"
$SCRIPTDIR/scripts/stop-chains.sh
