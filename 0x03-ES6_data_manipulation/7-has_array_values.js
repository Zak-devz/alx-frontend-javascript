const hasValuesFromArray = (s, arr) => {
  for (const i of arr) {
    if (!s.has(i)) {
      return false;
    }
  }
  return true;
};

export default hasValuesFromArray;
