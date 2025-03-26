// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const LocalVariableModule = buildModule('LocalVariableModule', (m) => {
  const localVariable = m.contract('LocalVariableExample'); // 실제 컨트랙트 이름 사용
  return { localVariable }; // 변수 이름 일치
});

export default LocalVariableModule; // 정의된 모듈 이름 사용