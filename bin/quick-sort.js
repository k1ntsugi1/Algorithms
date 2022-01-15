#!/usr/bin/env node
import quickSort from '../src/kinds-of-quick-sort.js';
import { getMas } from '../src/index.js';

const mas = getMas();

console.log(`the massive that was sorted by the quick-Sort: [${quickSort(mas)}]`);
