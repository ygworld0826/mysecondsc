// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const EventExampleModule = buildModule('EventExampleModule', (m) => {
  const eventExample = m.contract('EventExample');

  return { eventExample }; // Fixed: Use the correct variable name
});

export default EventExampleModule;