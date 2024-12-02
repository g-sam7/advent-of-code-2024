const isAllIncreasingOrDecreasing = (arr) => {
  if (arr.length <= 1) return true;

  let isIncreasing = arr[1] > arr[0];
  let isDecreasing = arr[1] < arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (isIncreasing && arr[i] <= arr[i - 1]) return false;
    if (isDecreasing && arr[i] >= arr[i - 1]) return false;
  }
  return true;
};

const differsByAtLeastOneAndAtMostThree = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const difference = Math.abs(arr[i] - arr[i + 1]);
    if (difference < 1 || difference > 3) return false;
  }
  return true;
};

const isSafeWithTolerance = (arr) => {
  if (isAllIncreasingOrDecreasing(arr) && differsByAtLeastOneAndAtMostThree(arr)) {
    return true;
  }
  for (let i = 0; i < arr.length; i++) {
    const modifiedArray = arr.slice(0, i).concat(arr.slice(i + 1));
    if (isAllIncreasingOrDecreasing(modifiedArray) && differsByAtLeastOneAndAtMostThree(modifiedArray)) {
      return true;
    }
  }
  return false;
};

export const countSafeReports = (data) => {
  return data.reduce((count, currentArray) => {
    const isLinear = isAllIncreasingOrDecreasing(currentArray);
    const abidesByChangeRules = differsByAtLeastOneAndAtMostThree(currentArray);
    const isSafe = isLinear && abidesByChangeRules;
    return count + (isSafe ? 1 : 0);
  }, 0);
};

export const countSafeReportsWithTolerance = (data) => {
  return data.reduce((safeCount, report) => safeCount + (isSafeWithTolerance(report) ? 1 : 0), 0);
};