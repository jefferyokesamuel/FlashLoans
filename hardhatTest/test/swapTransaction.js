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

    const getAmountsOut = async () => {
        decimals = await contractToken.decimals()

        const readableAmount = "1"
        amountIn = ethers.utils.parseUnits(readableAmount, decimals).toString()
    
        const amountsOut = await contractRouter.getAmountsOut(amountIn, [
            addressFrom,
            addressTo,
        ])
        return amountsOut[1].toString()
    } 

    it("Connects to a Router, a factory and a provider", () => {
        assert(provider._isProvider)

        expect(contractFactory.address).to.equal("0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f")

        expect(contractRouter.address).to.equal("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D")
    })

    it("gets the price of amountsOut", async () => {
        const amount = await getAmountsOut()
        assert(amount.toString())
    })

    it("Sends a transaction, i.e swaps token", async () => {
        const ownerSigner = await ethers.getSigners()
        console.log(ownerSigner)

        const mainnetRouter = new ethers.Contract(addressRouter, routerABI, ownerSigner)
        const mainnetRouter = new ethers.Contract(addressRouter, routerABI, newSigner)

        const myAddress = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"
    })
})