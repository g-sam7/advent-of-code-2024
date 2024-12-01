import { calculateTotalDistance } from './functions.js';

describe('calculateTotalDistance', () => {
  it('should calculate the total distance correctly for a given set of pairs', () => {
    const parsedPairs = [
      [3, 4],
      [4, 3],
      [2, 5],
      [1, 3],
      [3, 9],
      [3, 3],
    ];
    
    const result = calculateTotalDistance(parsedPairs);
    expect(result).toBe(11);
  });

  it('should return 0 for identical left and right lists', () => {
    const parsedPairs = [
      [1, 1],
      [2, 2],
      [3, 3],
    ];
    
    const result = calculateTotalDistance(parsedPairs);
    expect(result).toBe(0);
  });

  it('should handle single pair correctly', () => {
    const parsedPairs = [
      [5, 10],
    ];
    
    const result = calculateTotalDistance(parsedPairs);
    expect(result).toBe(5);
  });

  it('should handle empty input', () => {
    const parsedPairs = [];
    
    const result = calculateTotalDistance(parsedPairs);
    expect(result).toBe(0);
  });
});
