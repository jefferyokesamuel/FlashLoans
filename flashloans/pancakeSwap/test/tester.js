const { ethers } = require("hardhat")
const { expect, assert } = require("chai");
const { impersonateFundErc20 } = require("../utils/utilities")
const { abi } = require("../artifacts/contracts/interfaces/IERC20.sol/IERC20.json");

const provider  = ethers.provider

//console.log(provider)
describe('FlashLoan Contract', () => {
  let FLASHSWAP, BORROW_AMOUNT, FUND_AMOUNT, initiateFundHuman, txArbitrage,  gasUsedUSD
  const DECIMALS = 18
  const BUSD_WHALE = "0xf977814e90da44bfa03b6295a0616a897441acec"
  const BUSD = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
  const CAKE = "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82";
  const USDT = "0x55d398326f99059fF775485246999027B3197955";
  const CROX = "0x2c094F5A7D1146BB93850f629501eB749f6Ed491";
  
  const BASE_TOKEN_ADDRESS = BUSD 

  const tokenbase = new ethers.Contract(BASE_TOKEN_ADDRESS, abi, provider)

  beforeEach(async () => {
    // Get the owner as the signer
    [owner] = await ethers.getSigners()

    //Ensure the Whale has a Balance
    const whale_balance = await provider.getBalance(BUSD_WHALE)
    expect(whale_balance != 0)

    //Deploy Smart Contract
    const FlashSwap = await ethers.getContractFactory("PancakeFlashSwap")
    FLASHSWAP = await FlashSwap.deploy()
    await FLASHSWAP.deployed()

    //Configure our Borrowing
    //Configure Funding
    
  })

  describe('Arbitrage Execution', () => { 
    
   })
  it('generalTest', async () =>{
    const whale_balance = await provider.getBalance(BUSD_WHALE)
    console.log (ethers.utils.formatUnits(whale_balance.toString(), DECIMALS))
  })
})
