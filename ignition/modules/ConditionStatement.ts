// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const ConditionStatementModule = buildModule('ConditionStatementModule', (m) => {
  const conditionStatement = m.contract('ConditionStatement');
  return { conditionStatement };
});

export default ConditionStatementModule;