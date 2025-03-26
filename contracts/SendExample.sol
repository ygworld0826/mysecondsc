// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract SendExample {
    function sendEther(address payable recipient) public payable returns (bool) {
        bool sent = recipient.send(msg.value);
        require(sent, "Failed to send Ether");
        return sent;
    }
}