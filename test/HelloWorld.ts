import _ from "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

describe("Hello World", () => {
  it("should get the hello world", async () => {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy();

    expect(await hello.hello()).to.equal("Hello World");
  });
});
