#!/bin/bash

# Stop two chains

SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
ROOTDIR="$(dirname $SCRIPTDIR)"

FINSCHIA_DIR="$ROOTDIR/finschia"
FINSCHIA2_DIR="$ROOTDIR/finschia2"

$FINSCHIA_DIR/stop.sh
$FINSCHIA2_DIR/stop.sh
