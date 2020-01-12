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

  // // pre loop setup to handle negative inputs
  // let isNegative = false;
  // let i = 0;
  // if (nStr[0] === '-') {
  //   isNegative = true;
  //   i = 1;
  // } 

  // for (i; i < nStr.length; i++) {
  //   if (reversedIntStr.length !== '0') reversedIntStr = nStr[i] + reversedIntStr;
  //   else {
  //     if (nStr[i] !== '0' && nStr[i] !== '-') reversedIntStr = nStr[i] + reversedIntStr;
  //   }
  // }

  // if (isNegative) reversedIntStr = '-' + reversedIntStr

  // return Number(reversedIntStr);


}

console.log(reverseInt(51))
console.log(reverseInt(981))
console.log(reverseInt(500))
console.log(reverseInt(-15))
console.log(reverseInt(-90))

module.exports = reverseInt;
