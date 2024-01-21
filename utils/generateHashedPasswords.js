const argon2 = require('argon2')
const crypto = require('crypto')

module.exports =(password) => {
  return new Promise((res, rej) => {
    crypto.randomBytes(32, async (err, buf) => {
      res(await argon2.hash(password, buf));
      rej("Error While Hashing");
    });
  }); 
};