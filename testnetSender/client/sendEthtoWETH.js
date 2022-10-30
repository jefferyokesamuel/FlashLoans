const { ethers } = require("ethers")

//Testnet Provider
const providerTestnet = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/3g_wiRYgT0GpvrvCJlYfMYWhBSUWGl07")

//Create Signer
const address = "0xf6C50D8305fa2AE6986195848053a1437aeD2588"
const privateKey = "7ca4b79101f50cd1c82d6f8729f98e23b6a652c78fe3c2c492edba51a0b56f40"

const walletSigner = new ethers.Wallet(privateKey, providerTestnet)

console.log(walletSigner)
        to: "0x60E0DE45a05B3D164d0000B2F12167CDd1660B58",//to
        nonce: nonce,//nonce


