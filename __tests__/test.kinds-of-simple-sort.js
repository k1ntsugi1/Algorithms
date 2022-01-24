/* eslint-env jest */
import {
  bubbleSort, coctailSort,
  evenUnevenSort, factorReductionSort,
  choiceSort,
} from '../src/kinds-of-simple-sort.js';

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

test('bubleSort', () => {
  expect(bubbleSort(mas)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(bubbleSort(mas2)).toEqual([-8, -7, -6, -5, -4, -3, -2, -1]);
  expect(bubbleSort(mas3)).toEqual([1]);
  expect(bubbleSort(mas4)).toEqual([]);
});

test('coctailSort', () => {
  expect(coctailSort(mas)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(coctailSort(mas2)).toEqual([-8, -7, -6, -5, -4, -3, -2, -1]);
  expect(coctailSort(mas3)).toEqual([1]);
  expect(coctailSort(mas4)).toEqual([]);
});

test('evenUnevenSort', () => {
  expect(evenUnevenSort(mas)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(evenUnevenSort(mas2)).toEqual([-8, -7, -6, -5, -4, -3, -2, -1]);
  expect(evenUnevenSort(mas3)).toEqual([1]);
  expect(evenUnevenSort(mas4)).toEqual([]);
});
/* a lot of time for run
test('factorReductionSort', () => {
  expect(factorReductionSort(mas)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(factorReductionSort(mas2)).toEqual([-8, -7, -6, -5, -4, -3, -2, -1]);
  expect(factorReductionSort(mas3)).toEqual([1]);
  expect(factorReductionSort(mas4)).toEqual([]);
});
*/
test('choiceSort', () => {
  expect(choiceSort(mas)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(choiceSort(mas2)).toEqual([-8, -7, -6, -5, -4, -3, -2, -1]);
  expect(choiceSort(mas3)).toEqual([1]);
  expect(choiceSort(mas4)).toEqual([]);
});
