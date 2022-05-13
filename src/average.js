const average = (array) => {
  let sum = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let i in array) {
    if (typeof array[i] === 'number') {
      sum += array[i];
    } else { 
      return undefined;
    }
  }
  return Math.round(sum / array.length);
};

module.exports = average;