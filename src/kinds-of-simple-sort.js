// O(n^2);

export function bubbleSort(mas) {
  const masSorted = mas.slice();
  for (let i = masSorted.length; i > 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (masSorted[j] > masSorted[j + 1]) {
        [masSorted[j], masSorted[j + 1]] = [masSorted[j + 1], masSorted[j]];
      }
    }
  }
  return masSorted;
}

export function coctailSort(mas) {
  const masSorted = mas.slice();
  let lowIndex = 0;
  let highIndex = masSorted.length - 1;
  while (lowIndex < highIndex) {
    for (let j = lowIndex; j < highIndex; j += 1) {
      if (masSorted[j] > masSorted[j + 1]) {
        [masSorted[j], masSorted[j + 1]] = [masSorted[j + 1], masSorted[j]];
      }
    }
    highIndex -= 1;
    for (let i = highIndex; i > lowIndex; i -= 1) {
      if (masSorted[i - 1] > masSorted[i]) {
        [masSorted[i], masSorted[i - 1]] = [masSorted[i - 1], masSorted[i]];
      }
    }
    lowIndex += 1;
  }
  return masSorted;
}

export function evenUnevenSort(mas) {
  const masSorted = mas.slice();
  let circle;
  do {
    circle = false;

    for (let i = 0; i < masSorted.length; i += 2) {
      if (masSorted[i] > masSorted[i + 1]) {
        [masSorted[i], masSorted[i + 1]] = [masSorted[i + 1], masSorted[i]];
        circle = true;
      }
    }

    for (let j = 1; j < masSorted.length; j += 2) {
      if (masSorted[j] > masSorted[j + 1]) {
        [masSorted[j], masSorted[j + 1]] = [masSorted[j + 1], masSorted[j]];
        circle = true;
      }
    }
  } while (circle);

  return masSorted;
}

export function factorReductionSort(mas) {
  const masSorted = mas.slice();
  let check = 2;
  let step = masSorted.length - 1;
  const factorReduction = 1.247;

  while (masSorted.length !== 0 && check) {
    for (let i = 0; i < masSorted.length - 1; i += 1) {
      if (masSorted[i] > masSorted[i + step]) {
        [masSorted[i], masSorted[i + step]] = [masSorted[i + step], masSorted[i]];
      }
      if (i + step === masSorted.length - 1) break;
    }
    if (step === 1) {
      check -= 1;
    } else {
      step = Math.floor(step / factorReduction);
    }
  }
  return masSorted;
}

export function choiceSort(mas) {
  const masClone = mas.slice();
  const sortedMas = [];
  const savedLength = masClone.length;
  for (let j = 0; j < savedLength; j += 1) {
    let savedIndex = 0;
    let smallestItem = masClone[savedIndex];
    for (let i = 0; i < masClone.length; i += 1) {
      if (masClone[i] < smallestItem) [smallestItem, savedIndex] = [masClone[i], i];
    }

    sortedMas.push(smallestItem);
    masClone.splice(savedIndex, 1);
  }
  return sortedMas;
}
