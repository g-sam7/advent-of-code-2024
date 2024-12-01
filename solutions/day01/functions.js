export const calculateTotalDistance = (parsedPairs) => {
  const left = parsedPairs.map(([a]) => a).sort((a, b) => a - b);
  const right = parsedPairs.map(([, b]) => b).sort((a, b) => a - b);

  return left.reduce((sum, leftNum, index) => {
    const rightNum = right[index];
    return sum + Math.abs(leftNum - rightNum);
  }, 0);
};