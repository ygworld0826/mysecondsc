// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const SendExampleModule = buildModule('SendExampleModule', (m) => {
  const sendExample = m.contract('SendExample');

  return { sendExample }; // Fixed: Use the correct variable name
});

export default SendExampleModule;