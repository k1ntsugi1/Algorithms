#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getMas } from '../src/index.js';
import {
  sumOfItems, countLengtOfMas,
  maxOfList, binarySearch,
} from '../src/recursion.js';

const mas = getMas();

console.log(`sum of massive items: ${sumOfItems(mas)}`);

console.log(`length of massive: ${countLengtOfMas(mas)}`);

console.log(`max of massive items: ${maxOfList(mas)}`);

const item = readlineSync.question('print number for Bynary-search:');
console.log(`finde index with binary-search through recursion: ${binarySearch(mas, +item)}`);
