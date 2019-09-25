// Code Wars:Find the missing letter
// Code Wars Link:
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2
// #Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// Example:
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

const findMissingLetter = array => {
  let string = array.join("");
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
      return String.fromCharCode(string.charCodeAt(i) + 1);
    }
  }
  throw new Error("Invalid input");
};

// const findMissingLetter = array => {
//   let charCodes = array.map((letter) => {
//     return letter.charCodeAt(0);  
//   });

//   let missingThing;

//   charCodes.forEach(code, index){
//     if(index != 0){
//       if((code != charCodes[index - 1]) + 1){
//         missingThing = String.fromCharCode(code - 1);
//       }
//     }
//   }
//   return missingThing;
// };