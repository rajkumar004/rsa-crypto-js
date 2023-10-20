const { generateKey } = require(".");

generateKey((key) => {
	console.log(key.publicKey);
	console.log(key.privateKey);
});