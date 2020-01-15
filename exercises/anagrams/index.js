// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const cleanStringA = stringA.replace(/[^\w]/g).toLowerCase();
  const cleanStringB = stringB.replace(/[^\w]/g).toLowerCase()

  if (cleanStringA.length !== cleanStringB.length) return false;

  const cacheA = charCache(cleanStringA);
  const cacheB = charCache(cleanStringB);

  for (let key in cacheA) {
    if (cacheA[key] !== cacheB[key]) return false;
  }

  return true;
}

function charCache(str) {
  const cache = {};

  for (let char of str) {
    cache[char] = cache[char] + 1 || 1
  }

  return cache;
}

module.exports = anagrams;
