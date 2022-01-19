import quickSort from './kinds-of-quick-sort.js';

function sumOfItems(mas) {
  const masClone = mas.slice();
  if (masClone.length === 0) return 0;
  return masClone.pop() + sumOfItems(masClone);
}

function countLengtOfMas(mas) {
  const masClone = mas.slice();
  if (masClone.length === 0) return 0;
  masClone.pop();
  return (1 + countLengtOfMas(masClone));
}

function maxOfList(mas) {
  const masClone = mas.slice();
  if (masClone.length === 0) return 0;
  const max = masClone.pop();
  if (max > maxOfList(masClone)) {
    return max;
  }
  return maxOfList(masClone);
}

function binarySearch(mas, item, count = 1, sumOfIndexes = 0) {
  let sortedMas = count === 1 ? quickSort(mas) : mas;
  console.log(sortedMas);
  const highIndex = sortedMas.length - 1;
  const lowIndex = 0;
  const mid = Math.floor((highIndex + lowIndex) / 2);
  let countDepth = count + 1;

  if (sortedMas[mid] === item) return mid + sumOfIndexes;
  if (sortedMas.length <= 1) return 'massive doesnt has item';

  if (sortedMas[mid] > item) {
    sortedMas = sortedMas.slice(lowIndex, mid);
    countDepth += 1;
    return binarySearch(sortedMas, item, countDepth);
  }
  sortedMas = sortedMas.slice(mid + 1);
  countDepth += 1;
  // eslint-disable-next-line no-param-reassign
  sumOfIndexes += 1 + mid;
  return binarySearch(sortedMas, item, countDepth, sumOfIndexes);
}

export {
  sumOfItems, countLengtOfMas,
  maxOfList, binarySearch,
};
