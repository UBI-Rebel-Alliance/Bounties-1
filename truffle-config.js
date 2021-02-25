// use "npx truffle migrate --compile-all --network matic" to deploy


const HDWalletProvider = require('@truffle/hdwallet-provider')
const fs = require('fs')

// First read in the secrets.json to get our mnemonic
let secrets
let mnemonic
if (fs.existsSync('secrets.json')) {
  secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'))
  mnemonic = secrets.mnemonic
} else {
  console.log('No secrets.json found. If you are trying to publish EPM ' +
              'this will fail. Otherwise, you can ignore this message!')
  mnemonic = ''
}

module.exports = {
  networks: {
    live: {
      network_id: 1, // Ethereum public network,
      gas: 4600000
      // optional config values
      // host - defaults to "localhost"
      // port - defaults to 8545
      // gas
      // gasPrice
      // from - default address to use for any transaction Truffle makes during migrations
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/v3/<>'),
      network_id: '3'
      //gas: 1000000000
    },
    testrpc: {
      network_id: 'default',
      gas: 4000000000
    },
    matic: {
      provider: () => new HDWalletProvider('<>', 'https://rpc-mumbai.matic.today'),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      //gas: 20000001,
      skipDryRun: true
    },
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "5777",       // Any network (default: none)
    }
  },
  mocha: {

    reporter: 'eth-gas-reporter',
    reporterOptions: {
      currency: 'USD',
      gasPrice: 6
    }

  }
}
