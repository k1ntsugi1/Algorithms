/* eslint-env jest */
import { quickSort, quickSort2 } from '../src/kinds-of-quick-sort.js';

let mas;
let mas2;
let mas3;
let mas4;

beforeEach(() => {
  mas = [5, 3, 4, 2, 1, 6, 7, 8];
  mas2 = [-5, -3, -4, -2, -1, -6, -7, -8];
  mas3 = [1];
  mas4 = [];
});

test('quickSort', () => {
  expect(quickSort(mas)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(quickSort(mas2)).toEqual([-8, -7, -6, -5, -4, -3, -2, -1]);
  expect(quickSort(mas3)).toEqual([1]);
  expect(quickSort2(mas4)).toEqual([]);
});

test('quickSort2', () => {
  expect(quickSort2(mas)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(quickSort2(mas2)).toEqual([-8, -7, -6, -5, -4, -3, -2, -1]);
  expect(quickSort2(mas3)).toEqual([1]);
  expect(quickSort2(mas4)).toEqual([]);
});
