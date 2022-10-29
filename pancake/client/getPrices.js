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
const provider = new ethers.provider