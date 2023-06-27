# Dosi vault Example

This is a simple example if how to Dosi vault extension injects the offline signer that is compatible with finschia-js.

![](splash.png)

## Local Development

Install dependencies

```
npm install

```

Run development Server

```
npm run dev
```

For more details see comments on `src/main.js`.

## Chain for test

### Add chain info

Currently, the dosi-vault-example defaults to using local running chains. To change chain information, change local-chain-info.js or change chainInfo in main.js.

### Open CORS in toml

Because dosi-vault uses both rpc and rest, both endpoints must be open for CORS.

Open rpc for CORS in config.toml

```
#######################################################
###       RPC Server Configuration Options          ###
#######################################################
[rpc]

...

# A list of origins a cross-domain request can be executed from
# Default value '[]' disables cors support
# Use '["*"]' to allow any origin
cors_allowed_origins = ["*"]

# A list of methods the client is allowed to use with cross-domain requests
cors_allowed_methods = ["HEAD", "GET", "POST", ]

...
```

Open rest for CORS in app.toml

```
###############################################################################
###                           API Configuration                             ###
###############################################################################

[api]

...

# EnableUnsafeCORS defines if CORS should be enabled (unsafe - use it at your own risk).
enabled-unsafe-cors = true

...
```
