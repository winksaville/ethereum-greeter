pragma solidity ^0.4.7;

/* Simple contract that returns a string */
contract Greeter {
    address owner; // Owner of the contract
    string greeting; // Greeting

    /* Constructor */
    function Greeter() public {
        owner = msg.sender;
        greeting = "Hi from Greeter";
    }

    /* Kill this contract */
    function kill() {
        if (msg.sender == owner) {
            selfdestruct(owner);
        }
    }

    /* Return the greeting */
    function getGreeting() constant returns (string) {
        bytes memory s = bytes(greeting);
        if (s.length == 0) {
           return "Yeh, greeting was empty dude";
        } else {
           return greeting;
        }
    }
}
