function fizzBuzz(start, end) {
  // Insert code here;
   const result = [];

  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if(i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
}

// Do not edit this line;
module.exports = fizzBuzz;
