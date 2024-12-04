import { getUncorruptedCount } from "./functions.js";

describe("Day 03: Mull It Over", () => {
  describe("getUncorruptedCount", () => {
    it("should return the number of uncorrupted mul instructions", () => {
      const instructions = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
      expect(getUncorruptedCount(instructions)).toBe(161);
    });
    it("should return 0 if no uncorrupted mul instructions", () => {
      const instructions = "add(1, 2) add(3, 4)";
      expect(getUncorruptedCount(instructions)).toBe(0);
    });
    it("should return 0 if empty string", () => {
      expect(getUncorruptedCount("")).toBe(0);
    });
  });
});