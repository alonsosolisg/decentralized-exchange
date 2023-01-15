require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
const privateKeys = process.env.PRIVATE_KEYS || ""

module.exports = {
  solidity: "0.8.9",
  networks: {
    localhost: {},
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: privateKeys.split(','),
    }
  },
};


