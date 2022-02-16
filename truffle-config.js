require('dotenv').config()

const PrivateKeyProvider = require('./private-provider')

const networkId = {
  Mainnet: 	137,
  Testnet: 80001
}

module.exports = {
  networks: {
    testnet: {
      provider: () => {
        return new PrivateKeyProvider(process.env.TESTNET_PRIVATE_KEY, 'https://polygon-mumbai.g.alchemy.com/v2/2--2vYsN0nbB5KaQXoFMRt9dOWBYN04z', networkId.Testnet)
      },
      network_id: networkId.Testnet
    },

    mainnet: {
      provider: () => {
        return new PrivateKeyProvider(process.env.MAINNET_PRIVATE_KEY, 'https://polygon-rpc.com/', networkId.Mainnet)
      },
      network_id: networkId.Mainnet
    }
  },

  compilers: {
    solc: {
      version: '0.8.6'
    },
  }
}