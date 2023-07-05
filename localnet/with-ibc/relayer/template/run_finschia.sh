#!/bin/sh
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

# cp -R "/template/.relayer" /root/.relayer
# mkdir -p /root/log
rly start --home /template/.relayer
