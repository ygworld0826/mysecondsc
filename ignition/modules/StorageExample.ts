// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const DeploySampleModule = buildModule('ConditionExampleModule', (m) => {
  const DeploySample = m.contract('ConditionExample');

  return { DeploySample }; // Fixed: Use the correct variable name
});

export default DeploySampleModule;