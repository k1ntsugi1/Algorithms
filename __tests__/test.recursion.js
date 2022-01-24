/* eslint-env jest */
import {
  sumOfItems, countLengthOfMas,
  findMaxOfList, binarySearch,
} from '../src/recursion.js';

let mas;
let mas2;
let mas3;
let mas4;

beforeEach(() => {
  mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  mas2 = [];
  mas3 = [-1, -2, -3, -4, -5];
  mas4 = [5, 5, 5, 5, 5, 5];
});

test('sumOfItems', () => {
  expect(sumOfItems(mas)).toBe(55);
  expect(sumOfItems(mas3)).toBe(-15);
  expect(sumOfItems(mas2)).toBe(0);
});

test('countLengthOfList', () => {
  expect(countLengthOfMas(mas)).toBe(10);
  expect(countLengthOfMas(mas2)).toBe(0);
});

test('findMaxOfList', () => {
  expect(findMaxOfList(mas)).toBe(10);
  expect(findMaxOfList(mas2)).toBeNull();
  expect(findMaxOfList(mas3)).toBe(-1);
  expect(findMaxOfList(mas4)).toBe(5);
});

describe('binarySearch', () => {
  test('binarySearch_commonWork', () => {
    expect(binarySearch(5, mas)).toBe(4);
    expect(binarySearch(1, mas)).toBe(0);
    expect(binarySearch(10, mas)).toBe(9);
  });

  test('binarySearch_edgeCase', () => {
    expect(binarySearch(11, mas)).toBeNull();
    expect(binarySearch(1234, mas2)).toBeNull();
  });
});
