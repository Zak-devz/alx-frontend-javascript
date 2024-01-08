const getStudentIdsSum = (students) => {
  const totalId = students.reduce(
    (acc, currentVal) => acc + currentVal.id,
    // eslint-disable-next-line comma-dangle
    0
  );
  return totalId;
};

export default getStudentIdsSum;
