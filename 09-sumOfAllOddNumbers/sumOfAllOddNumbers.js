function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let count = 0;
  for (let num of nums) {
    if (num % 2 !== 0) {
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
