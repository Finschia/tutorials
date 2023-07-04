#!/bin/bash

SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo "Stop chains"
$SCRIPTDIR/finschia/stop.sh
$SCRIPTDIR/finschia2/stop.sh
