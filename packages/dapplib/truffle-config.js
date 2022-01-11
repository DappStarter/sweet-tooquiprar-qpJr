require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe struggle dash saddle concert harvest logic obscure tomorrow'; 
let testAccounts = [
"0x63aade4febf4d59f57a78ecc0e6cf8846986731c60d88e4a073570ef33920e70",
"0x4845f8cda3f6dc4a0fd327b99b6860b0aa90ee52ae010fe36511668a3ed2a2ed",
"0x5116dcc6b4b8b6bd4ef6ec8667fff7132ed2af0884f31c4841af70a7c98efe23",
"0x517727bd898d0ab95c0408c9c9d579a351f4197279f4156354d48e2209fcdd64",
"0x984772903f726a582961ce29283b827f478158e6b98eb2cd6772ff8802415e9a",
"0x1c1207f9b0041d8cf04016b52bb0ab654c0391c144d9ff948410b2b151cf3301",
"0x842886e0655255f6c8ee219a6389fb3e3cec01224a0e0022c39863279bd5bc7b",
"0x4c7532e1aff50de9d28dbac1ddb913407334b0a5580efed2a8bc72c21d4cfdcb",
"0x5776f233484da07b0e60c462f126646fdf9aa79fcc3123d921c68c0dc793ef49",
"0x322ed475f7fc3caa811cb19dfd275c97d61acb9389989980de34d290669577ea"
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


