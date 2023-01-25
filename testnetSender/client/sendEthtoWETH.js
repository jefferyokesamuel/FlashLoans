const { ethers } = require("ethers")

//Testnet Provider
const providerTestnet = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/3g_wiRYgT0GpvrvCJlYfMYWhBSUWGl07")

//Create Signer
const address = "0xf6C50D8305fa2AE6986195848053a1437aeD2588"
const privateKey = "7ca4b79101f50cd1c82d6f8729f98e23b6a652c78fe3c2c492edba51a0b56f40"

const walletSigner = new ethers.Wallet(privateKey, providerTestnet)

const exchangeEth = async () => {
    const sendValue = "0.03"
    const gasprice = await providerTestnet.getGasPrice()
    const nonce = 9
    const transactionBuild = {
        from: address,//from
        to: "0x5A3823E9ed2b4bBF40F4b63E9c127D87E60b6bcb",//to
        value: ethers.utils.parseEther(sendValue),//value
        nonce: nonce,//nonce
        gasLimit: 100000,//gas limit
        gasPrice: gasprice//gas price
    }

    
    //Send Transaction
    const transactionSend = await walletSigner.sendTransaction(transactionBuild)

    console.log("Transaction Send")
    console.log(transactionSend)
}



exchangeEth()
