// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let result;
  let resultCount = 0;
  const cache = {};

  for (let i = 0; i < str.length; i++) {
    cache[str[i]] = cache[str[i]] + 1 || 1;
  }

  for (let key in cache) {
    if (!result) {
      result = key;
      resultCount = cache[key];
    }
    else {
      if (cache[key] > resultCount) {
        result = key;
        resultCount = cache[key];
      }
    }
  }

  return result;
}

module.exports = maxChar;
