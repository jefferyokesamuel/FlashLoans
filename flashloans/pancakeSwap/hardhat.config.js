require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers")

module.exports = {
  solidity: {
    compilers:[
        {version: "0.5.5"}, 
        {version: "0.6.6"}, 
        {version: "0.8.8"}
    ],
    allowUnlimitedContractSize: true
  },
  networks: {
  
    hardhat: {
      forking: {
        url: "https://bsc-dataseed.binance.org/",
      },
      allowUnlimitedContractSize: true
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      accounts: [
        "0x7ca4b79101f50cd1c82d6f8729f98e23b6a652c78fe3c2c492edba51a0b56f40"
      ],
      allowUnlimitedContractSize: true
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
    }
  }
};
