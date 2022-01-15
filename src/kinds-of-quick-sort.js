// O(n*log(n))
function quickSort(mas) {
  if (mas.length <= 1) return mas;
  const pivot = mas[0];

  const middleElement = mas.filter((item) => item === pivot);
  const bigElements = mas.filter((item) => item > pivot);
  const smallElements = mas.filter((item) => item < pivot);

  return quickSort(smallElements).concat(middleElement, quickSort(bigElements));
}
export default quickSort;

// i use code that below if i dont wont to use methods .filter or .reduce
/*
function quickSort(mas) {
  if (mas.length <= 1) return mas;
  const pivot = mas[0];
  const bigElements = [];
  const smallElements = [];
  for (let i = 1; i < mas.length; i +=1){
    const currentItem = mas[i];
    currentItem >= pivot ? bigElements.push(currentItem): smallElements.push(currentItem);
  }
  return quickSort(smallElements).concat(pivot, quickSort(bigElements));
}
*/
