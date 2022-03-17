require("@nomiclabs/hardhat-waffle");
//const fs = require('fs');

require('dotenv').config();


const { ALCHEMY_KEY, ACCOUNT_PRIVATE_KEY } = process.env;

//const privateKey = fs.readFileSync('.secret').toString()
const privateKey = "79027970546b7ca606d0692fac237736f57c0509ab5edaf7d6dcd73cebf25def"
module.exports = {
  networks: {
    hardhat:{
      chainId:1137
    },
    mumbai: {
      url: `https://speedy-nodes-nyc.moralis.io/${ALCHEMY_KEY}/polygon/mumbai`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
      
    },
    mainnet:{
      url: `https://speedy-nodes-nyc.moralis.io/${ALCHEMY_KEY}/polygon/mainnet`,
      accounts: [ ACCOUNT_PRIVATE_KEY]
    }
  },
  solidity: "0.8.4",
};




// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
//task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  //const accounts = await hre.ethers.getSigners();

 // for (const account of accounts) {
  //  console.log(account.address);
 // }
//});

