require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn purse install fantasy flush seminar'; 
let testAccounts = [
"0x0f91252f9d5b01bfecbec70fa7960fa6c273277190b9544a75f02927ff4d640e",
"0x065292730676341020aef0325c81ebf360397ed7db49a538e4baf816dd174095",
"0xd7f85564e5e036b2204e6d0cdb3a106312eb7c15555d8ec8c43239d8dbab2e84",
"0xd0cb9c4636c58732323a209e795ff4dbcba36593ba234df4d84d937377d562c8",
"0x52c742bab6109143ef464b4305f57ded73b89e3d89b3a4dda2b3f4f491af304a",
"0xb995ba5a8e3a79ee44535618d4810d22bb51f37c00542a679f414b4a551e527b",
"0x77627be1ca4d63ce71798961f6eb2817ab9806364a4b910c5831d81a2bd45f90",
"0xe47c094c3032a1cd3291bda42e6dc6f38e448689468d662b75b22f83b93e3754",
"0xd9accb6fb3272d01cb504c5defaed61b681bd65b2dde9e04ce620521b7331b8b",
"0x85e6f8c6cba4f436bc143049230a0794cc1bb81ed6bd2547147b8a13063f5dc6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


