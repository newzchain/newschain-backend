// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
	// const NewsChain = hre.ethers.getContractFactory("NewsChain");
	// const newsChain = await NewsChain.deploy("NewsChain", "NC", "1000000000000000000");
	// await newsChain.deployed();
	// console.log(`NewsChain deployed to ${newsChain.address}`);

	const newsChain = await hre.ethers.deployContract("NewsChain", ["NewsChain", "NC", "1000000000000000000"]);
	await newsChain.waitForDeployment();
	console.log(`NewsChain deployed to ${newsChain.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
