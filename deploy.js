const hre = require("hardhat");

async function main() {
  const Continuum = await hre.ethers.getContractFactory("Continuum");
  const continuum = await Continuum.deploy(100000000, 1);

  await continuum.deployed();

  console.log("Ocean Token deployed: ", continuum.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
