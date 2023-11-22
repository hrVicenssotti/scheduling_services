const crypto = require('crypto');
const { writeFileSync, existsSync } = require('fs');

if (!existsSync('private_key.key') || !existsSync('public_key.key')) {
    const keys = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        }
    });

    writeFileSync('private_key.key', keys.privateKey);
    writeFileSync('public_key.key', keys.publicKey);

    console.log('New key pair generated\n');
}
