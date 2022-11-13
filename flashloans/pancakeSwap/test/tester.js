const { ethers } = require('hardhat')
const { expect, assert } = require("chai");
const { impersonateFundErc20 } = require("../utils/utilities")
const { abi } = require("../artifacts/contracts/interfaces/IERC20.sol/IERC20.json")
const { provider } = ethers.provider

describe('Flash Loan Contract', () => {
  let FLASH_LOAN, BORROW_AMOUNT, FUND_AMOUNT, initiateFundHuman, txArbitrage, gasUsedUSD
  const DECIMALS = 18

  const BUSD_WHALE = "0xf977814e90da44bfa03b6295a0616a897441acec"
  const BUSD = 
  address private constant WBNB = 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c;
  address private constant BUSD = 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56;
  address private constant CAKE = 0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82;
  address private constant USDT = 0x55d398326f99059fF775485246999027B3197955;
  address private constant CROX = 0x2c094F5A7D1146BB93850f629501eB749f6Ed491;
  const BNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
  const USDT = "0x55d398326f99059fF775485246999027B3197955";

});
