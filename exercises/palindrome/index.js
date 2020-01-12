// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let rightPointer = str.length - 1;
  for (let leftPointer = 0; leftPointer < str.length / 2; leftPointer++) {
    if (str[leftPointer] !== str[rightPointer]) return false;
    rightPointer--;
  }

  return true;
}

module.exports = palindrome;
