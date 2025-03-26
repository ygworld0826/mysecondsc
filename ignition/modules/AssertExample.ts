import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const AssertExampleModule = buildModule('AssertExampleModule', (m) => {
  // 'AssertExample' 계약을 배포
  const assertExample = m.contract('AssertExample');

  // 배포된 계약을 반환
  return { assertExample };
});

export default AssertExampleModule;