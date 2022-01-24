import readlineSync from 'readline-sync';

export function getItem() {
  const item = Number(readlineSync.question('Print Item: '));
  return item;
}

export function binarySearch(correctItem, mas) {
  let highIndex = mas.length - 1;
  let lowIndex = 0;
  let counterCircle = 0;

  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    const guess = mas[midIndex];
    if (guess === correctItem) return midIndex;
    if (guess > correctItem) {
      highIndex = midIndex - 1; // else I can't reach first index;
    } else {
      lowIndex = midIndex + 1; // else I can't reach last index because of Math.floor;
    }
    if (Math.log2(mas.length) < counterCircle) break;
    counterCircle += 1;
  }
  return null;
}
