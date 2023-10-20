
# @jinx_ark/rsa-crypto-js

This library provides RSA cryptographic functions. Use this library to encrypt/decrypt the message.
Also you can generate private/public key using one of the function.


## Installation

Installation is done using the npm install command:

```bash
  $ npm install @jinx_ark/rsa-crypto-js
```

## Usage/Examples

To generate key, use the below code:
```javascript
import { generateKey } from '@jinx_ark/rsa-crypto-js';

generateKey(
    key => {
        setKey(key);
    }, { modulusLength: 2048, hashName: 'SHA-256' }
);
```
```javascript
Syntax: generaeKey(cb, {config(obj)})
config: {
    modulusLength: <it can be 1024, 2048, or 4096>,
    hashName: <it can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512">
}
```

To encrypt the data, use the below code:
```javascript
import { encryptRSA } from '@jinx_ark/rsa-crypto-js';

encryptRSA(data => {
    console.log('encrypted data: ', data);
}, config)
```
```javascript
Syntax: encryptRSA(cb, config)
config: {
    publicKey: <your generated pubickey>,
    data: <string>
}
```

To decrypt the data, use the below code:
```javascript
import { encryptRSA } from '@jinx_ark/rsa-crypto-js';

decryptRSA(data => {
    console.log('encrypted data: :::', data);
    setDecryptedData(data);
}, config)
```
```javascript
Syntax: decryptRSA(cb, config)
config: {
    privateKey: <your generated private-key>,
    data: <string>
}
```
## Features

- Generate private and public key
- Encrypt/decrypt the data(string)


## Authors

- [@Rajkumar J](https://github.com/rajkumar004)
