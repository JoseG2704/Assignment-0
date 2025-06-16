function pairSum(nums, target) {
  // Insert code here;
  if(nums.length <= 1) {
    throw new Error("Input array must have at least two elements.");
  }

  const seen = new Set();
  for(const num of nums) {
   const complement = target - num;
   if(seen.has(complement)) {
    return true;
   }
   seen.add(num);
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;
