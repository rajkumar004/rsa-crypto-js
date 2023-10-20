const { str2ab, ab2str } = require("./utils");

async function generateKey(cb, config) { // config = {modulusLength, hashName}
	const { publicKey, privateKey } = await window.crypto.subtle.generateKey(
		{
			name: "RSA-OAEP",
			modulusLength: config.modulusLength || 2048, // can be 1024, 2048, or 4096
			publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
			hash: { name: config.hashName || "SHA-256" }, // can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
		},
		true, // whether the key is extractable (i.e. can be used in exportKey)
		["encrypt", "decrypt"] // can be any combination of "encrypt" and "decrypt"
	);

	cb({ publicKey, privateKey });
}

async function encryptRSA(cb, config) { // config = {publicKey, data(string)}
	const encryptedData = await window.crypto.subtle.encrypt(
		{
			name: "RSA-OAEP",
		},
		config.publicKey, // from generateKey or importKey above
		str2ab(config.data) // ArrayBuffer of data you want to encrypt
	);

	cb(ab2str(encryptedData));
}

async function decryptRSA(cb, config) { // config = {privateKey, data(string)}
	const decryptedData = await window.crypto.subtle.decrypt(
		{
			name: "RSA-OAEP",
		},
		config.privateKey, // from generateKey or importKey above
		str2ab(config.data) // ArrayBuffer of the data
	);

	cb(ab2str(decryptedData));
}

module.exports = { generateKey, encryptRSA, decryptRSA };