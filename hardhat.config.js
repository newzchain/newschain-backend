require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-waffle");
// require("@nomicfoundation/hardhat-etherscan");
const dotenv = require("dotenv");
dotenv.config();

task("accounts", "Prints the list of accounts", async () => {
	const accounts = await ethers.getSigners();
	for (const account of accounts) {
		console.log(account.address);
	}
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.11",
	networks: {
		hardhat: {
			chainId: 1337,
		},
		mumbai: {
			url: process.env.POLYGON_MUMBAI_URL,
			accounts: [process.env.PRIVATE_KEY],
		},
	},
	etherscan: {
		apiKey: process.env.ETHERSCAN_API_KEY,
	},
};
