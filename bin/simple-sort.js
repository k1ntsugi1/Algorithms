#!/usr/bin/env node
import {
  bubbleSort,
  choiceSort,
  coctailSort,
  evenUnevenSort,
  factorReductionSort,
} from '../src/kinds-of-simple-sort.js';
import { getMas } from '../src/index.js';

const mas = getMas();

console.log(`the massive that was sorted by the bubble-Sort: [${bubbleSort(mas)}]`);

console.log(`the massive that was sorted by the coctail-Sort: [${coctailSort(mas)}]`);

console.log(`the massive that was sorted by the even-uneven-Sort: [${evenUnevenSort(mas)}]`);

console.log(`the massive that was sorted by the factor-reduction-Sort: [${factorReductionSort(mas)}]`);

console.log(`the massive that was sorted by the choice-Sort: [${choiceSort(mas)}]`);
