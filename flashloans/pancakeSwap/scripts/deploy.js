const { etherscan } = require("../../../hardhatTest/hardhat.config");

async function main() {
  const [deployer] = await ethers.getSigners()

  console.log("Deploying contracts with the accounts", deployer.address)

  console.log()
  console.log("Account Balance", (await deployer.getBalance()).toString()) 
  const token = await Token.deploy()
} 