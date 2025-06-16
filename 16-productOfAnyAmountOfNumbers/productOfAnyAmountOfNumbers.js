function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
    return args.reduce((product, current) => product * current, 1);
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
