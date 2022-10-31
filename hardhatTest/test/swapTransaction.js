const { ethers } = require('hardhat');
const { expect, assert } = require("chai");

const { factoryAddress,
    addressRouter,
    addressFrom,
    addressTo } = require("../utils/addressList")

const { erc20ABI, 
    factoryABI,
    pairABI,
    routerABI, } = require("../utils/abiLIst")

describe("Read and write to the blockchain", () => {
    let  provider, contractFactory, contractRouter, contractToken, decimals, amountIn, amountOut 

    provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/DFo-cWrsIrwN46dSsl1NIYdrX3jqtxhD")
    contractFactory = new ethers.Contract(factoryAddress, factoryABI, provider)
    contractRouter = new ethers.Contract(addressRouter, routerABI, provider)
    contractToken = new ethers.Contract(addressFrom, erc20ABI, provider)

    it("Connects to a Router, a factory and a provider", () => {
        assert(provider._isProvider)

        expect(contractFactory.address).to.equal("0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f")

        expect(contractFactory.address).to.equal("0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f")
    })
})