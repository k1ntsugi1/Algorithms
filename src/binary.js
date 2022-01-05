// import readlineSync from 'readline-sync';

export default function binarySearch(mas, index) {
  let high = mas.length - 1;
  let low = 0;
  while (low <= high) {
    const mid = (low + high) / 2;
    const guess = mas[mid];
    if (guess === mas[index]) return mid;
    if (guess > mas[index]) high = mid;
    if (guess < mas[index]) low = mid;
  }
  return null;
}
// cоздать функцию по созданию массива
// создать функцию по запросу индекса
