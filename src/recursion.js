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

function binarySearch(mas, item) {
  let sortedMas = quickSort(mas);
  const highIndex = sortedMas.length - 1;
  const lowIndex = 0;
  const mid = Math.floor((highIndex + lowIndex) / 2);

  if (sortedMas[mid] === item) return mid;

  if (sortedMas[mid] > item) {
    sortedMas = sortedMas.slice(lowIndex, mid);
    return binarySearch(sortedMas, item);
  }
  sortedMas = sortedMas.slice(mid + 1);
  return binarySearch(sortedMas, item);
}

export {
  sumOfItems, countLengtOfMas,
  maxOfList, binarySearch,
};
