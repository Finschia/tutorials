DOCKER_HOST_IP=$(docker run --read-only --rm alpine ip route | awk 'NR==1 {print $3}'); \
FAUCET_ADDRESS_PREFIX=link \
FAUCET_TOKENS=cony \
FAUCET_CREDIT_AMOUNT_CONY=10000000 \
FAUCET_REFILL_FACTOR=10 \
FAUCET_REFILL_THRESHOLD=1 \
FAUCET_GAS_PRICE=0.1utoy \
FAUCET_CONCURRENCY=3 \
FAUCET_PATH_PATTERN="m/44'/438'/2'/0/a" \
FAUCET_MNEMONIC="answer thing blossom wife popular afraid argue rack yellow ride safe chunk music gate abuse idle render refuse assume uncover human say energy include" \
docker run --read-only --rm -d \
-e FAUCET_ADDRESS_PREFIX \
-e FAUCET_TOKENS \
-e FAUCET_CONCURRENCY \
-e FAUCET_CREDIT_AMOUNT_CONY \
-e FAUCET_REFILL_FACTOR \
-e FAUCET_REFILL_THRESHOLD \
-e FAUCET_GAS_PRICE \
-e FAUCET_MNEMONIC \
-e FAUCET_PATH_PATTERN \
-p 8000:8000 \
--platform=linux/amd64 \
confio/faucet:0.29.0 \
start "$DOCKER_HOST_IP:26657"
#start "192.168.0.53:26657"
#start "http://$DOCKER_HOST_IP:1317"
