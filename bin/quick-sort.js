#!/usr/bin/env node
import { quickSort, quickSort2 } from '../src/kinds-of-quick-sort.js';
import getMas from '../src/index.js';

const mas = getMas();

console.log(`the massive that was sorted by the quick-Sort: [${quickSort(mas)}]`);
console.log(`the massive that was sorted by the quick-Sort2: [${quickSort2(mas)}]`);
