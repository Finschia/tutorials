#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

SCRIPT_DIR="$(realpath "$(dirname "$0")")"
# shellcheck source=env
source "${SCRIPT_DIR}"/env

TMP_DIR=$(mktemp -d "${TMPDIR:-/tmp}/fnsa.XXXXXXXXX")
chmod 777 "$TMP_DIR"
echo "Using temporary dir $TMP_DIR"
RELAYER_LOGFILE="$TMP_DIR/relayer.log"

docker run \
  --name "$CONTAINER_NAME" \
  --mount type=bind,source="$SCRIPT_DIR/template",target=/template \
  "$REPOSITORY:$VERSION" \
  /template/run_relayer.sh \
  >"$RELAYER_LOGFILE" 2>&1 &

echo "relayer running and logging into $RELAYER_LOGFILE"

if [ -n "${CI:-}" ]; then
  # Give process some time to come alive. No idea why this helps. Needed for CI.
  sleep 0.5

  # Follow the logs in CI's background job
  tail -f "$RELAYER_LOGFILE"
fi
