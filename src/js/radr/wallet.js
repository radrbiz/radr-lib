var sjcl = require('./utils').sjcl;

var WalletGenerator = require('radr-wallet-generator')({
  sjcl: sjcl
});

module.exports = WalletGenerator;

