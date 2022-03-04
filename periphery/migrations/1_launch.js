// const DxFactory = artifacts.require("PancakeFactory");
// const DxPair = artifacts.require("PancakePair");
const DxRouter = artifacts.require("PancakeRouter");
// const owner = '0x7aC6508B6b9afF83bcBbe0472AED8A47A876f3d5';
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
  // let dxPair = await launch(DxPair);
  // let dxRouter = await launch(DxRouter, '0x6c40a3FA9840Ae32680adB2048Fc6adAaBb78B7e', '0x470c7dF9894dD846d2E37A46516a2b63d50156c8'); // cronos testnet
  let dxRouter = await launch(DxRouter, '0x52b3A29eDfd384094dD9Fc0D90C05CD1eF5c1574', '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23'); // cronos mainnet
};
