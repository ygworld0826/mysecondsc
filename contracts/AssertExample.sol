// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract AssertExample {
    uint256 public value = 1;

    function increment() public {
        value++;
        assert(value != 0); // 오버플로우 방지 (Solidity 0.8.x 이상에서는 자동 체크됨)
    }
}