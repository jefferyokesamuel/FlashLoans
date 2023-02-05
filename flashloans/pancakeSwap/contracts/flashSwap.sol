// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.6;

import "hardhat/console.sol";

// Uniswap Interface and libraries
import "./libraries/UniswapV2Library.sol";
import "./libraries/SafeERC20.sol";
import "./interfaces/IUniswapV2Router01.sol";
import "./interfaces/IUniswapV2Router02.sol";
import "./interfaces/IUniswapV2Pair.sol";
import "./interfaces/IUniswapV2Factory.sol";
import "./interfaces/IERC20.sol";

contract  PancakeFlashSwap {
    using SafeERC20 for IERC20;

    // Facrory and Routing Address
    address private constant PANCAKE_FACTORY = 0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73;
    address private constant PANCAKE_ROUTER = 0x10ED43C718714eb63d5aA57B78B54704E256024E;

    // Token Addresses
    address private constant WBNB = 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c;
    address private constant BUSD = 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56;
    address private constant CAKE = 0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82;
    address private constant USDT = 0x55d398326f99059fF775485246999027B3197955;
    address private constant CROX = 0x2c094F5A7D1146BB93850f629501eB749f6Ed491;

    // Trade Variables
    uint256 private deadline = block.timestamp + 1 days;
    uint256 private constant MAX_INT = 115792089237316195423570985008687907853269984665640564039457584007913129639935;

    // Fund Smart Contract
    // Provides a function that allows contract to be funded
    function fundFlashSwapContract(address _owner, address _token, uint256 _amount) public {
        IERC20(_token).transferFrom(_owner, address(this), _amount);
        //
        //
        //
    } 

    // Get Contract Balance
    // Allow public view of contract balance
    function getBalanceofToken(address _address) public view returns(uint256) {
        return IERC20(_address).balanceOf(address(this));
    }

    // Place a Trade
    // Executed placing a Trade
    function placeTrade(address _fromToken, address _toToken, uint256 _amountIn) private returns(uint256) {
        address pair = IUniswapV2Factory(PANCAKE_FACTORY).getPair(_fromToken, _toToken);
        require(pair != address(0), "Pool does not exist");

        // Calculate Amount Out
        address[] memory path = new address[](2);
        path[0] = _fromToken;
        path[1] = _toToken;

        uint256 amountRequired = IUniswapV2Router01(PANCAKE_ROUTER).getAmountOut(_amountIn, path[1]);
        console.log("amount required: " + amountRequired);

        // Perform Arbitrage Swap

    }
    // Initiate Arbitrage
    // Begins reciving loan and performing arbitrage trades
    function startArbitrage(address _tokenBorrow, uint256 _amount) external {
        IERC20(BUSD).safeApprove(address (PANCAKE_ROUTER), MAX_INT);
        IERC20(USDT).safeApprove(address (PANCAKE_ROUTER), MAX_INT);
        IERC20(CROX).safeApprove(address (PANCAKE_ROUTER), MAX_INT);
        IERC20(CAKE).safeApprove(address (PANCAKE_ROUTER), MAX_INT);

        //GET FACTORY PAIR ADDRESS FOR COMBINED TOKENS
        address pair = IUniswapV2Factory(PANCAKE_FACTORY).getPair(_tokenBorrow, WBNB);

        // Return error if combination doesnt exist
        require(pair != address(0), "Pool does not exist");

        // Figure out which token (0 or 1) has the amount and assign 
        address token0 = IUniswapV2Pair(pair).token0();
        address token1 = IUniswapV2Pair(pair).token1();
        uint amount0Out = _tokenBorrow == token0 ? _amount : 0;
        uint amount1Out = _tokenBorrow == token1 ? _amount : 0;

        //Passing Data and bytes so the swap function knows its a flashloan
        bytes memory data = abi.encode(_tokenBorrow, _amount);

        //Execute the Initial Swap to get the loan
        IUniswapV2Pair(pair).swap(amount0Out, amount1Out, address(this), data);
    }

    function pancakeCall(address _sender, uint256 _amount0, uint256 _amount1, bytes calldata _data) external {
        //Ensure request comes from contract
        address token0 = IUniswapV2Pair(msg.sender).token0();
        address token1 = IUniswapV2Pair(msg.sender).token1();
        address pair = IUniswapV2Factory(PANCAKE_FACTORY).getPair(token0, token1);
        require(msg.sender == pair, "sender needs to match the pair address");
        require(_sender == address(this), "Sender should match this contract");

        // Decode Data to calculate the repayment
        (address  tokenBorrow, uint256 amount) = abi.decode(_data, (address, uint256));

        // Calculate the amount to repay at the end
        uint256 fee = ((amount * 3) / 997) + 1;
        uint256 amountToRepay = amount + fee;

        // Do Arbitrage
       


        // Pay Yourself
       

        // Pay Loan Back
        IERC20(tokenBorrow).transfer(pair, amountToRepay);
    }
}