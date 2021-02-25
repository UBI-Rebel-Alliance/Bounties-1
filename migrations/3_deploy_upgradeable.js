// migrations/3_deploy_upgradeable.js
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const SBounties = artifacts.require('StandardBounties');

module.exports = async function (deployer) {
  await deployProxy(SBounties, ['<add account for deployment>'], { deployer, initializer: 'initialize' });
};