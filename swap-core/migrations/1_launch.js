// const DxFactory = artifacts.require("PancakeFactory");
const DxPair = artifacts.require("PancakePair");
const owner = '0x7aC6508B6b9afF83bcBbe0472AED8A47A876f3d5';
const { config } = require('./config.js');
const fs = require('fs');

let A = Object.assign;
let K = Object.keys; 
let L = x => { console.log(S(x)); return x; }
let S = JSON.stringify;

module.exports = async (deployer, network, accounts) => {
  let launch = async (x, ...args) => { await deployer.deploy(x, ...args); let r = await x.deployed(); return A(new web3.eth.Contract(r.abi, r.address), {address: r.address}); } 
  L({config});
  // let dxFactory = await launch(DxFactory, owner);
  let dxPair = await launch(DxPair);
};
