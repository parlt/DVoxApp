module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  compilers: {
    solc: {
      version: "0.8.16"      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      //   port: 8545,
      network_id: "*" // Match any network id
    },
    //      rinkeby: {
    //          host: "127.0.0.1",
    //         port: 8545,
    //         network_id: "4"
    //     },
    //     live: {
    //         host: "127.0.0.1",
    //         port: 8545,
    //         network_id: "1",
    //         from:"enter your account address",
    //         gas: 2000000
    //      },
    develop: {
      port: 8545
    }
  }
};
