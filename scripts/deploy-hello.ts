import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.deploy();
  await hello.deployed();

  return hello;
}

// @ts-ignore
async function sayHello(hello) {
  console.log("Say Hello:", await hello.hello());
}

deploy().then(sayHello);

// commands to run this
// terminal1: run a local network -> npx hardhat node
// terminal2: run the script from root -> npx hardhat run scripts/deploy-hello.ts --network localhost
