function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
   const unionSet = new Set();

  for(const currentSet of args) {
    for (const value of currentSet) {
      unionSet.add(value);
    }
  }
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
