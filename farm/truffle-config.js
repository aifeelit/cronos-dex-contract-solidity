const HDWalletProvider = require('truffle-hdwallet-provider');
require('dotenv').config()

const mnemonic = process.env.MNEMONIC;

module.exports = {
  compilers: {
    solc: {
      version: "0.6.0", 
      docker: false, // Use a version obtained through docker
      parser: "solcjs",  // Leverages solc-js purely for speedy parsing
      settings: {
        optimizer: {
          enabled: true,
          runs: 200   // Optimize for how many times you intend to run the code
        },
        evmVersion: "istanbul"
      }
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },
  networks: {
    // mainnet: {
    //   provider: () =>new HDWalletProvider(mnemonic,`https://mainnet.infura.io/v3/cca1a1cbd0624ec1b4a756e1945ea03b`),
    //   network_id: 1,       // mainnet's id
    //   // gas: 6721975,        // mainnet has a lower block limit than mainnet
    //   // gasPrice: 20000000000  ,
    //   confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    //   timeoutBlocks: 200, 
    //   skipDryRun: true,
    //   networkCheckTimeout: 1000000
    // },
    // ropsten: {
    //   provider: () =>new HDWalletProvider(mnemonic,`https://ropsten.infura.io/v3/cca1a1cbd0624ec1b4a756e1945ea03b`),
    //   network_id: 3,       // Ropsten's id
    //   // gas: 6721975,        // Ropsten has a lower block limit than mainnet
    //   // gasPrice: 20000000000  ,
    //   confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    //   timeoutBlocks: 200, 
    //   skipDryRun: true,
    //   networkCheckTimeout: 1000000
    // },
    cronos: {
      provider: () =>new HDWalletProvider(mnemonic,`https://evm-cronos.crypto.org`),
      network_id: 25,
      timeoutBlocks: 200, 
      skipDryRun: true,
      networkCheckTimeout: 1000000
    },
    cronostest: {
      provider: () =>new HDWalletProvider(mnemonic,`https://cronos-testnet-3.crypto.org:8545`),
      network_id: 338,
      timeoutBlocks: 200, 
      skipDryRun: true,
      networkCheckTimeout: 1000000
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 1337
    },
  //  test: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  }
  //},
  //
  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows: 
  // $ truffle migrate --reset --compile-all
  //
  // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  }
};
