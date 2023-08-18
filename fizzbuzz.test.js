const fizzbuzz =require('./fizzbuzz');

describe('FizzBuzz', () => {
    test('should print error if they recive a string', () => {
        const expected = 'Error';
        result = fizzbuzz('string');
        expect(result).toBe(expected);
    });
    test('should print 1 if they recive 1', () => { 
        const expected = 1;
        result = fizzbuzz(1);
        expect(result).toBe(expected);
    });
    test('should print fizz if number is a multiple of 3', () => { 
        const expected = 'Fizz';
        result = fizzbuzz(3);
        expect(result).toBe(expected);
    });
    test('should print Buzz if number is a multiple of 5', () => { 
        const expected = 'Buzz';
        result = fizzbuzz(5);
        expect(result).toBe(expected);
    });
    test('should print FizzBuzz if number is a multiple of 3 and 5', () => { 
        const expected = 'FizzBuzz';
        result = fizzbuzz(15);
        expect(result).toBe(expected);
    });
    test('should print the number if not a multiple of 3 or 5', () => {
        const expected = 7;
        result = fizzbuzz(7);
        expect(result).toBe(expected);
    });
    test('should print 0 if they receive 0', () => {
        const expected = 0;
        result = fizzbuzz(0);
        expect(result).toBe(expected);
    });
    test('should print FizzBuzz for negative multiples of 3 and 5', () => {
        const expected = 'FizzBuzz';
        result = fizzbuzz(-15);
        expect(result).toBe(expected);
    });
    
    test('should print Buzz for negative multiples of 5', () => {
        const expected = 'Buzz';
        result = fizzbuzz(-10);
        expect(result).toBe(expected);
    });
    
    test('should print the number for negative numbers that are not multiples of 3 or 5', () => {
        const expected = -7;
        result = fizzbuzz(-7);
        expect(result).toBe(expected);
    });
});