/**
 * Checks if a number is a multiple of another.
 * @param {number} number - The number to evaluate.
 * @param {number} divisor - The number to divide by.
 * @returns {boolean} True if number is a multiple of divisor, otherwise false.
 */
function isMultiple (number, divisor) {
  return number % divisor === 0
}

/**
 * Returns "Fizz" if the number is a multiple of 3,
 * "Buzz" if it is a multiple of 5,
 * "FizzBuzz" if it is a multiple of both,
 * or the number itself if it is a multiple of neither.
 * Returns "Error" if the argument is not a number.
 *
 * @param {number} number - The number to evaluate.
 * @returns {string|number} The result of the FizzBuzz analysis or an error message.
 */
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
