function booWho(value) {
    return typeof value === "boolean";
}

// Test cases
console.log(booWho(true));      // true
console.log(booWho(false));     // true
console.log(booWho(1));         // false
console.log(booWho("true"));    // false
console.log(booWho(null));      // false
console.log(booWho([1,2,3])); // false
