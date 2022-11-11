const { version } = require("chai");

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers:[
        {version: "0.5.5"}, 
        {version: "0.6.6"}, 
        {version: "0.8.8"}
    ]
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://bsc-dataseed.binance.org/",
      },
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      accounts: [""],
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
    }
  }
};
