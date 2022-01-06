import readlineSync from 'readline-sync';

function getIndex() {
  const index = readlineSync.question('Print Index: ');
  // console.log(index);
  return index;
}

function getMas(index) {
  const mas = [];
  const lengthOfmas = readlineSync.question('Print length of massive: ');
  if ((lengthOfmas - 1) < index) return null;
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
  const index = getIndex();
  // console.log(index);
  const mas = sortMas(getMas(index));
  // console.log(mas);
  if (mas === null) return 'index over length of massive, try again';
  let highIndex = mas.length - 1;
  let lowIndex = 0;
  while (lowIndex <= highIndex) {
    const mid = Math.floor((lowIndex + highIndex) / 2);
    // console.log(mid);
    const guess = mas[mid];
    // console.log(guess);
    if (guess === mas[index]) return guess;
    if (guess > mas[index]) {
      highIndex = mid;
    } else {
      lowIndex = mid;
    }
  }
  return null;
}
