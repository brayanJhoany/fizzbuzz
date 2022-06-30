const fizzbuzz =require('./fizzbuzz');

describe('fizzbuzz', () => {
    test('should print 1 if they recive 1', () => { 
        const expected = 1;
        result = fizzbuzz(1);
        expect(result).toBe(expected);
    });

    test('should print fizz if number is a multiple of 3', () => { 
        const expected = 'fizz';
        result = fizzbuzz(3);
        expect(result).toBe(expected);
    });
    test('should print bazz if number is a multiple of 5', () => {
        const expected = 'buzz';
        result = fizzbuzz(5);
        expect(result).toBe(expected);
    });
    test('should print fizzbuzz if number is a multiple of 3 and 5', () => { 
        const expected = 'fizzbuzz';
        result = fizzbuzz(15);
        expect(result).toBe(expected);
    });
    test('should print null if they recive a string', () => {
        const expected = 'Parameter must be numeric';
        result = fizzbuzz('15');
        expect(result).toBe(expected);
     })
});