const ethers = require('ethers')

const { 
    factoryAddress,
    addressRouter,
    addressFrom,
    addressTo } = require("./addresslist")

const {
    erc20ABI,
    factoryABI,
    pairABI,
    routerABI } = require("./abiList")

//Standard Provider
const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/")

//COnnect to Factore
const contractFactory = new ethers.Contract(factoryAddress,factoryABI,provider)
console.log(provider)