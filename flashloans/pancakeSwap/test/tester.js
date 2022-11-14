const { ethers } = require("hardhat")
const { expect, assert } = require("chai");
const { impersonateFundErc20 } = require("../utils/utilities")
const { abi } = require("../artifacts/contracts/interfaces/IERC20.sol/IERC20.json");

const provider  = ethers.provider
//console.log(provider)

describe('Flash Loan Contract', () => {
  let FLASH_LOAN, BORROW_AMOUNT, FUND_AMOUNT, initialFundingHuman, txArbitrage, gasUsedUSD
  const DECIMALS = 18

  const BUSD_WHALE = "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8"
  const BUSD = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
  const BNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
  const USDT = "0x55d398326f99059fF775485246999027B3197955";
  const CAKE = "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82";
  const CROX = "0x2c094F5A7D1146BB93850f629501eB749f6Ed491";

  const BASE_TOKEN_ADDRESS = BUSD

  const tokenBase = new ethers.Contract(BASE_TOKEN_ADDRESS, abi, provider)

  beforeEach(async () => {
    //Get owner as a Signer
    [owner] = await ethers.getSigners()
    //Ensure the whale has the balance
    const whale_balance = await provider.getBalance(BUSD_WHALE)
    expect(whale_balance).not.equal("0")

  it("General Test", async () => {
    const FlashLoan = await ethers.getContractFactory("PancakeFlashSwap")
    FLASH_LOAN = await FlashLoan.deploy()
    await FlashLoan.deployed()

    //Configure Borrowing
    const borrowAmountHuman = "10"
    BORROW_AMOUNT = ethers.utils.parseUnits(borrowAmountHuman, DECIMALS)

    //Configure Funding
    initialFundingHuman = "1000"
    FUND_AMOUNT = ethers.utils.parseUnits(initialFundingHuman, DECIMALS)
  })

});
