// IMPORT MODULES under test here:
import { basicOp } from '../utils.js';

const test = QUnit.test;

test('testing multiplication for basicOp()', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const n1 = 12;
    const n2 = 3;
    const op = '*';
    const expected = 36;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = basicOp(n1, n2, op);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('testing division for basicOp()', (expect) => {
    const n1 = 12;
    const n2 = 3;
    const op = '/';
    const expected = 4;
    
    const actual = basicOp(n1, n2, op);

    expect.equal(actual, expected);
});

test('testing addition for basicOp()', (expect) => {
    const n1 = 12;
    const n2 = 3;
    const op = '+';
    const expected = 15;
    
    const actual = basicOp(n1, n2, op);

    expect.equal(actual, expected);
});

test('testing subtraction for basicOp()', (expect) => {
    const n1 = 12;
    const n2 = 3;
    const op = '-';
    const expected = 9;
    
    const actual = basicOp(n1, n2, op);

    expect.equal(actual, expected);
});