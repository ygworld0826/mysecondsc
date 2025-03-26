// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const BasicModifierModule = buildModule('BasicModifierModule', (m) => {
  const basicModifier = m.contract('BasicModifier');

  return { basicModifier }; // Fixed: Use the correct variable name
});

export default BasicModifierModule;