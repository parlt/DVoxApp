// SPDX-License-Identifier: MIT
pragma solidity >=0.8.16 < 0.9.0;

contract Ownable {
    // State variable
    address owner;

    // Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    // constructor
    constructor() {
        owner = msg.sender;
    }
}
