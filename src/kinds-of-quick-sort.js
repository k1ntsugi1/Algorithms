// O(n*log(n))
function quickSort(mas) {
  if (mas.length <= 1) return mas;
  const index = Math.round((mas.length - 1) / 2); // for log(n);
  const pivot = mas[index];

  const middleElement = mas.filter((item) => item === pivot);
  const bigElements = mas.filter((item) => item > pivot);
  const smallElements = mas.filter((item) => item < pivot);

  return quickSort(smallElements).concat(middleElement, quickSort(bigElements));
}

// i use code that below if i dont wont to use methods .filter or .reduce

function quickSort2(mas) {
  if (mas.length <= 1) return mas;
  const pivot = mas[0];
  const bigElements = [];
  const smallElements = [];
  for (let i = 1; i < mas.length; i += 1) {
    const currentItem = mas[i];
    if (currentItem >= pivot) {
      bigElements.push(currentItem);
    } else {
      smallElements.push(currentItem);
    }
  }
  return quickSort2(smallElements).concat(pivot, quickSort(bigElements));
}
export { quickSort, quickSort2 };
