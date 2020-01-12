// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const nStr = String(Math.abs(n));
  let reversedIntStr = '';

  for (let i = nStr.length - 1; i >= 0; i--) {
    if (reversedIntStr.length !== 0 || nStr[i] !== '0') reversedIntStr += nStr[i];
  }

  if (n < 0) return Number('-' + reversedIntStr);
  else return Number(reversedIntStr);
}

module.exports = reverseInt;
