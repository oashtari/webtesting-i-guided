# Testing
1. add jest --> yarn add -D jest
2. test files should be inside __tests__ // optional, you can just put the test file next to the actual folder you're testing
3. in package.json change "test": "jest --watch"
4. 



## Objectives

- setup testing from scratch.
- write unit tests.
- Test Drive Development.

AAA = Arrange -> Act -> Assert

function(args) => return value; To test it we invoke the function.

Component(props) =>  return UI; To test it we render a component.

Endpoint(date) => return response; To test it we make a request.

Test suite: a group of tests in the same file.

> make sure your test can fail, try this for every single test as you write it

## User Stories

As a ... role
I want ... feature
So that ... value

As an analyst
I want a calculator that can add two numbers
So I wan write sales reports

### Scenarios

Given...
    and...
    and...
When...
    and...
    and...
Then...
    and...
    and...

Given two numbers
When the add function is invoked
Then it should return the sum of the two numbers

## Test Driven Development

Red > Green > Refactor ----> commit

Red: write a failing test.

Green: write enough implementation code to make the test pass.

Refactor: rewrite the code without changing the functionality. Reformatting the test and implementation code without breaking the tests.

## What to test
start with low hanging fruit --> happy path (your basic assumptions)
then check for invalid input
then move on to edge cases

