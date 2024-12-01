export const calculateTotalDistance = (parsedPairs) => {
  const left = parsedPairs.map(([a]) => a).sort((a, b) => a - b);
  const right = parsedPairs.map(([, b]) => b).sort((a, b) => a - b);
  return left.reduce((sum, leftNum, index) => {
    const rightNum = right[index];
    return sum + Math.abs(leftNum - rightNum);
  }, 0);
};

export const calculateSimularityScore = (parsedPairs) => {
  const left = parsedPairs.map(([a]) => a);
  const right = parsedPairs.map(([, b]) => b);

  const frequencyObject = left.map((num) => {
    const scores = {
      [num]: right.filter((rightNum) => rightNum === num).length * num
    };
    return scores;
  });

  const totalScore = frequencyObject.reduce((sum, obj) => {
    const value = Object.values(obj)[0];
    return sum + value;
  }, 0);

  return totalScore;
};