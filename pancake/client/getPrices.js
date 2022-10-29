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

//Connect to Router
const contractRouter = new ethers.Contract(addressRouter,routerABI,provider)

//Call the Blockchain
const getPrices = async (amount) => {
    //Convert the amount In
    const contractToken = new ethers.Contract(addressFrom,erc20ABI,provider)
    const decimals = await contractToken.decimals()
    const amountIn = ethers.utils.parseUnits(amount, decimals)
    console.log(decimals)
    console.log(amountIn)
}

const amount = "500"

getPrices(amount)

