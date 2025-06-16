function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let count = 0;
  for(let item of arr) {
    if (typeof item === "boolean"|| typeof item === "string"){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
