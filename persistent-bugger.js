const persistence = num => {
  let count = 0;
  while (num > 9) {
    count++;
    num = [...(num + "")].map(Number).reduce((a, b) => a * b);
  }
  return count;
};

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));
