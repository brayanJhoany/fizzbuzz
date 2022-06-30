const multiplo = (num, divisor) => num % divisor === 0;

function fizzbuzz(num) {
    if (typeof num !== 'number') { 
        return 'Parameter must be numeric';
    }
    if(num===0) return 0;
    if (multiplo(num, 3) && multiplo(num, 5))  return 'fizzbuzz';
    if (multiplo(num, 3))   return 'fizz';
    if (multiplo(num, 5))   return 'buzz';
    return num;
}
function print(num) {
    for (let index = 0; index < num; index++) {
        console.log(`index: ${index} - ${fizzbazz(index)}`);
        
    }
}
    
module.exports = fizzbuzz;
