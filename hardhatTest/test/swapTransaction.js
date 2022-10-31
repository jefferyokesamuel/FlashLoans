const { ethers } = require('hardhat');
const { expect } = require("chai");

const { factoryAddress,
    addressRouter,
    addressFrom,
    addressTo } = require("../utils/addressList")

const { erc20ABI, 
    factoryABI,
    pairABI,
    routerABI, } = require("../utils/abiLIst")

describe("read and write to the blockchain", () => {
    let  provider, contractFactory, contractRouter, contractToken, decimals, amountIn, amountOut 

    provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/DFo-cWrsIrwN46dSsl1NIYdrX3jqtxhD")
    
})