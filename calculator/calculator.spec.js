const { add } = require('./calculator.js');

// test away!
it('should run the test', function () {
    expect(true).toBe(true);
})

describe('calculator.js', function () {
    describe('.add()', function () {
        it('shoudl return sum of two numbesr passed as arguments', function () {
            //Arrange(set up the environment and inputs)

            //Act (system under test)
            const sum = add(2, 2);

            //Assert
            expect(sum).toBe(4);
        })

        it('should return the sume of two numbers', function () {
            expect(add(2, 2)).toBe(4)
            expect(add(2, 4)).toBe(6)
            expect(add(-2, 8)).toBe(6)

        })

        it('should retun 0 when called with no arguemnts', function () {
            expect(add()).toBe(0)
        })

        it('should throw an error when passing not a number', function () {
            expect(() => {
                add(2, {})
            }).toThrow()
            expect(() => {
                add(2, [])
            }).toThrow()
            expect(() => {
                add(2, 'two')
            }).toThrow()
            expect(() => {
                add(2, NaN)
            }).toThrow()
            expect(() => {
                add(2, null)
            }).toThrow()
        })

        it('should return the sum of any a list of numbers separated by comma', function () {
            expect(add().toBe(null))
        })

    })
})

// take the below and translate to the above 
// Given two numbers
// When the add function is invoked
// Then it should return the sum of the two numbers