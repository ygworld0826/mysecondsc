// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract ConditionStatement {
    function checkValue(uint256 value) public pure returns (string memory) {
        if (value > 100) {
            return "Value is greater than 100";
        } else if (value == 100) {
            return "Value is exactly 100";
        } else {
            return "Value is less than 100";
        }
    }
}