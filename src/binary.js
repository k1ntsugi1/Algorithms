import readlineSync from 'readline-sync';
import { coctailSort } from './kinds-of-simpl-sort.js';
import { getMas } from './index.js';

function getItem() {
  const item = Number(readlineSync.question('Print Item: '));
  return item;
}

export default function binarySearch() {
  const correctItem = getItem();
  const mas = coctailSort(getMas());

  let highIndex = mas.length - 1;
  let lowIndex = 0;
  let counterCircle = 0;

  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    const guess = mas[midIndex];
    if (guess === correctItem) return (`index of item: ${midIndex}`);
    if (guess > correctItem) {
      highIndex = midIndex - 1; // else I can't reach first index;
    } else {
      lowIndex = midIndex + 1; // else I can't reach last index because of Math.floor;
    }
    if (Math.log2(mas.length) < counterCircle) break;
    counterCircle += 1;
  }
  return 'massive doesn\'t have item, print new item';
}
