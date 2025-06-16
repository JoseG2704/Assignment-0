class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
     function search(start, end) {
      if (start > end) return false;
      const mid = Math.floor((start + end) / 2);

      if (numss[mid] === target) {
        return true;
      } else if (nums[mid] > target) {
        return search(start, mid - 1);
      } else {
        return search(mid + 1, end);
      }
    }
    return search(0, nums.length - 1);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
