// contract to be tested
var conference = artifacts.require("./Conference.sol");

// Test suite
contract('Conference', function (accounts) {
    let contractInstance,
        registrationPrice = 1.8,
        attendee = accounts[1],
        attendeeFullName = "Rick Deckard";


    // Test case: do not register an attendee sending the wrong value
    it("should not register an attendee sending the wrong value", function () {
        return conference.deployed().then(function (instance) {
            contractInstance = instance;

            return contractInstance.register(attendeeFullName, {
                from: attendee,
                value: web3.toWei(registrationPrice - 0.5, "ether"),
                gas: 500000
            });
        }).then(assert.fail)
            .catch(function (error) {
                assert(error.message.indexOf('revert') >= 0, "error should be revert");
            });
    });
});