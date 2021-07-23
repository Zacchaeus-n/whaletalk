//text in human language
let input = "Whales are have super intelligence";
// let input = "a whale of a deal!";
//an array of vowels
const vowels = ["a", "e", "i", "o", "u"];
//array to store found vowels
let resultArray = [];

// compare the input text to the vowels.
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    //comparing the input letter to every letter in the vowels array.
    //and push matching vowels into the resultArray
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
  //double the 'e' and the 'u'
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }
}

//printing the result
console.log(resultArray.join("").toUpperCase());
