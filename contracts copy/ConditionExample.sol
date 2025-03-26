// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract ConditionExample {
    function checkNumber(uint256 num) public pure returns (string memory) {
        if (num > 10) {
            return "Number is greater than 10";
        } else {
            return "Number is 10 or less";
        }
    }
}