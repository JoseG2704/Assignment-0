function countOfAllBooleans(arr) {
  // Insert code here;
  let count = 0;
  for(let item of arr) {
    if(typeof item === "boolean") {
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
