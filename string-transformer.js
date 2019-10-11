// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"

// You may assume the input only contain English alphabet and spaces.

const stringTransformer = string => {
  const allUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return string
    .split("")
    .map(char =>
      allUpperCase.indexOf(char) === -1
        ? char.toUpperCase()
        : char.toLowerCase()
    )
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
};

stringTransformer("Example string");