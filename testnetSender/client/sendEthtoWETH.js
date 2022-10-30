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
    const transactionBuild = {
        from: address,//from
        value: ethers.utils.parseEther(sendValue),//value
        nonce: nonce,//nonce
        gasLimit: 100000,//gas limit
        gasPrice: gasprice//gas price
    }

    //Send Transaction
}

exchangeEth()
