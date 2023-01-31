const { ethers } = require("hardhat")
const { expect, assert } = require("chai");
const { impersonateFundErc20 } = require("../utils/utilities")
const { abi } = require("../artifacts/contracts/interfaces/IERC20.sol/IERC20.json");

const provider  = ethers.provider

// console.log(provider)

describe('FlashLoan Contract', () => { 
  let(FLASHSWAP, BORROW_AMOUNT, FUND_AMOUNT, initiateFundHuman, txArbitrage,  gasUsedUSD)
  const DECIMALS = 18
  const BUSD_WHALE = "0xf977814e90da44bfa03b6295a0616a897441acec"
  const WBNB = 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c;
  const BUSD = 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56;
  const CROX = 0x2c094F5A7D1146BB93850f629501eB749f6Ed491;
  
})