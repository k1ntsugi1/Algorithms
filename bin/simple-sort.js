#!/usr/bin/env node
import { bubbleSort, coctailSort } from '../src/kinds-of-simple-sort.js';
import { getMas } from '../src/index.js';

const mas = getMas();

console.log(`the massive that was sorted by the bubble-Sort: [${bubbleSort(mas)}]`);

console.log(`the massive that was sorted by the coctail-Sort: [${coctailSort(mas)}]`);
