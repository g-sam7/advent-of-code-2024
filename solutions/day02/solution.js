import { readInput } from "../../utils/helpers.js";
import { countSafeReports, countSafeReportsWithTolerance } from "./functions.js";

const input = await readInput('solutions/day02/input.txt');
const reports = input.split('\n').map((r) => r.split(' ').map(Number));

console.log("Number of safe reports: ", countSafeReports(reports));
console.log("Number of safe reports with tolerance: ", countSafeReportsWithTolerance(reports));