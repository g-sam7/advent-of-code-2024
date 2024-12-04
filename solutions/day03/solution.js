import { readInput } from "../../utils/helpers.js";
import { getUncorruptedCount } from "./functions.js";

const input = await readInput('solutions/day03/input.txt');
const solution = getUncorruptedCount(input);

console.log("The result of all uncorrupted mul instructions: ", solution);