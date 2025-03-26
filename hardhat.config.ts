import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    kairos: {
      url: "https://public-en-kairos.node.kaia.io", // Kaia Kairos 테스트넷 RPC URL
      chainId: 1001, // Kaia Kairos 테스트넷 Chain ID
      accounts: [process.env.PRIVATEKEY || ""], // 배포에 사용할 계정의 개인 키
      gasPrice: 250000000000, // 250 Gwei (Kaia 네트워크 요구 사항)
    },
  },
};

export default config;