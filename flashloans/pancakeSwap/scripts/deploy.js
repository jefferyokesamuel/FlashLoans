const { etherscan } = require("../../../hardhatTest/hardhat.config");

async function main() {
  const [deployer] = await ethers.getSigners()

  console.log("Deploying contracts with the accounts", deployer.address)

  console.log("Account Balance", (await deployer.getBalance()).toString()) 

  const Token = ethers.getContractFactory("PancakeFlashSwap");
  const token = await Token.deploy()

  console.log("Token address:", token.address)
}
main().then(() => process.exit(0)).catch((error) => (
  console.log(error),
