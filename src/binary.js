import readlineSync from 'readline-sync';

function getItem() {
  const item = +readlineSync.question('Print Item: ');
  return item;
}

function getMas() {
  const mas = [];
  const lengthOfmas = +readlineSync.question('Print length of massive: ');
  for (let i = 0; i < lengthOfmas; i += 1) {
    const getElement = `Print ${i} element of massive: `;
    const element = +readlineSync.question(getElement);
    mas.push(element);
  }
  return mas;
}

function sortMas(mas) {
  if (mas === null) return null;
  const masSorted = [];
  /* eslint-disable-next-line */
  for (const key of mas) {
    masSorted.push(key);
  }
  console.log(`Unsorted massive: [${masSorted}]`);
  for (let j = masSorted.length - 1; j > 0; j -= 1) {
    for (let i = 0; i < j; i += 1) {
      if (masSorted[i] > masSorted[i + 1]) {
        const cyrcle = masSorted[i];
        masSorted[i] = masSorted[i + 1];
        masSorted[i + 1] = cyrcle;
      }
    }
  }
  console.log(`Sorted massive: [${masSorted}]`);
  return masSorted;
}

export default function binarySearch() {
  const correctItem = getItem();
  const mas = sortMas(getMas());

  let highIndex = mas.length - 1;
  let lowIndex = 0;
  let counterCircle = 0;

  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    const guess = mas[midIndex];

    if (guess === correctItem) return `index of item: ${midIndex}`;
    if (guess > correctItem) {
      highIndex = midIndex;
    } else {
      lowIndex = midIndex;
    }
    if (Math.log2(mas.length) < counterCircle) break;
    counterCircle += 1;
  }
  return 'massive doesn\'t have item, print new item';
}
