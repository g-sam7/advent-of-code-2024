const spliceMulInstuctions = (instruction) => {
  const regex = /mul\(\d+,\s*\d+\)/g;
  const matches = instruction.match(regex);
  return matches ? matches.join(' ') : '';
}

const extractPairs = (instructionArray) => {
  return instructionArray.map(instruction => {
    const numbers = instruction.match(/\d+/g);
    return [parseInt(numbers[0]), parseInt(numbers[1])];
  });
}

const mul = (x, y) => x * y;

export const getUncorruptedCount = (instructions) => {
  const splicedInstructions = spliceMulInstuctions(instructions);
  const instructionArray = splicedInstructions.split(' ').filter(Boolean);
  const pairs = extractPairs(instructionArray);
  const count = pairs.reduce((sum, [x, y]) => sum + mul(x, y), 0);
  return count;
};