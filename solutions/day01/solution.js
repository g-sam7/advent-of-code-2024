import { readInput } from "../../utils/helpers.js";
import { calculateTotalDistance, calculateSimilarityScore } from './functions.js';

const input = await readInput('solutions/day01/input.txt');

const parsedPairs = input.trim().split('\n').reduce((acc, line) => {
  const [a, b] = line.split(/\s+/).map(Number);
  acc.push([a, b]);
  return acc;
}, []);

console.log(`Total Distance: ${calculateTotalDistance(parsedPairs)}`);
console.log(`Total Simularity Score: ${calculateSimilarityScore(parsedPairs)}`);