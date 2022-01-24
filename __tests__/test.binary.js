import { binarySearch } from '../src/binary.js';

let mas;
let mas2;
beforeEach(() => {
  mas = [1, 2, 3, 4, 5, 6];
  mas2 = [];
})
test('binarySearch_commonWork', () => {
  expect(binarySearch(5, mas)).toBe(4);
  expect(binarySearch(1, mas)).toBe(0);
  expect(binarySearch(6, mas)).toBe(5);
});

test('binarySearch_edgeCase', () => {
  expect(binarySearch(8, mas)).toBeNull();
  expect(binarySearch(1234, mas2)).toBeNull();
})
