// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.6;

import "hardhat/console.sol";

//Uniswap Interface and libraries
import "./libraries/UniswapV2Library.sol";
import "./libraries/SafeERC20.sol";
import "./interfaces/IUniswapV2Router01.sol";
import "./interfaces/IUniswapV2Router02.sol";
import  "./interfaces/IUniswapV2Pair.sol";
import "./interfaces/IUniswapV2Factory.sol";
import  "./interfaces/IERC20.sol";

contract PancakeFlashSwap {
    using SafeERC20 for IERC20;

    //Facrory and ROuting Address
    address private constant PANCAKE_FACTORY = 0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73;
    address private constant PANCAKE_ROUTER = 0x10ED43C718714eb63d5aA57B78B54704E256024E;

    //Token Addresses
    address private constant wBNB = 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c;
    address private constant CAKE = 0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82;
    address private constant USDT = 0x55d398326f99059fF775485246999027B3197955;
    address private constant CROX = 0x2c094F5A7D1146BB93850f629501eB749f6Ed491;
}