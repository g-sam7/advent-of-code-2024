import { countSafeReports, countSafeReportsWithTolerance } from "./functions.js";

const testData = [
  [7, 6, 4, 2, 1],
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1],
  [1, 3, 2, 4, 5],
  [8, 6, 4, 4, 1],
  [1, 3, 6, 7, 9],
];

const unSafeReports = [
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1],
  [1, 3, 2, 4, 5],
  [8, 6, 4, 4, 1],
];

const unSafeReportsForTolerance = [
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1],
];

describe("Day 02: Red Nosed Reports", () => {
  describe("countSafeReports", () => {
    it("should return the number of safe reports", () => {
      expect(countSafeReports(testData)).toBe(2);
    });
    it("should return 0 if no safe reports", () => {
      expect(countSafeReports(unSafeReports)).toBe(0);
    });
    it("should return 0 if empty array", () => {
      expect(countSafeReports([])).toBe(0);
    });
  });
  
  describe("countSafeReportsWithTolerance", () => {
    it("should return the number of safe reports with tolerance", () => {
      expect(countSafeReportsWithTolerance(testData)).toBe(4);
    });
    it("should return 0 if no safe reports with tolerance", () => {
      expect(countSafeReportsWithTolerance(unSafeReportsForTolerance)).toBe(0);
    });
    it("should return 0 if empty array", () => {
      expect(countSafeReportsWithTolerance([])).toBe(0);
    });
  });
});