const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying MultiSig with account:", deployer.address);

  const MultiSig = await ethers.getContractFactory("MultiSigWallet");
  
  // Example: 2-of-3 Multisig
  const owners = [
    deployer.address,
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
  ];
  const required = 2;

  const wallet = await MultiSig.deploy(owners, required);
  await wallet.waitForDeployment();

  console.log("MultiSig Vault deployed to:", await wallet.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
