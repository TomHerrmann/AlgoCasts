// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = str[i] + result
  }

  return result;
}

console.log(reverse('apple'))
console.log(reverse('hello'))

module.exports = reverse;
