function frequencyCounter(word) {
  // Insert code here;
  const frequencies = {};

  for(let char of word) {
    if(frequencies[char]) {
      frequencies[char]++;
    } else {
      frequencies[char] = 1;
    }
  }
  return frequencies;
}

// Do not edit this line;
module.exports = frequencyCounter;
