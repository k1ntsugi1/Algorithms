import { quickSort } from './kinds-of-quick-sort.js';

function sumOfItems(mas) {
  const masClone = mas.slice();
  if (masClone.length === 0) return 0;
  return masClone.pop() + sumOfItems(masClone);
}

function countLengthOfMas(mas) {
  const masClone = mas.slice();
  if (masClone.length === 0) return 0;
  masClone.pop();
  return (1 + countLengthOfMas(masClone));
}

function findMaxOfList(mas) {
  const masClone = mas.slice();
  if (masClone.length === 1) return masClone[0];
  if (masClone.length === 0) return null;
  const max = masClone.pop();
  if (max > findMaxOfList(masClone)) {
    return max;
  }
  return findMaxOfList(masClone);
}

function binarySearch(item, mas, count = 1, sumOfIndexes = 0) {
  let sortedMas = count === 1 ? quickSort(mas) : mas;
  const highIndex = sortedMas.length - 1;
  const lowIndex = 0;
  const mid = Math.floor((highIndex + lowIndex) / 2);
  let countDepth = count + 1;

  if (sortedMas[mid] === item) return mid + sumOfIndexes;
  if (sortedMas.length <= 1) return null;

  if (sortedMas[mid] > item) {
    sortedMas = sortedMas.slice(lowIndex, mid);
    countDepth += 1;
    return binarySearch(item, sortedMas, countDepth);
  }
  sortedMas = sortedMas.slice(mid + 1);
  countDepth += 1;
  // eslint-disable-next-line no-param-reassign
  sumOfIndexes += 1 + mid;
  return binarySearch(item, sortedMas, countDepth, sumOfIndexes);
}

export {
  sumOfItems, countLengthOfMas,
  findMaxOfList, binarySearch,
};
