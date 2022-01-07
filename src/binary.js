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
    console.log(guess);
    if (guess === correctItem) return (`index of item: ${midIndex}`);
    if (guess > correctItem) {
      /* eslint-disable-next-line */
      midIndex % 2 === 0 ? highIndex = midIndex : highIndex = midIndex - 1; // if index === 1 I have to decrease index on 1 point else I can't reach first index;
      console.log(`${highIndex} - highIndex`);
    } else {
      /* eslint-disable-next-line */
      midIndex % 2 === 0 ? lowIndex = midIndex : lowIndex = midIndex + 1; // else I can't reach last index because of Math.floor;
      console.log(`${lowIndex} - lowIndex`);
    }
    if (Math.log2(mas.length) < counterCircle) break;
    counterCircle += 1;
  }
  return 'massive doesn\'t have item, print new item';
}
