import { copyMas } from './index.js';

export function bubbleSort(mas) {
  const masSorted = copyMas(mas);
  for (let i = masSorted.length; i > 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (masSorted[j] > masSorted[j + 1]) {
        [masSorted[j], masSorted[j + 1]] = [masSorted[j + 1], masSorted[j]];
      }
    }
  }
  console.log(`Sorted massive: [${masSorted}]`);
  return masSorted;
}

export function coctailSort(mas) {
  const masSorted = copyMas(mas);
  let lowIndex = 0;
  let highIndex = masSorted.length - 1;
  while (lowIndex < highIndex) {
    for (let j = lowIndex; j < highIndex; j += 1) {
      if (masSorted[j] > masSorted[j + 1]) {
        [masSorted[j], masSorted[j + 1]] = [masSorted[j + 1], masSorted[j]];
      }
      highIndex = j;
    }

    for (let i = highIndex; i > lowIndex; i -= 1) {
      if (masSorted[i] < masSorted[i - 1]) {
        [masSorted[i], masSorted[i - 1]] = [masSorted[i - 1], masSorted[i]];
      }
      lowIndex = i;
    }
  }
  console.log(`Sorted massive: [${masSorted}]`);
  return masSorted;
}
