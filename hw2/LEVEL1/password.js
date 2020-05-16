const crypto = require('crypto');
const salt = crypto.randomBytes(32).toString('hex');

const encrypt = (salt, password) => {
    crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512', (err, derivedKey) => {
        if (err) throw err;
        const hashed = derivedKey.toString('hex');
        console.log('hashed : ', hashed);

        fs.writeFile(`hashed.txt`, hashed, (err, data) => {
            console.log("made hashed.txt");
            if (err) return console.log("writing error");
        });
    });
}

const fs = require('fs');
fs.readFile(`password.txt`, (err, data) => {
    console.log(`read pwd txt\n`);
    if (err) return console.log(err.message);
    const password = data;
    console.log('password : ', data);

    encrypt(salt, password);
});