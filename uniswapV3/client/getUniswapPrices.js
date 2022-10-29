//https://docs.uniswap.org/protocol/reference/deployments

const ethers = require('ethers')

const {abi: QuoterABI} = require('@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json')

const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/DFo-cWrsIrwN46dSsl1NIYdrX3jqtxhD")

async function getPrice() {
    const quoterAddress = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6"
    const quoterContract = new ethers.Contract(quoterAddress,QuoterABI,provider)
    console.log(quoterContract)
}

getPrice()