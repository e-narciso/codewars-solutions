// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

// #Examples:

// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see Example Tests: for more details.

// Note

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

function divisorsOf(x) {
  const divisors = [];
  for (let j = 1; j <= x; j++) {
    if (x % j === 0) {
      divisors.push(j);
    }
  }
  return divisors;
}

function isSquared(x) {
  return Math.sqrt(x) % 1 === 0;
}

const listSquared = (m, n) => {
  const result = [];
  for (let i = m; i < n; i++) {
    let divisors = divisorsOf(i);
    let sumSquaredDivs = divisors.reduce((acc, cur) => (acc += cur * cur), 0);
    if (isSquared(sumSquaredDivs)) {
      result.push([i, sumSquaredDivs]);
    }
  }
  return result;
};
