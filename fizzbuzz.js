function isMultiple (number, divisor) {
  return number % divisor === 0
}

function fizzbuzz (number) {
  if (typeof number !== 'number') {
    return 'Error'
  }
  let result = ''
  if (number === 0) return 0
  if (isMultiple(number, 3)) {
    result += 'Fizz'
  }
  if (isMultiple(number, 5)) {
    result += 'Buzz'
  }

  return result || number
}

module.exports = fizzbuzz
