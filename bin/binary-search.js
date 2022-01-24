#!/usr/bin/env node
import { binarySearch, getItem } from '../src/binary.js';
import { getMas } from '../src/index.js';
import { coctailSort } from '../src/kinds-of-simple-sort.js';

console.log('showing example of working:');
const correctItem = getItem();
const mas = coctailSort(getMas());
console.log(binarySearch(correctItem, mas));
