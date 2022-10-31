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
const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/DFo-cWrsIrwN46dSsl1NIYdrX3jqtxhD")

//COnnect to Factore
const contractFactory = new ethers.Contract(factoryAddress,factoryABI,provider)

//Connect to Router
const contractRouter = new ethers.Contract(addressRouter,routerABI,provider)

//Call the Blockchain
const getPrices = async (amount) => {
    //Convert the amount In
    const contractToken = new ethers.Contract(addressFrom,erc20ABI,provider)
    const decimals = await contractToken.decimals()
    const amountIn = ethers.utils.parseUnits(amount, decimals).toString()
   
    //Get AMounts Out
    const amountsOut = await contractRouter.getAmountsOut(amountIn, [
        addressFrom, //BUSD
        addressTo, //WBNB
    ]) 

    //Convert Amount out - decimals
    const token2 = new ethers.Contract(addressTo,erc20ABI,provider)
    const decimals2 = await token2.decimals()

     //Convert Amount out - decimals
    const readableAmount = ethers.utils.formatUnits(amountsOut[1].toString(),decimals)

     //Log Output
    console.log(readableAmount)
}
const amount = "1"

getPrices(amount)

