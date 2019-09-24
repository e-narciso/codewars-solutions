const findMissingLetter = array => {
    let string = array.join("");
    for(let i = 0; i < string.length; i++){
        if(string.charCodeAt(i + 1) - string.charCodeAt(i) != 1){
            return String.fromCharCode(string.charCodeAt(i) + 1);
        }
    }
    throw new Error("Invalid input")
}

console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));