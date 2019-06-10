var assert = {
    isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
            throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
        }
        else {
            console.log("Test passes")
        };
    },

    isEqualTo: function(actual, expected) {
        if (actual !== expected) {
            throw new Error("Assertion failed: " + actual + " does not equal " + expected);
        }
        else {
            console.log("Test passes")
        };
    }
};